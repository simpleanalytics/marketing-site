<template>
  <div>
    <PressMention :slug="slug">
      <h2>Automated transcript</h2>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (02:31):</p>
      <p class="mt-0">
        Adriaan van Rossum is a tech guy even at home. He likes to tinker with
        home automation like turning on and off the lights, which his girlfriend
        doesn't like the experiments at times outside of tech. He does kite
        surfing and travels around the world. He really enjoys Thailand,
        specifically the food there as he's a vegetarian for several years.
        Adriaan was a freelancer each time he built an application for his
        clients. He did the usual song and dance with Google Analytics. He
        copied and pasted the script. This didn't feel right and his girlfriend
        prompted him to build his own solution, so he did. This is the creation
        story of simple Analytics.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (03:15):
      </p>
      <p class="mt-0">
        So what we do at Simple Analytics, we basically are a competitor of
        Google Analytics and there's a few things that I don't really like about
        Google Analytics, and it started almost five years ago and I was
        installing Google Analytics for customers of me. I was freelancer at the
        time and I needed to instal the Google Analytics script for them because
        I was building websites. I was a front-end developer or full stack, and
        it didn't really feel right to add that little script every time because
        I knew it was sending all the data to Google Analytics and to Google
        Google's ad networks. I was like, yeah, it doesn't feel right. So I said
        something about it to my girlfriend and she said, yeah, you always build
        your own stuff, so why don't you build something for this? And I was
        like, well, that's actually a really good idea.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(04:02):</p>
      <p class="mt-0">
        Then I started building a very simple version, hence the name Simple
        Analytics and the simple version was just the page views showing on a
        charge. Think it was showing the pages, the referrals, but not much
        more. So it was very limited view of a dashboard. And then I launched it
        and it got on Hacker News on the first spot for nine hours on the front
        page and even it stayed on the front page for a whole day. And that
        really gave me so much, so much traffic and also my first customers and
        then I realised like, oh, this is really a product that people really
        want. And it was also, the timing was right, right, because the GDPR
        came to in effect and more privacy regulations and more strict rules. So
        yeah, I was just lucky to launch it at that time. And since then we grew
        the product into full dashboard with a lot of features.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(04:54):</p>
      <p class="mt-0">
        You can set up goals, you can see conversions, you can see much more.
        You can download all the data into different systems or data lakes if
        you're really advanced with a huge privacy angle. So we don't place
        cookies and it's still a simple understandable dashboard instead of 500
        pages of Google Analytics where you get lost need to have a course to
        really understand the dashboard or to know how to use it. And especially
        now with Google Analytics four, a lot of people hate it because they
        need to recode a lot of integrations. So there's a lot of people saying,
        no, I don't want to do that anymore. And some of them go to simple
        Analytics. So that's a good moment for us for sure.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (05:39):</p>
      <p class="mt-0">
        Okay, let's dive into the MVP then for a minute. You mentioned it, that
        first version of the product to build. How long did it take you to build
        and what sort of tools did you use to bring it to life?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (05:49):
      </p>
      <p class="mt-0">
        I used a lot of tools that I already knew because in the previous
        products that I tried to launch, I always try to learn something new
        along the way and it always got me stuck at some point. So this time I
        was like, okay, I'm going to really finish this product and I'm going to
        launch it. So I only used the things I knew and there was Node.js,
        Postgres, maybe a bit of Vue.js, but I don't think there was even in
        place. So I think I was using handlebars or something like that for
        charts, I use Chart.js, still use that because it's a great library.
        That was one of the reasons why it actually succeeded because the tools
        that I already knew didn't limit me in everything I wanted to build. So
        eventually the product or the MVP, I think it was done in three months.
        I worked three months on it and at the end of the three months I was
        like, okay, we're going to launch it. And then I launched it on Product
        Hunt and Hacker News.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (06:45):</p>
      <p class="mt-0">
        With any MVP, you got to make certain decisions and trade-offs alluding
        to some of those and using technology that you knew, right? Tell me
        about some more of those when you were building that first version of
        the product. Maybe it's around technical debt approach or feature
        limitation or anything like that, and specifically how you coped with
        those decisions.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (07:06):
      </p>
      <p class="mt-0">
        When you are small or when you're just launching, you don't have any
        issues with a lot of data. For example, if you would launch our product
        as it is now, you wouldn't be able to build it in three months, only the
        data structure because there's so much traffic, so so much data is
        coming in, but when you start, there's not much data because you don't
        have that many customers. So the beautiful thing is that you can just
        build a product with a very limited feature set, but also with a very
        limited database behind it and stuff like that. So Postgres worked fine,
        but it had some limitations. You couldn't search fast all on the pages,
        for example or stuff like that, so I just didn't offer it. And another
        thing like visitors, we didn't have unique page views at the time, which
        we call visitors because we don't track people.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(07:57):</p>
      <p class="mt-0">
        So we don't know if someone comes back to your website the next day. For
        us it's a new visitor and stuff like that. We didn't offer any of those
        and people were yeah, okay with like, okay, we can only see shoes and
        that's okay for them. And not everybody is maybe happy with it, but the
        first people were happy with it. And I think those trade-offs are super
        important. Don't build everything you really want to have in the
        product, but the limited feature set is probably good for some of the
        people that will be a potential buyer.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (11:03):
      </p>
      <p class="mt-0">
        What we always did was being very transparent, so we are transparent
        about our own metrics, but also with the roadmap. So I created a
        repository for GitHub issues and then people could actually file new
        features and stuff like that. So I built a page on slash roadmap and
        people could actually vote on features on the roadmap. So at certain
        point the features that people really wanted were flowing on top or
        floating on top, and then you can easily pick the features that you
        want. And sometimes it's a feature where you think, ah, maybe it doesn't
        really fit with the product, so I will not build it. And some features
        you think like, oh yeah, I didn't know that was a requirement, or that
        was something that people really wanted and then that has a higher
        priority than the other ones. So that was one of the reasons or one of
        the ways to know what to build next.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(11:57):</p>
      <p class="mt-0">
        And also I had had quite a clear view on what I think was important for
        the product as well. And there's also a few logical things like team
        features. For example. People really wanted that or session tracking,
        stuff like that. With session tracking for example, it's a funny one
        because we didn't want to place any cookies, so it's very hard to have a
        session and some competitors do it with a hash version of the IP
        address, but for us, it's still tracking a user and we think that the
        GDPR thinks the same way. So then you need to find out a different way
        to offer a feature like that. So yeah, you need to be quite creative to
        get to a product that's actually still something that people want and
        still something that ethically is okay with me as the founder.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (12:48):</p>
      <p class="mt-0">
        Okay. Let's switch to team then. So how did you build your team and what
        did you look for in those people to indicate that they were the winning
        horses to join
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (12:55):
      </p>
      <p class="mt-0">
        You? Yeah, the first moment I needed a developer because I was working
        on the features and I felt like, okay, we need to work harder on the
        features. So the first thing hired was a developer. I put out a tweet in
        the first few months that the business started and I got already 150
        applicants through the tweet. So I all DMed them back like, okay, this
        is the form and this is a few questions, please answer them and then I
        can filter on them. One of the questions was, what do you think is more
        important pushing this feature out or making it code wise optimised? And
        that's quite a good question for a lot of developers. I'm not looking
        for a developer that has the best way of writing its code. I want to
        have a developer that is fast with building a feature, and that's
        usually not a mindset of the efforts developer.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(13:46):</p>
      <p class="mt-0">
        So yeah, that was one of the ways to filter between all the applicants.
        So then I had my first technical freelancer, now a year before I started
        talking with someone from a marketing background, and this person was
        really excited like, oh, you have a really great product and I'm working
        on a product as well, he said, but that kind of had a limitation because
        it was only limited to the Netherlands. And he was like, maybe we could
        work together. So it was not really looking for each other or something,
        but we just found each other and then we realised, hey, maybe we should
        be partners. And now we are partners and we are going way faster and we
        also hired content writer and we do a lot of work with freelancers as
        well. When the money allows, we hire more people, but also still keep in
        mind is it really necessary to hire those people because we also want to
        make a profit from the business.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (16:41):
      </p>
      <p class="mt-0">
        We definitely didn't build it with scaling in mind because then I would
        have to learn something new and then I wouldn't have my MVP ready on
        time and I probably would never have launched it. So I'm very glad that
        I didn't think of the future that much. I just thought, will this
        product sell in the current form? So then the next question was, okay,
        now we're getting way more customers. How are we going to handle all
        this data? First thing that came to mind was using Elasticsearch. I
        didn't know much about Elastic Search, I never worked with it, but all
        my digital nomad travels. I met a few people and one of them said, yeah,
        I have experience with Elastic Search, so if you need some freelance
        work or something, then I can be your guy. And that was the first
        iteration after Postgres. And then we could build a lot of extra
        features like search on pages, but also better aggregations and way
        faster, and also getting the data out of the system in a fast way. So it
        improved a lot in performance and in features, and I'm very happy that
        we did it this late in the process because otherwise, yeah, like I said,
        we probably wouldn't have finished the first product.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (17:57):</p>
      <p class="mt-0">
        So as you step out on the balcony, you look across all that you've
        built, what are you most proud of?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (18:03):
      </p>
      <p class="mt-0">
        Yeah, what I really like is the original features that we have, and it's
        kind of fun. The first time when I saw people copying our features, I
        was a bit frustrated, why do you do that? But now in hindsight I think,
        oh, it is actually quite positive. So all the people think it's really
        good that they even need to copy it in their products. So one of the
        things that I was proud of was bypass ad blockers because ad blockers
        would block all our requests, which is okay, that's their choice, but as
        a privacy solution, we wanted to like, okay, we are not an ad network,
        we're actually not collecting personal data. It would help these kind of
        businesses a lot if you would not block us, but that was not a
        negotiable. So then we thought, okay, we need to find a different way.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(18:54):</p>
      <p class="mt-0">
        And that was with CNAME-records. So then in the DNS, you could as a
        customer set up a CNAME, they linked them to our servers and we send
        them through their CNAME. So then for ad blockers, it doesn't look like
        traffic from a different ad blocker, but it looks like it's traffic from
        that website, actually. Yeah, we were one of the first people doing
        that, and now it's integrated in a lot of other businesses as well. Or
        we have, for example, a tweet viewer. So in Google Analytics you have
        t.co URLs and it doesn't say anything about where it's coming from. And
        we built something smart that would convert those URLs into actual
        tweets. So you would see the tweets that people are sending about your
        product and sending visitors to your website. And yeah, those features
        give me the most energy I would say.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (19:42):</p>
      <p class="mt-0">
        Okay. Let's flip the script a little bit. Tell me about a mistake you
        made and how you and your team responded to it.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (19:50):
      </p>
      <p class="mt-0">
        When we just started, we were launching on Hacker News and we got so
        much traffic and we really asked for a credit card before people could
        use our product. In hindsight, this was a mistake. There were so many
        people interested in our product and we only had accounts for the people
        that entered their credit card. I think it would be way better to have a
        list of email addresses from all the people that were interested so we
        could actually convert them into paying later. And also the same is for
        freemium model. We never did any freemium only for, I think it was 12
        minutes during launch, and then I chickened out and I was like, okay,
        now too many free signups. I want to have real customers and then close
        the freemium again. But in hindsight, I would say the freemium model is
        probably the best model to get people using your product and to get
        advocates sharing about your product, something that we will still
        integrate, but it would've been way better when we did that before. And
        there's one other thing that I really did wrong marketing wise, because
        I was talking with some journalists from Fast Company and she didn't
        know much about products like mine. So she asked like, oh, very cool,
        what other competitors do you have? And I shared two other competitors
        that were not super known but was nice for article. And then in her
        article, those two competitors were listed first and then I was listed
        somewhere at the bottom. So yeah, in hindsight, never name your
        competitors if the interviewer doesn't know about them.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (21:35):</p>
      <p class="mt-0">
        So what does the future look like for Simple Analytics, the product and
        for your team?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (21:40):
      </p>
      <p class="mt-0">
        The future for Simple Analytics is super bright because Google Analytics
        is doing quite a lot of things to help us grow, and we are building a
        lot of cool features, as in we want to build an alert system where we
        are building features for agencies to make our product nicer for them,
        shareability of dashboards and stuff like that. So that's something I'm
        really excited about. And I'm also very excited about the team, as in
        how we're making a lot of more ways in trying to find better developers
        around us and better people to write our content. We really see a lot of
        value in finding the right people, and we found quite a lot of good
        people and a few not so good people. And it's super exciting to work
        with the people that really work well with the team and with our
        product. So I'm really excited about what else we can do also marketing
        wise, but also product wise. And at some point I would set up this team
        to also build something like a product studio. And internally we already
        have talks about it to build maybe other products because we have a
        great team, so why not use it also for new products and try out more
        MVPs because building new stuff or thinking about new products that
        excites us the most. So yeah, that would be our dream.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (23:07):</p>
      <p class="mt-0">
        Let's switch to you Adriaan. Who influences the way that you work, name
        a person or many persons or something you look up to and why?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (23:14):
      </p>
      <p class="mt-0">
        I don't really have that many role models that I really think about
        right now, but what inspired me was a lot of people that were
        transparent about what they did or building in public, for example,
        where you inspire others, but also, yeah, you can really learn from
        other people. I'm scrolling to Twitter quite a bit and I think you learn
        a lot from that as well. Also, it takes a lot of time, so I shouldn't do
        it that much, but it really helps you filtering on what all the people
        are building and getting you excited for that. In the Netherlands, I
        don't think there's a big scene of entrepreneurs or founders. So most
        people that really helped me in the beginning were the Indie hackers, so
        the Indi Hacker community, the people that are building little products
        or MVPs and trying to make a profit with it. Those people really excited
        me. And also those groups where you talk with other people, it's really
        nice to be able to get some accountability because if you share to other
        people like, Hey, I'm going to launch, launch next week, then you really
        need to do it. And if you are not having those conversations, you can
        easily say, okay, I will do it in two weeks, or even never. So it's nice
        for accountability, and I think those groups helped me a lot, especially
        in the beginning.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (24:39):</p>
      <p class="mt-0">
        So we talked about a mistake earlier, but this is a little different
        spin. If you could go back to the beginning, what would you do different
        or where would you consider taking a different approach?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (24:48):
      </p>
      <p class="mt-0">
        I think I would take a different approach in hiring marketing people
        earlier on, because as a tech founder, it's really easy to see what
        needs to be done feature wise or performance wise or stuff like that, or
        you want to, I don't know, upgrade your stack or stuff like that. The
        most important thing is selling your product. And as a technical
        founder, it's a bit difficult to sell your product because your biggest
        love is with tech and not so much with marketing, or at least that's for
        me. So finding someone that does the marketing and really knows what
        they're doing, I think that would've been way better early on. If I
        would change something, I would definitely try to find or a marketing
        co-founder or higher great marketers and try to sell the product from
        the start because all the features is super nice. Product improvements
        are also super nice, but it's way better if you can actually sell the
        product, and that's more important than any new feature.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (25:58):</p>
      <p class="mt-0">
        So last question. You're getting on a plane and you're sitting next to a
        young entrepreneur who's built the next big thing. They're jazzed about
        it, they can't, we shut off the world, we shut off to you right there on
        the plane. What advice do you give that person having gone down this
        road a bit?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (26:12):
      </p>
      <p class="mt-0">
        I think I would advise them to really listen to multiple people giving
        advice, but be really careful on what advice to follow. Because on the
        road, you get so many people that think they know what they're talking
        about, but if you really, really dig deeper, it's not really based on
        their own experience with something maybe they read or something they
        believe. And I don't think that's the best advice you can get. So try to
        get advice from people have actually something done in the past where
        you can learn from. And usually that helps a lot to make sure you're
        friends with people that are, I don't know, longer in the business like
        yourself or have more experience or have a bigger team or something like
        that. So try to surround you with people that are further down the path.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (27:06):</p>
      <p class="mt-0">
        That's great advice. Well, Adriaan, thank you for being on the show
        today, and thank you for telling the creation story of Simple Analytics.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (27:12):
      </p>
      <p class="mt-0">Thank you. That was really fun. Thank you.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Noah Labhart (27:18):</p>
      <p class="mt-0">
        And this concludes another chapter of Code Story. Code Story is hosted
        and produced by Noah Labhart. Be sure to subscribe on Apple Podcasts,
        Spotify, or the podcasting app at your choice. And when you get a
        chance, leave us a review. Both things help us out tremendously and
        thanks again for listening.
      </p>
    </PressMention>
  </div>
</template>

<script setup>
import PressMention from "../components/PressMention.vue";

const path = useRoute().path;
const slug = path.split("/").filter(Boolean).pop();
</script>
