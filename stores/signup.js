// stores/signup.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSignupStore = defineStore("signup", () => {
  // State variables
  const email = ref("");
  const loginMethod = ref("magic-link");
  const password = ref("");
  const jobRole = ref("");
  const companySize = ref("");
  const signupSource = ref("");
  const teamMembers = ref([]);
  const termsConfirmed = ref(false);
  const useHaveIBeenPwned = ref(true);
  const errors = ref([]);

  const config = useRuntimeConfig();
  const { DASHBOARD_URL } = config.public;

  // Setters
  function setCredentials(data) {
    email.value = data.email ?? email.value;
    loginMethod.value = data.loginMethod ?? loginMethod.value;
    password.value = data.password ?? password.value;
    termsConfirmed.value = data.termsConfirmed ?? termsConfirmed.value;
    useHaveIBeenPwned.value = data.useHaveIBeenPwned ?? useHaveIBeenPwned.value;
  }

  function setCustomerInfo(data) {
    jobRole.value = data.jobRole ?? jobRole.value;
    companySize.value = data.companySize ?? companySize.value;
    signupSource.value = data.signupSource ?? signupSource.value;
  }

  function setTeamMembers(members) {
    teamMembers.value = members;
  }

  // Validation for Step 1
  async function validateStep1() {
    clearErrors();

    try {
      const response = await fetch(`${DASHBOARD_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.value,
          loginMethod: loginMethod.value,
          password:
            loginMethod.value === "password" ? password.value : undefined,
          termsConfirmed: termsConfirmed.value,
          useHaveIBeenPwned: useHaveIBeenPwned.value,
          isValidating: true,
        }),
      });

      const data = await response.json();
      if (data.ok) return true;

      if (data.errors && Array.isArray(data.errors)) {
        errors.value = data.errors.map((error) => ({
          field: error.field,
          message: error.message,
        }));
      } else if (data.field && data.error) {
        errors.value.push({ field: data.field, message: data.error });
      } else {
        errors.value.push({
          field: "general",
          message: data.error || "An error occurred. Please try again.",
        });
      }

      return false;
    } catch (error) {
      console.error("Error during validation:", error);
      errors.value.push({
        field: "general",
        message: "An unexpected error occurred. Please try again.",
      });
      return false;
    }
  }

  // Submit Signup
  async function submitSignup() {
    clearErrors();

    try {
      const response = await fetch(`${DASHBOARD_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.value,
          loginMethod: loginMethod.value,
          password: password.value,
          jobRole: jobRole.value,
          companySize: companySize.value,
          signupSource: signupSource.value,
          teamMembers: teamMembers.value,
          termsConfirmed: termsConfirmed.value,
          useHaveIBeenPwned: useHaveIBeenPwned.value,
          isValidating: false,
        }),
      });

      const data = await response.json();
      if (data.ok) return data;

      if (data.errors && Array.isArray(data.errors)) {
        // Process errors and assign index for teamMembers
        data.errors.forEach((error) => {
          if (error.field.startsWith("teamMembers")) {
            // Extract index and field name
            const matches = error.field.match(/teamMembers\[(\d+)\]\.(\w+)/);
            if (matches) {
              const index = parseInt(matches[1], 10);
              const fieldName = `teamMembers.${matches[2]}`;
              errors.value.push({
                field: fieldName,
                index,
                message: error.message,
              });
            } else {
              errors.value.push({ field: error.field, message: error.message });
            }
          } else {
            errors.value.push({
              field: error.field,
              message: error.message,
            });
          }
        });
      } else if (data.field && data.error) {
        errors.value.push({ field: data.field, message: data.error });
      } else {
        throw new Error(data.error || "Signup failed");
      }

      throw new Error("Validation failed");
    } catch (error) {
      if (error.message !== "Validation failed") {
        console.error("Error during signup submission:", error);
        errors.value.push({
          field: "general",
          message:
            "An unexpected error occurred during signup. Please try again.",
        });
      }

      // Always throw error
      throw error;
    }
  }

  function setGeneralError(message) {
    errors.value.push({
      field: "general",
      message,
    });
  }

  // Error Handling
  function clearErrors() {
    errors.value = [];
  }

  function clearError(field, index = null) {
    errors.value = errors.value.filter(
      (error) =>
        !(error.field === field && (index === null || error.index === index)),
    );
  }

  return {
    email,
    loginMethod,
    password,
    jobRole,
    companySize,
    signupSource,
    teamMembers,
    termsConfirmed,
    useHaveIBeenPwned,
    errors,
    setCredentials,
    setCustomerInfo,
    setTeamMembers,
    validateStep1,
    submitSignup,
    clearErrors,
    clearError,
    setGeneralError,
  };
});
