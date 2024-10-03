<template>
  <div>
    <PressMention :slug="slug">
      <h2>Automated transcript</h2>

      <p>
        Adriaan van Rossum is a tech guy, even at home. He likes to tinker with
        home automation, like turning on and off the lights, which his
        girlfriend doesn't like the experiments at times. Outside of tech, he
        does kite surfing and travels around the world.
      </p>

      <p>
        He really enjoys Thailand, specifically the food there, as he is a
        vegetarian. For several years, Adriaan was a freelancer. Each time he
        built an application for his clients, he did the usual song and dance
        with Google Analytics.
      </p>

      <p>
        He copied and pasted the script. This didn't feel right, and his
        girlfriend prompted him to build his own solution. So he did.
      </p>

      <p>This is the creation story of Simple Analytics.</p>

      <p>
        So what we do at Simple Analytics, we basically are a competitor of
        Google Analytics. And there's a few things that I don't really like
        about Google Analytics, and it started almost five years ago. And I was
        installing Google Analytics for customers of me.
      </p>

      <p>
        I was a freelancer at the time. And yeah, I needed to install the Google
        Analytics script for them because I was building websites, I was a
        front-end developer or full stack. And it didn't really feel right to
        add that little script every time because I knew it was sending all the
        data to Google Analytics and to Google's ad networks.
      </p>

      <p>
        I was like, yeah, it doesn't feel right. So I said something about it to
        my girlfriend, and she said, like, yeah, you always build your own
        stuff. So why don't you build something for this?
      </p>

      <p>
        I was like, well, that's actually a really good idea. Then I started
        building a very simple version, hence the name Simple Analytics. And the
        simple version was just the page views showing on a chart.
      </p>

      <p>
        I think it was showing the pages, the referrals, but not much more. So
        it was very limited view of a dashboard. And then I launched it and it
        got on Hacker News on the first spot for nine hours on the front page.
      </p>

      <p>
        And even like it stayed on the front page for a whole day. And that
        really gave me so much, so much traffic. And also my first customers.
      </p>

      <p>
        And then I realized like, oh, this is really a product that people
        really want. And it was also, yeah, the timing was right, right? Because
        the GDPR came to in effect and more privacy regulations and more strict
        rules.
      </p>

      <p>
        So yeah, I was just lucky to launch it at that time. And since then, we
        grew the product into full dashboard with a lot of features. You can set
        up goals.
      </p>

      <p>
        You can see conversions. You can see much more, you can download all the
        data into different systems or data lakes if you're really advanced with
        a huge privacy angle. So we don't place cookies and it's still a simple,
        understandable dashboard instead of 500 pages of Google Analytics where
        you get lost, need to have like a course to really understand the
        dashboard or to know how to use it.
      </p>

      <p>
        And especially now with Google Analytics 4, a lot of people hate it
        because they need to re-code a lot of integrations. So there's a lot of
        people saying like, no, I don't want to do that anymore. And some of
        them go to Simple Analytics.
      </p>

      <p>So that's a good moment for us, for sure.</p>

      <p>
        Okay, let's dive into the MVP then for a minute. You mentioned it, that
        first version of the product to build. How long did it take you to build
        and what sort of tools did you use to bring it to life?
      </p>

      <p>
        I used a lot of tools that I already knew because like in the previous
        products that I tried to launch, I always tried to learn something new
        along the way and it always got me stuck at some point. So this time I
        was like, okay, I'm gonna really finish this product and I'm gonna
        launch it. So I only used the things I knew and there was Node.js,
        Postgres, maybe a bit of UGS, but I don't think there was even in place.
      </p>

      <p>
        So I think I was using handlebars or something like that. For charts, I
        used Chart.js. I still use that because it's a great library.
      </p>

      <p>
        That was one of the reasons why it actually succeeded, because the tools
        that I already knew didn't limit me in everything I wanted to build. So
        eventually the product or the MVP, I think it was done in three months.
        Yeah, I worked three months on it.
      </p>

      <p>
        And at the end of the three months, I was like, okay, we're gonna launch
        it. And then I launched it on Product Hunt and Hacker News.
      </p>

      <p>
        Within ENVP, you gotta make certain decisions of trade-offs. And you're
        alluding to some of those in like using technology that you knew, right?
        Tell me about some more of those when you were building that first
        version of the product.
      </p>

      <p>
        Maybe it's around, you know, technical debt approach or feature
        limitation or anything like that. And specifically how you coped with
        those decisions.
      </p>

      <p>
        When you're small or when you're just launching, you don't have like any
        issues with like a lot of data, for example, like if you would launch
        our product as it is now, you wouldn't be able to, yeah, you wouldn't be
        able to build it in three months, only the data structure, because
        there's so much traffic, so so much data is coming in. But when you
        start, there's not much data because you don't have that many customers.
        So the beautiful thing is that you can just build a product with a very
        limited feature set, but also with a very limited database behind it and
        stuff like that.
      </p>

      <p>
        So Postgres worked fine, but it had some limitations. You couldn't
        search fast on all the pages, for example, or stuff like that. So I just
        didn't offer it.
      </p>

      <p>
        And another thing like visitors, we didn't have unique page views at the
        time, which we call visitors, because we don't track people. So we don't
        know if someone comes back to your website the next day. For us, it's a
        new visitor and stuff like that.
      </p>

      <p>
        Like we didn't offer any of those and people were, yeah, okay with,
        like, okay. We can only see page views. That's okay for them.
      </p>

      <p>
        And not everybody is maybe happy with it, but the first people were
        happy with it. And I think those trade-offs are super important. Like
        don't build everything you really want to have in the product.
      </p>

      <p>
        But the limited feature set is probably good for some of the people that
        will be a potential buyer.
      </p>

      <p>
        This episode is encrypted by Cypherstash. Data breaches are becoming a
        fact of life. Know why?
      </p>

      <p>
        One of the reasons is because developers lack the right tooling to get
        the job done, i.e. encryption at rest tools are complex and inadequate.
        The solution?
      </p>

      <p>
        Encryption in use with Cypherstash. Cypherstash uses searchable
        encryption in use technology, providing continuous and universal
        protection for sensitive data. With Cypherstash, you can turn your
        existing database into a vault, utilizing zero trust key management, SQL
        native, and with no code.
      </p>

      <p>
        Though encryption is complicated, Cypherstash is easy to use. The tool
        fully supports SQL via drop-in driver replacement, supporting the query
        types you know and love today. And did we mention it's fast?
      </p>

      <p>
        For queries over 100 million records, you can expect additional overhead
        of less than one millisecond. It's a no-brainer. Get started by
        reviewing their docs or downloading sample projects in Rails or Node
        plus SQLize today.
      </p>

      <p>
        Visit cypherstash.com/codestory and get started protecting your data.
        This episode is supported by Treble. This day and age, APIs are a fact
        of life.
      </p>

      <p>
        And as such, product and engineering teams need tooling that is
        lightweight, real-time, and data-rich to help them ship and maintain
        APIs faster. That's where Treble comes in. Treble is an all-in-one
        platform for the entire API lifecycle.
      </p>

      <p>
        The product offers world-class monitoring and observability, providing
        more than 40 data points for each request, enabling you to understand
        everything from performance to user behavior. Dashboards help connecting
        your entire team for lifecycle collaboration. Documentation is
        automatically generated, saving massive amounts of time for your
        development team with every new release.
      </p>

      <p>
        And setting up Treble? Super easy and fast. In three simple steps, you
        can be up and running with their platform.
      </p>

      <p>
        Their pricing is designed to support API teams of all sizes. So get
        started with Treble today and automate your API ops. Did I mention they
        have a free forever plan?
      </p>

      <p>
        Find out more by visiting treble.com/codestory. That's
        trblle.com/codestory. Let's proceed forward then.
      </p>

      <p>
        So you've got your MVP, it's working. How did you progress the product
        from there and mature it? And I think what I'm curious about is how you
        built your roadmap and how you went about deciding, okay, this is the
        next most important thing to build or to address with Simple Analytics.
      </p>

      <p>
        What we always did was being very transparent. So we are transparent
        about our own metrics, but also with the roadmap. So I created a
        repository for GitHub issues, and then people could actually file new
        features and stuff like that.
      </p>

      <p>
        So I built a page on slash roadmap and people could actually vote on
        features on the roadmap. So at a certain point, the features that people
        really wanted were flowing on top or floating on top. And then you can
        easily pick the features that you want.
      </p>

      <p>
        And sometimes it's a feature where you think like, maybe it doesn't
        really fit with the product, so I will not build it. And some features
        you think like, oh yeah, I didn't know that was a requirement or that
        was something that people really wanted. And then you know that has a
        higher priority than the other ones.
      </p>

      <p>
        So that was one of the reasons or one of the ways to know what to build
        next. And also I had myself, I had quite a clear view on what I think
        was important for the product as well. And there's also a few logical
        things like team features, for example, people really wanted that, or
        session tracking, stuff like that.
      </p>

      <p>
        With session tracking, for example, it's a funny one because we didn't
        wanna place any cookies. So it's very hard to have a session. And some
        competitors do it with like a hash version of the IP address, but for
        us, it's still tracking a user, and we think that the GDPR thinks the
        same way.
      </p>

      <p>
        So then you need to find out a different way to offer a feature like
        that. So yeah, you need to be quite creative to get it to a product
        that's actually still something that people want, and still something
        that ethically is okay with me as the founder.
      </p>

      <p>
        Okay, let's switch to team then. So how did you build your team, and
        what did you look for in those people to indicate that they were the
        winning horses to join you?
      </p>

      <p>
        Yeah, the first moment, I needed a developer because I was working on
        the features and I felt like, okay, we need to work harder on the
        features. So the first thing I hired was a developer. I put out a tweet
        in the first few months that the business started, and I got already
        like 150 applicants through the tweet, so I all DMed them back, like,
        okay, this is the form and this is a few questions, please answer them,
        and then I can filter on them.
      </p>

      <p>
        One of the questions was, what do you think is more important, pushing
        this feature out or making it code-wise optimized? And that's quite a
        good question for a lot of developers. I'm not looking for a developer
        that has the best way of writing its code.
      </p>

      <p>
        I want to have a developer that is fast with building a feature. And
        that's usually not a mindset of the average developer, right? So yeah,
        there was one of the ways to filter between all the applicants.
      </p>

      <p>
        So then I had my first technical freelancer. Now, a year before, I
        started talking with someone from a marketing background, and this
        person was really excited, like, oh, you have a really great product,
        and I'm working on a product as well. He said, but that kind of had a
        limitation because it was only limited to the Netherlands.
      </p>

      <p>
        And he was like, maybe we could work together. So it was not really
        looking for each other or something, but we just found each other, and
        then we realized, like, hey, maybe we should be partners. And now we're
        partners, and we're going way faster, and we also hired Content Rider,
        and we do a lot of work with freelancers as well.
      </p>

      <p>
        When the money allows, we hire more people, but also still keep in mind,
        is it really necessary to hire those people? Because we also want to
        make a profit from the business.
      </p>

      <p>
        This episode was automatically optimized by CAST. If you run
        cloud-native software on AWS, Google Cloud, or Azure, you know how out
        of hand the bill can get. This uncertainty hurts your business, but you
        can solve it with CAST AI.
      </p>

      <p>
        CAST AI automates cloud cost performance and security management for
        hundreds of companies of all sizes. The platform's customers begin
        saving immediately and cut an average of over 60%. So before you go and
        sign a multi-year contract with a cloud provider or lay people off,
        check out what CAST AI can do for you.
      </p>

      <p>
        To get you saving even faster, CAST AI is offering a free cloud cost
        audit with a personal consultation. Visit cast.ai slash code story to
        get started. This episode is supported by Terso.
      </p>

      <p>
        Terso is the open source edge database from the creators of LibSQL, the
        popular fork of SQLite. If you put your edge computing close to your
        users, like with Netlify or Vercel Edge Functions or Cloudflare workers,
        you should put your data there too in order to maximize performance
        gains at the edge. Terso makes it easy.
      </p>

      <p>
        With the developer experience of SQLite in a distributed database, you
        can replicate much closer to your users than traditional database
        offerings in the cloud. Terso is lightweight, easy to use, and free to
        get started. The team at Terso is offering a generous starter plan
        specifically for Code Story listeners.
      </p>

      <p>
        Head over to terso.tech slash code story and get started today. That's
        t-u-r-s-o dot tech slash code story. Terso, welcome to the data edge.
      </p>

      <p>
        Let's flip to scalability then. This will be interesting given the
        problem you're solving here. Was this built to scale efficiently from
        day one?
      </p>

      <p>Or are you finding this as you grow in any sort of capacity?</p>

      <p>
        We definitely didn't build it with scaling in mind because then I would
        have to learn something new and then I wouldn't have my MVP ready on
        time and I probably would never have launched it. So I'm very glad that
        I didn't think of the future that much. I just thought, will this
        product sell in the current form?
      </p>

      <p>
        So then the next question was, okay, now we're getting way more
        customers, how are we going to handle all this data? First thing that
        came to mind was using Elasticsearch. I didn't know much about
        Elasticsearch, I never worked with it.
      </p>

      <p>
        But on my Digital Nomad travels, I met a few people and one of them
        said, I have experience with Elasticsearch, so if you need some
        freelance work or something, then I can be your guy. And that was the
        first iteration after Postgres. And then we could build a lot of extra
        features, like search on pages, but also better aggregations and way
        faster, and also getting the data out of the system in a faster way.
      </p>

      <p>
        So it improved a lot in performance and in features. And I'm very happy
        that we did it this late in the process, actually, because otherwise,
        yeah, like I said, we probably wouldn't have finished the first product.
      </p>

      <p>
        Okay, so as you step out on the balcony, you look across all that you've
        built. What are you most proud of?
      </p>

      <p>
        Yeah, what I really like is the original features that we have. And it's
        kind of fun. The first time when I saw people copying our features, I
        was like a bit frustrated, like, why do you do that?
      </p>

      <p>
        But now in hindsight, I think like, oh, it's actually quite positive. So
        all the people think it's really good that they even need to copy it in
        their product. So one of the things that I was proud of was bypass ad
        blockers, because ad blockers would block all our requests, which is
        okay, that's their choice.
      </p>

      <p>
        But as a privacy solution, we wanted to like, okay, we are not an ad
        network. We're actually not collecting personal data. It would help
        these kind of businesses a lot if you would not block us.
      </p>

      <p>
        But that was not negotiable. So then we thought, okay, we need to find a
        different way. And that was with CNAMES.
      </p>

      <p>
        So then in the DNS, you could, as a customer, set up a CNAME. They
        linked them to our servers, and we send them the request through their
        CNAME. So then for ad blockers, it doesn't look like traffic from a
        different ad blocker, but it looks like it's traffic from that website,
        actually.
      </p>

      <p>
        Yeah, we were one of the first people doing that. And now it's like,
        yeah, integrated in a lot of other businesses as well. Or we have, for
        example, a tweet viewer.
      </p>

      <p>
        So in Google Analytics, you have t.co URLs, and it doesn't say anything
        about where it's coming from. And we built something smart that would
        convert those URLs into actual tweets. So you would see the tweets that
        people are sending about your product and sending visitors to your
        website.
      </p>

      <p>And yeah, those features give me the most energy, I would say.</p>

      <p>
        Okay, let's flip the script a little bit. Tell me about a mistake you
        made and how you and your team responded to it.
      </p>

      <p>
        When we just started, we were launching on Hacker News, and we got so
        much traffic, and we really asked for a credit card before people could
        use our product. In hindsight, this was a mistake. Like, there were so
        many people interested in our product, and we only had accounts for the
        people that entered their credit card.
      </p>

      <p>
        I think it would be way better to have, like, a list of email addresses
        from all the people that were interested, so we could actually convert
        them into paying later. And also the same is for Freemium model. We
        never did any Freemium, only for, I think it was 12 minutes during
        launch, and then I chickened out, and I was like, okay, no, too many
        free signups, I want to have, like, real customers, and then closed the
        Freemium again.
      </p>

      <p>
        But in hindsight, I would say, like, the Freemium model is probably the
        best model to get people using your product and to get advocates sharing
        about your product, because that's something that we will still
        integrate, but it would have been way better when we did that before.
        And there's one other thing that I really did wrong marketing-wise,
        because I was talking with some journalist from Fast Company, and she
        didn't know much about products like mine. So she asked like, oh, very
        cool, what other competitors do you have?
      </p>

      <p>
        And I shared two other competitors that were not super known, but was
        nice for her article. And then in her article, those two competitors
        were listed first, and then I was listed somewhere at the bottom. So
        yeah, in hindsight, never name your competitors if the interviewer
        doesn't know about them.
      </p>

      <p>
        So what does the future look like for Simple Analytics the product and
        for your team?
      </p>

      <p>
        The future for Simple Analytics is super bright because Google Analytics
        is doing quite a lot of things to help us grow. And we're building a lot
        of cool features, as in we want to build an alert system, we are
        building features for agencies to make our product nicer for them,
        shareability of dashboards and stuff like that. So that's something I'm
        really excited about, and I'm also very excited about the team, as in
        how we're making a lot of more ways in trying to find better developers
        around us and better people to write our content.
      </p>

      <p>
        Because we really see a lot of value in finding the right people, and we
        found quite a lot of good people and a few not so good people. And it's
        super exciting to work with the people that really work well with the
        team and with our product. So I'm really excited about what else we can
        do, also marketing-wise, but also product-wise.
      </p>

      <p>
        And at some point, I would set up this team to also build something like
        a product studio, and internally we already have talks about it, to
        build maybe other products, because we have a great team, so why not use
        it also for new products and try out more MVPs, because building new
        stuff or thinking about new products that excites us the most, so yeah,
        that would be our dream.
      </p>

      <p>
        Let's switch to you, Adriaan. Who influences the way that you work? Name
        a person or many persons or something you look up to and why.
      </p>

      <p>
        I don't really have that many role models that I really think about
        right now. But what inspired me was a lot of people that were
        transparent about what they did or building in public, for example,
        where you inspire others. But also, yeah, you can really learn from
        other people.
      </p>

      <p>
        I'm scrolling to Twitter quite a bit, and I think you learn a lot from
        that as well. Also, it takes a lot of time, so I shouldn't do it that
        much, but it really helps you, yeah, filtering on what other people are
        building and getting you excited for that. In the Netherlands, I don't
        think there's a big scene of entrepreneurs or founders, so most people
        that really helped me in the beginning were the indie hackers.
      </p>

      <p>
        So the indie hacker community, the people that are building little
        products or MVPs and trying to make a profit with it. Those people
        really excited me, and also those groups where you talk with other
        people, it's really nice to be able to get some accountability, because
        if you share to other people like, hey, I'm gonna launch next week, then
        you really need to do it. And if you're not having those conversations,
        you can easily say, okay, I will do it in two weeks, or even never.
      </p>

      <p>
        So it's nice for accountability, and I think those groups helped me a
        lot, especially in the beginning.
      </p>

      <p>
        So we talked about a mistake earlier, but this is a little different
        spin. If you could go back to the beginning, what would you do
        different, or where would you consider taking a different approach?
      </p>

      <p>
        I think I would take a different approach in hiring marketing people
        earlier on. Because as a tech founder, it's really easy to see what
        needs to be done feature-wise or performance-wise or stuff like that, or
        you want to, I don't know, upgrade your stack or stuff like that. The
        most important thing is selling your product.
      </p>

      <p>
        And as a technical founder, it's a bit difficult to sell your product
        because your biggest love is with tech and not so much with marketing,
        or at least that's for me. So finding someone that does the marketing
        and really knows what they are doing, I think they would have been way
        better early on. If I would change something, I would definitely try to
        find or a marketing co-founder or hire great marketers and try to sell
        the product from the start because all the features is super nice,
        product improvements are also super nice, but it's way better if you can
        actually sell the product.
      </p>

      <p>And yeah, that's more important than any new feature.</p>

      <p>
        So last question. You're getting on a plane and you're sitting next to a
        young entrepreneur who's built the next big thing. They're jazzed about
        it, they can't wait to show off the world, can't wait to show off to you
        right there on the plane.
      </p>

      <p>
        What advice do you give that person, having gone down this road a bit?
      </p>

      <p>
        I think I would advise them to really listen to multiple people giving
        advice, but be really careful on what advice to follow. Because on the
        road you get so many people that think they know what they're talking
        about, but if you really, really dig deeper, it's not really based on
        their own experience but something maybe they read or something they
        believe. And I don't think that's the best advice you can get.
      </p>

      <p>
        So try to get advice from people that have actually something done in
        the past where you can learn from. And usually that helps a lot to make
        sure your friends with people that are, I don't know, longer in the
        business like yourself or have more experience or have a bigger team or
        something like that. So try to surround you with people that are further
        down the path.
      </p>

      <p>
        That's great advice. Well, Adriaan, thank you for being on the show
        today. Thank you for telling the creation story of Simple Analytics.
      </p>

      <p>Thank you. It was really fun. Thank you.</p>

      <p>And this concludes another chapter of Code Story.</p>

      <p>Code Story is hosted and produced by Noah Labhart.</p>
    </PressMention>
  </div>
</template>

<script setup>
import PressMention from "../components/PressMention.vue";

const path = useRoute().path;
const slug = path.split("/").filter(Boolean).pop();
</script>
