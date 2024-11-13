<template>
  <div>
    <form @submit.prevent="submitTeamMembers" class="space-y-6">
      <h1 class="text-2xl lg:text-3xl font-bold mb-4">Add your team</h1>

      <SignupErrors :errors="errors" :other-errors="nonTeamMembersErrors" />

      <div v-for="(member, index) in teamMembers" :key="index">
        <label :for="'member-' + index" class="block text-sm font-medium">
          Email and role of your
          <span v-if="teamMembers.length > 1">{{ textNumber(index + 1) }}</span>
          colleague
        </label>
        <div class="mt-1 flex items-start space-x-2">
          <div class="flex-1">
            <input
              v-model="member.email"
              :id="'member-' + index"
              type="email"
              placeholder="Enter your colleague's email..."
              class="w-full"
              :class="{
                '!border-red-500 dark:!border-red-600':
                  teamMemberEmailError(index),
              }"
              @input="teamMemberClearError(index)"
            />
            <div v-if="teamMemberEmailError(index)" class="mt-1">
              <p class="text-sm text-red-500 dark:text-red-600">
                {{ teamMemberEmailError(index) }}
              </p>
            </div>
          </div>
          <div class="flex-0 w-[90px] lg:w-[175px] relative">
            <AddADeveloperHere
              v-if="index === 0 && !hasDeveloper"
              class="hidden lg:block absolute ml-4 pb-3 -translate-y-full w-20 stroke-gray-300 dark:stroke-gray-500"
            />

            <select
              :value="member.role"
              :id="'role-' + index"
              class="w-full"
              :class="{
                '!border-red-500 dark:!border-red-600':
                  teamMemberRoleError(index),
              }"
              @change="
                (e) => {
                  member.role = e.target.value;
                  teamMemberClearError(index);
                }
              "
            >
              <option key="none" value="" disabled>Select role</option>
              <option
                v-for="role in roles"
                :key="role.value"
                :value="role.value"
              >
                {{ role.label }}
              </option>
            </select>
            <div v-if="teamMemberRoleError(index)" class="mt-1">
              <p class="text-sm text-red-500 dark:text-red-600">
                {{ teamMemberRoleError(index) }}
              </p>
            </div>
          </div>
          <button
            @click="removeMember(index)"
            type="button"
            class="button ml-3"
          >
            <TrashIcon class="h-5 w-5" />
          </button>
        </div>
      </div>

      <div class="flex mt-8">
        <button
          @click="addMember"
          type="button"
          class="flex items-center button"
          :disabled="signupStore.isLoading"
        >
          <UserPlusIcon class="h-5 w-5 mr-2" />
          <span v-if="teamMembers.length === 0">Add a colleague</span>
          <span v-else>Add another colleague</span>
        </button>

        <div class="flex items-center ml-auto">
          <button
            type="submit"
            class="flex justify-center button"
            :disabled="signupStore.isLoading"
          >
            <CheckIcon class="h-5 w-5 mr-2" />
            Complete Signup
          </button>

          <ChartLoader
            v-if="signupStore.isLoading"
            class="ml-3 h-8 text-red-500 dark:text-red-600"
          />
        </div>
      </div>
    </form>
    <button
      @click="showRolesExplainer = !showRolesExplainer"
      type="button"
      class="mt-4 text-sm text-blue-500"
    >
      <span class="underline">What are these roles?</span>
      <ChevronDoubleDownIcon
        class="h-4 w-4 inline ml-1 transition-transform duration-500"
        :class="showRolesExplainer ? 'rotate-180' : 'rotate-0'"
      />
    </button>

    <div
      v-if="showRolesExplainer"
      class="mt-4 p-4 pb-2 border dark:border-none rounded-lg dark:bg-gray-900"
    >
      <div v-for="role in rolesWithDescriptions" :key="role.value" class="mb-4">
        <h3 class="font-medium mb-2">{{ role.label }}</h3>
        <p class="text-sm leading-loose">
          {{ role.description }}
        </p>
      </div>
      <p class="text-sm mt-4 mb-2">
        <a
          href="https://docs.simpleanalytics.com/explained/team-roles"
          target="_blank"
          class="text-blue-500 hover:text-blue-600 group"
        >
          Read more about team roles in our docs
          <ArrowRightIcon
            class="h-3 w-3 inline ml-0 group-hover:translate-x-1 transition-transform"
          />
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/outline";
import { ref, computed } from "vue";
import { useSignupStore } from "~/stores/signup";
import { useFieldErrors } from "~/composables/useFieldErrors";
import AddADeveloperHere from "./icons/AddADeveloperHere.vue";
import SignupErrors from "./SignupErrors.vue";
import ChartLoader from "./ChartLoader.vue";

const router = useRouter();
const signupStore = useSignupStore();
if (!signupStore.email) router.replace("/signup");

const emit = defineEmits(["next"]);

const teamMembers = ref([{ email: "", role: "" }]);
const errors = computed(() => signupStore.errors);

const hasDeveloper = computed(() => {
  return teamMembers.value.some((member) => member.role === "developer");
});

const teamMemberEmailError = (index) =>
  useFieldErrors(errors, `teamMembers.email`, index).value;

const teamMemberRoleError = (index) =>
  useFieldErrors(errors, `teamMembers.role`, index).value;

const nonTeamMembersErrors = computed(() => {
  return errors.value
    .filter((error) => !error.field?.startsWith("teamMembers"))
    .map((error) => error);
});

const addMember = () => {
  teamMembers.value.push({ email: "", role: "" });
};

const removeMember = (index) => {
  teamMembers.value.splice(index, 1);
  signupStore.clearError("teamMembers.email", index);
  signupStore.clearError("teamMembers.role", index);
};

const teamMemberClearError = (index) => {
  signupStore.clearError("teamMembers.email", index);
  signupStore.clearError("teamMembers.role", index);
};

const submitTeamMembers = () => {
  // Clear existing errors for teamMembers before submission
  signupStore.clearError("teamMembers");
  emit("next", { teamMembers: teamMembers.value });
};

const textNumber = (number) => {
  if (number > 10) {
    if (number % 10 === 1) {
      return number + "st";
    } else if (number % 10 === 2) {
      return number + "nd";
    } else if (number % 10 === 3) {
      return number + "rd";
    } else {
      return number + "th";
    }
  }

  return [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
  ][number - 1];
};

const roles = [
  { value: "admin", label: "Admin" },
  { value: "finance", label: "Finance Manager" },
  { value: "developer", label: "Developer" },
  { value: "analyst", label: "Analyst" },
  { value: "readonly", label: "Viewer" },
];

const showRolesExplainer = ref(false);

const rolesWithDescriptions = [
  {
    value: "admin",
    label: "Admin",
    description:
      "Admins can manage team members, adjust settings, and oversee daily operations. They have comprehensive access to all features and functionalities.",
  },
  {
    value: "finance",
    label: "Finance Manager",
    description:
      "Finance Managers can update billing information, manage subscriptions, and cancel them if necessary.",
  },
  {
    value: "developer",
    label: "Developer",
    description:
      "Developers can do everything that an analyst can and more. They can add websites to the team and modify website settings such as visibility (public/private), custom domain, and alerts for no traffic.",
  },
  {
    value: "analyst",
    label: "Analyst",
    description:
      "Analysts can add, change, and remove goals, update custom views (but not delete them), and modify some website settings related to dashboard viewing.",
  },
  {
    value: "readonly",
    label: "Viewer",
    description:
      "Viewers have restricted access with read-only permissions. They can view dashboards, goals, and events but cannot edit anything.",
  },
];
</script>
