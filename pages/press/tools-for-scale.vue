<template>
  <div>
    <PressMention :slug="slug">
      <h2>Automated transcript</h2>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (00:00):
      </p>
      <p class="mt-0">
        Well, thanks so much, Adriaan for joining us, founder of Simple
        Analytics or first interview I've done in person in a couple years here
        now here in Amsterdam. So I appreciate you taking the time and kind of
        talk about what you're building. Super interesting, super important now
        at the ever-changing force of life that is the internet now and all the
        moving parts that go into it. So let's start a little bit about maybe
        your background and why you sort of decided and maybe what led up to
        founding Simple Analytics.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (00:29):
      </p>
      <p class="mt-0">
        Yeah, yeah. Thanks for having me. I love to do this in person. It's the
        next level, right?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (00:34):
      </p>
      <p class="mt-0">
        Yeah. So much better. It's way better. It's so much better.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (00:37):
      </p>
      <p class="mt-0">
        Yeah, so I started Simple Analytics more or less three years ago, and I
        was on a holiday in the Canary Islands with my girlfriend and I was
        working remotely there for a freelance gig and they asked me, Hey, can
        you instal the Google Analytics script just to track the pay shoes? And
        I was like, yeah, yeah, this question always comes up. If you build a
        website, they wanted analytics and always ask for a Google Analytics
        because that's ...
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (01:04):
      </p>
      <p class="mt-0">Free and easy.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (01:05):
      </p>
      <p class="mt-0">
        The big one, free one, and people already are familiar with it. For me,
        it didn't feel right. I don't want to send all the data of their
        customers or their visitors to one big corporation that's pretty known
        for profiling and using that information for the ad network and stuff
        like that. So I wasn't very comfortable with that and I decided, okay, I
        need to change this. And I think it's quite easy to build something
        simple, but still powerful enough. So I pitched that to my girlfriend,
        he said, yeah, let's just do it. So I did it and then two months later I
        had my first prototype, put it on Product Hunt. It had a little bit of
        success, but then I put it on Hacker News and it was like boom, on the
        front page number one for the whole day, or at least nine hours on the
        phone page for longer. So that was amazing. And then I thought, okay,
        this is really something people want. So then I got my first paying
        customers, and then yeah, I took it from there.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (02:07):
      </p>
      <p class="mt-0">So it was paid right of the gate?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (02:09):
      </p>
      <p class="mt-0">
        Yeah, yeah. I had a free version for I think 30 minutes. Then I taken
        out, I was like, okay, now I go back to pay.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (02:20):
      </p>
      <p class="mt-0">
        So the one thing I usually like to chat about is sort of the tech
        acronym, how you think about building products. You don't have to
        divulge everything, this e secret sauce or anything, but maybe go
        through the simple tech stack of how simple analytics is built.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (02:36):
      </p>
      <p class="mt-0">
        Yeah, I don't have secret sauce or anything. I'm very transparent on
        everything. So yeah, I'm happy to discuss this. What I built it first
        with was with the tools I know, and before I had a lot of ideas and was
        building with different new tools and whatever, and then I never
        finished it. So this time I said to myself, okay, I need to finish it,
        so do it with the stuff
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(02:57):</p>
      <p class="mt-0">
        So it'll be way faster and finish it on time. So that's what I did. So I
        know gs, I know JavaScript of course, and I know Postgres the database.
        So I combined all those into that simple product. It was very amped. It
        was like a graph if some stats
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(03:17):</p>
      <p class="mt-0">
        On the bottom. There was nothing more than that sub login system, and
        that was about it. So I built it all in Postgres, and in hindsight, I'm
        very happy that I did because I finished it on time and until at some
        point I wanted to add new features like searching on specific stuff or
        filtering or certain stuff. Then Postgres became a little bit too
        complicated. It couldn't do the things without 50 tables of aggregations
        and stuff. So then I decided, okay, now I need to switch to something
        that is built for this kind of stuff.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(03:53):</p>
      <p class="mt-0">
        Then I switched to Elasticsearch, hired someone with experience with
        Elasticsearch. So he built a whole API for that. And then we had a
        system that was advanced enough for the new features that we wanted to
        build, but in hindsight, I'm super happy with that choice. I finished
        the product on time because I use the tools that needed and at some
        point I wanted to add new features, then a new database system was
        needed. So then we switched to Elasticsearch and yeah, I think that's a
        great decision.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (04:21):
      </p>
      <p class="mt-0">
        Nice. So when we talk about I guess privacy and the importance of it, I
        guess where are we now with privacy? We have the Apple ecosystem and
        then we have Android, which is open source and can do a lot of things
        and you can hack it up so to speak and make it your own. And there's
        pros and cons
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(04:43):</p>
      <p class="mt-0">
        With that. But how we see Google has all these products and they're all
        really good, whether it's email or Google Analytics or Google Docs, it's
        sort of this easy ecosystem that everybody plays in, especially small
        businesses, they might not have $10 a month or $19 a month to spend on a
        privacy analytics software or whatever it might be, maybe Canva or
        something like that, design software, something simple. So Google
        provides all these free things, but there's always a trade off. I guess.
        What's the pitch for simple analytics? Why should businesses and
        founders really look at privacy for tools that they use to build their
        companies?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (05:30):
      </p>
      <p class="mt-0">
        Well, it's like one of the reasons is your visitors and your customers
        are getting way more aware of privacy. If you would talk about privacy
        four years ago and nobody would really listen, it wouldn't be that
        interesting or there wouldn't be an audience for it. And now way more
        people thanks to the cookie banners and the annoyances of privacy.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Speaker 3 (05:54):</p>
      <p class="mt-0">Well. Yeah, for sure.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (05:55):
      </p>
      <p class="mt-0">
        There's a lot more awareness. So I think if you want to keep up with
        your customers and you want to give them the best experience, you should
        do something about privacy. You can't just ignore what they care about.
        So then you need to do something about it, and you can still give all
        your data, for example, to Google, or you can decide, okay, I want to do
        it differently. I want to go with something better for my customers. And
        there's also a lot of customers from Lytics that add a batch to the
        website saying, Hey, we use something privacy friendly. So they want to
        share it with the customers as well, saying, Hey, we care about you, we
        take care of your privacy. And we are not sharing it with all the
        companies.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (06:43):
      </p>
      <p class="mt-0">
        When users, for a simple analytics user, do companies put the simple
        analytics badge on their footer or whatever to notify
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (06:52):
      </p>
      <p class="mt-0">
        People or put it somewhere in the privacy policy like, Hey, we care
        about your privacy, so we use simple analytics, stuff like that.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (06:59):
      </p>
      <p class="mt-0">
        So it's almost because I think what GDPR did was you have to have that
        if you even use Google Analytics, I think not even just using cookies or
        using ads against it, but I think it's something as simple as using
        Google Analytics, I think qualifies, then you have to do GDPR. I'm not
        sure because it's so diverse.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (07:22):
      </p>
      <p class="mt-0">
        Yeah, there's a difference between GDPR compliant and what a lot of
        people confuse is that you don't need a cookie banner if you are GDR
        compliant, but that's not the case. GDR compliant means that you comply
        with GDR rules, but you still need to take care of a cookie banner, for
        example, and if the cookie banner is there, then it's compliant. So
        there's a little bit confusion about that in the privacy space, and
        there's a lot of different signals from different people saying, oh, you
        should do this and you should do that. But the general thing is if you
        use Google Analytics with the defaults, you will require a cookie banner
        and for example, simple analytics, you don't need any cookie banner, and
        there's no personal data that ends up in our systems. So you are a
        hundred percent sure that you never violate any gdpr. That's huge
        problems because yeah, you can't get a lawsuit for that.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (08:21):
      </p>
      <p class="mt-0">
        So if you're a simple site that provides information and maybe you're
        not running any ads on third party sites or anything like that, and you
        use simple analytics that in sense it's an easy way to become GD PR
        compliant. You don't need the cookie bag
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (08:39):
      </p>
      <p class="mt-0">Without the annoyance of the cookie banner.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (08:41):
      </p>
      <p class="mt-0">God, that's huge, man!</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (08:42):
      </p>
      <p class="mt-0">Because people don't really like that banner.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (08:44):
      </p>
      <p class="mt-0">Needs to be on the homepage.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (08:47):
      </p>
      <p class="mt-0">
        Yeah, definitely. Yeah, there's a lot of differences also coming to that
        cookie banner in the future, there's very likely that there should be a
        yes and a no button. Now I imagine how many people just click the no
        button? Yeah, I think a lot of people will just hit no, and then the
        cookie banner is gone and you can't track your users anymore. So what do
        you do? Then you have this whole gap in your Google Analytics account
        where there's no data coming in. So then you think like, okay, I'm
        missing out now, but what portion do I miss out? You don't know. And
        that's also why some people that use Google Analytics, they also use
        simple analytics next to it. So then they enable Google Analytics at the
        moment when people consent to the cookie.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Speaker 3 (09:32):</p>
      <p class="mt-0">And Ahh</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (09:32):
      </p>
      <p class="mt-0">
        Then they trigger Google Analytics. But before that, they have simple
        analytics also running because then they get the whole picture, the big
        picture of their visitors.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (09:42):
      </p>
      <p class="mt-0">
        Interesting, interesting. What would you recommend, is there such thing
        as, is there enough tools out there to create a privacy tech stack for a
        small business or a founder or even personally? Is there ways to have
        different tools that you would recommend to start building more of a
        privacy ecosystem for yourself or your small business
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (10:07):
      </p>
      <p class="mt-0">
        Analytics? I think we neared one and you see a lot of copycats or at
        least a lot of more tools in that space. But what I don't really get is
        that there's so much other space within privacy friendly tools where
        there's not that much products yet, but there's coming more and more. I
        also had a website where I would list all privacy products, but I took
        it down because it wasn't that popular.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (10:40):
      </p>
      <p class="mt-0">What email do you use because you use it?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (10:42):
      </p>
      <p class="mt-0">I use Proton Mill.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (10:43):
      </p>
      <p class="mt-0">Okay.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (10:44):
      </p>
      <p class="mt-0">
        But I wouldn't recommend it because Protein Mill does a very good thing
        about being privacy friendly, as in they encrypt their mill very well,
        so it's encrypted as in if it's in your mailbox, they can't view it
        anymore, they can't see it anymore. You still need to trust them because
        emails are sent in plain text to their server so they can make a copy.
        But I think they're a trustable business that doesn't do that. But it
        comes with a lot of downsides. For example, you can't search in the body
        of your email, so if you search in your search bar, you can only search
        on subject and recipients and stuff, but not on the body text
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (11:23):
      </p>
      <p class="mt-0">Copy,</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (11:24):
      </p>
      <p class="mt-0">
        Which is super important for email. And that's something they are trying
        to build and it's still not there. So I think if that feature is there,
        then I would recommend using Button Mill until that time. I don't really
        know a good alternative for email.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (11:39):
      </p>
      <p class="mt-0">What about browser wise? Brave? Would Brave be?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (11:42):
      </p>
      <p class="mt-0">
        Brave would be a good option. Safari also cares about privacy and
        Firefox. I personally use Firefox with a few extensions and block
        trackers and stuff like that, including the privacy friendly trackers,
        unfortunately. But that's all different subject. And so yeah, I use Fire
        Folks and I use Megas for somewhat more privacy friendly os, which I'm
        doubting recently because they have telemetry set up with the apps you
        use and stuff like that. So there's a little bit of debate of the Apple
        marketing versus the real Apple.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (12:21):
      </p>
      <p class="mt-0">
        I always think about whether Apple could do it or another company could
        do it where they build a competitor search to Google and I think Apple
        still hasn't for, I don't know, they still haven't looked at sort of the
        business market to go to and say, Hey, you get search and you get
        whatever. They have a Google Docs equivalent, but it's not great and
        they try their business email. The email has been bad, but I think they
        could still do, I feel like they could do a business suite around
        privacy and people would pay. If you bundled search with
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(12:57):</p>
      <p class="mt-0">
        A tonne of other Google Docs equivalent or sheets and email, business
        email, I think there's still an opportunity for them to do it or have
        another company come in and offer the business suite like Google has.
        There's really not a suite like that out there. I'm like, I can't use
        Microsoft, I just can't do it. I can't do it. So Google is really the
        only kind of option right now. But you think there's an opportunity for
        a startup or for Apple to come in and be a competitor to Google
        Workplace right now? I think now it's what it's called.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (13:30):
      </p>
      <p class="mt-0">
        Yeah. I think that you'd come from Europe. I'm a very big fan of the EU
        as in it's, a lot of countries get together, it is a bit the same as the
        us also a lot of states working together, but in Europe there's no real
        tech vibe or there's no big tech companies right? In Europe. And I think
        there's a lot of funding coming from the EU to build tools that are
        similar to a US product, but then in the eu, just from a privacy
        perspective.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Speaker 3 (14:02):</p>
      <p class="mt-0">Interesting.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (14:02):
      </p>
      <p class="mt-0">
        So if a lot of good companies going after the money, then we can expect
        a few tools like Google Docs and Sheets and stuff like that working
        seamlessly together at the same time. I think it's very hard to build a
        good product like that. So as long as they copy almost everything, then
        it's fine. But if they go their own way, it'll probably be a ship
        product. So yeah, my hope is a little bit on that Money of the eu.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (14:33):
      </p>
      <p class="mt-0">
        Yeah, no, I think it's just from being here four months or so or five
        months now, there's a lot going on here from I think just an investment
        standpoint and just startups being invested throughout the EU and
        specifically just around the region here is pretty interesting. There's
        a lot of companies moving here. There's a lot of really big US companies
        that have sort of their quasi headquarters here, which is really
        interesting. So I think you'll get a little bit of innovation around a
        lot of different areas. To go back to Nalytics real quick, what sort of
        analytics do you get? Is it pretty much the same as you would get
        through Google Analytics platform?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (15:17):
      </p>
      <p class="mt-0">
        Well, the big difference is that simple analytics doesn't track users or
        visitors. So it's definitely different than Google Analytics because
        Google Analytics tracks your visitors, which is super useful as well.
        It's not only bad, but it's super useful. So you can say like, oh,
        visitor that yesterday visited my website, is now a returning visitor.
        For example, with Simple Analytics, you can't do that because you don't
        know the person visiting is the same person as yesterday. So you have no
        clue who the person is and also know that he's returning. So there are
        some differences between Google Analytics and simple analytics or
        between cookie based analytics or tracking analytics versus non cookie
        non tracking. So there's a few things that are impossible. So one of
        them is Sessions. You don't record sessions. So for example, you can't
        say, oh, a user has five page views in a session or
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Speaker 3 (16:16):</p>
      <p class="mt-0">Whatever.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (16:17):
      </p>
      <p class="mt-0">
        So those things you can't say, but with the data you can still do a lot.
        For example, you can still get uniques because browser always sends the
        referral of the previous page to the next page. So you're basically
        saying, oh, this person comes from to go navigates to simple analytics.
        I can see it's coming from Duke to go for example. That way you can say,
        oh, this is unique visitor. Because if the person was coming from simple
        Analytics slash contact going to another page, then you can see like,
        oh, this person is coming from simple Analytics. So it's a non-unique
        visitor, so you can still do some smart things to get uniques and stuff
        like that. And what tics does very well is making it very easy in the
        overview. So
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (17:07):
      </p>
      <p class="mt-0">
        That's the big one that I saw is that you still get the overview of the
        main
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Speaker 3 (17:11):</p>
      <p class="mt-0">Stuff,</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (17:12):
      </p>
      <p class="mt-0">
        You still get location, you still get page views, you still get the
        overall big things for just like that is a simple overview of what's
        going on.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (17:23):
      </p>
      <p class="mt-0">
        And at the same time we make it look very simple from the surface, but
        you still can do a lot. For example, you can search everything and
        there's a search icon with every type of data point basically. So you
        can search refers, you can search UTM codes, you can search pages, maybe
        you have long tail pages and you want to just go very quickly to that.
        Well try to do that in Google Analytics. It's complicated.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(17:51):</p>
      <p class="mt-0">
        It's already complicated to see where your long-term pages are. So stuff
        like that is very important for simple analytics. And also from a
        privacy point, we don't see that, well, we don't say that the data is
        our data. The data is from our customers. So if you add data to our
        platform from your visitors, it is your data. We don't say like, oh, we
        own it or we transfer, right? Or whatever. No, it's your data. And
        that's also how we act on it. So you can download it in so many ways. If
        you have no code tools, you just have URLs with CS V, you can download,
        you have email reports that you can get in your email and very extensive
        APIs that people use to build their own reports. Interesting.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (18:34):
      </p>
      <p class="mt-0">
        How's installation? Is it the same as Google Analytics? As far as it is
        just a simple snippet of,
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (18:40):
      </p>
      <p class="mt-0">
        It's a bit simpler as well than Google Analytics. I recently did a
        comparison with Simple Analytics and Google Analytics, and Google is
        obviously slowing your website down quite a bit, simple analytics, so
        that was pretty great to measure. But then I also went into their tool
        to grab their snippet just for copy pasting in the website. It is
        complicated already. You have so many options, you can do so much. It is
        very overwhelming. And in the office here, the coworking space, I hear a
        lot of people complaining like, oh, I need to instal Google Analytics.
        It's not copy pasting a script anymore. It's like finding out bot script
        unique and all that stuff. And the big difference is with Google
        Analytics, you need a website id and with simple analytics, we thought
        every website already has an id that's URL. So it's unique for every
        website. So we just use that. So you can just copy the paste, copy and
        paste the same script on all your websites without changing website IDs
        and it just works.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (19:46):
      </p>
      <p class="mt-0">
        Awesome. When we go down the path of making the tool better and being at
        it, you are trying to simplify everything. Is there room for what are
        some room for innovation and more features? How would that work? But yet
        to keep it simple, is there ways to make it do more things without being
        complex, without getting out of control? What happens with Google
        products?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (20:13):
      </p>
      <p class="mt-0">
        Yeah, we have to watch out for that. It's very hard because you have lot
        of requests from customers, oh, I want this, I want that. And you can
        all cram it in the tool, but then you become Google Analytics, right?
        Complex analytics,
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Speaker 3 (20:28):</p>
      <p class="mt-0">Yeah,</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (20:29):
      </p>
      <p class="mt-0">
        You don't want have that made. So yeah, that's definitely difficult. So
        we try to do is make it still accessible but not for the simple user. So
        if you just visit the dashboard, it feels simple to understand
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(20:48):</p>
      <p class="mt-0">
        And that's important. And the things that are more complex and for
        example, search in it, it is just hidden a bit. So you need to know it's
        there and you click it and then it triggers some more advanced search.
        For example, events is also a good example that can be complicated quite
        quickly. It's hard to grasp how events work, how conversions work, stuff
        like that. So most of the time developing that feature is like, okay,
        talk with customers. How would you understand this? Making it more
        simple, making it more simple and even more simple, and eventually you
        have something that people understand from the start.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (21:26):
      </p>
      <p class="mt-0">Could it work for e-commerce?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (21:29):
      </p>
      <p class="mt-0">
        Yeah, definitely. Yeah, yeah. So for example, if you have a flow, let's
        say a signup form or a checkout form, you can say like, okay, we have a
        landing event for example, and a checkout event on that signup form. And
        then you can see, okay, 50 people started the form and only 40 people
        submitted the form. There's something going wrong or Well, I think it's
        quite okay conversion in this case.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (21:58):
      </p>
      <p class="mt-0">
        Yeah, that's pretty good. I think something's going right,
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (22:01):
      </p>
      <p class="mt-0">
        Something's going, 80% is checking out, so that's good. But yeah, in
        case it's different numbers, then you know where to work on.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (22:11):
      </p>
      <p class="mt-0">
        Go back into tools real quick. Personally, you running the company, what
        is the tech stack that you use tools wise to kind of navigate every day,
        every week, just sort of running the company.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (22:26):
      </p>
      <p class="mt-0">
        So we use a bunch of tools. One very privacy friendly tool is Keybase,
        it is a Slack, but then end-to-end encrypted. Also, it's hard to
        recommend this one because it's not as polished as Slack is, for
        example. Sometimes you need to wait for a download or whatever. It is
        not perfect, but that's bit, that's the downside of privacy friendly
        products that are not doing, trying to do too much or something like
        that. Same with Signal. It's a little bit off topic, but Signal is also,
        it doesn't have that same feeling as Telegram, for example. But I think
        we'll get there. Other tool I use is VSCode for coding..
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(23:13):</p>
      <p class="mt-0">
        Use HelpScout for email support to run our support team. GitHub for the
        code and Telegram for alerts and stuff. So sometimes you want to have
        server alerts or you want to have errors from server, you want to get it
        on your phone, stuff like that. And a few tools on the road. So on my
        phone I can also log into my servers, I can code and I can change stuff
        and code on the phone. I don't really code on the phone if it's really
        needed, can change some files on my phone. Interesting. Just by logging
        into the servers.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (23:51):
      </p>
      <p class="mt-0">
        You said HelpScout and so that's sort of a customer service type of tool
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (23:55):
      </p>
      <p class="mt-0">Yeah.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (23:56):
      </p>
      <p class="mt-0">
        Okay. We talk about privacy and maybe end on a little bit of the future
        and maybe what's coming and what's possible. I guess more things are
        becoming possible, like you said, maybe Telegram and Signal, not quite
        there yet, but three to five years eventually could change pretty
        drastically. So what do you see coming down the pipe in regards to
        privacy? Google can't really talk about it, right? Facebook, there's
        some companies that are just like, they're almost irrelevant to the
        conversation. Their whole reason for existing is against that mantra.
        Apple is in a good space. I think anybody who has built their own
        infrastructure and ecosystem from the ground up has an opportunity to
        build out more privacy. So where do you see the space going and is it a
        positive way to go? Even privacy social network, very weird to say, but
        I think people would pay for Twitter without having all the BS that
        comes along with it.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(25:01):</p>
      <p class="mt-0">
        I think they're starting to do something right, but I see tonnes of
        people that would pay for platforms like Twitter rates like five bucks a
        month or something like that to have all the BS out and have it how you
        want it.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (25:14):
      </p>
      <p class="mt-0">
        Yeah, I think the group that cares about privacy is getting bigger, so
        then it becomes more easy to develop products for that group because the
        group is growing and especially the group that wants to pay for tools is
        also growing I guess. So that's great because then you can build tools
        and earn money from it because I think it's very important for
        businesses, even if they're in a privacy space or especially in a
        privacy space to charge money. We don't charge money. For example, you
        have CloudFlare Analytics, it's free. It's like, okay, but how I'm
        paying the servers cost money. You develop the tool, it costs money.
        Where's the money coming from? So you have all these questions where you
        don't really have answers to. Same with Google Analytics. They don't
        create Google Analytics, which probably costs millions to run per month.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (26:08):
      </p>
      <p class="mt-0">The team is huge, I'm sure.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (26:10):
      </p>
      <p class="mt-0">
        Team is huge, infrastructure is huge, and they have tonnes of data, so
        they need to be paid from somewhere. So they have the great way for
        fueling ads with the data, which is also in their terms. So they have
        reasons to not charge money.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(26:28):</p>
      <p class="mt-0">
        But for all the others that just starting out, if you charge money, you
        don't have to look for different business models, which I think is great
        because then I would rather pay if I download the new app or whatever,
        I'd rather pay for it than not knowing where my data ends up, especially
        if it's an App where I put personal photos or whatever.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(26:52):</p>
      <p class="mt-0">
        So I think that that area is changing a bit for the good. I also think
        regulations are definitely pushing us in the right directions. Well, in
        the EU it started with the GDPR and then before that the EPR directive,
        you see a lot of other countries now following up on that, which is
        great even outside of Europe. That's awesome. So I think the legal
        aspects also will improve, but I don't really see happening soon is free
        products to be successful that much. I think social network for example,
        I think it's very hard to make social network being a big network. Maybe
        it works, but I don't think you'll reach the mass with
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (27:33):
      </p>
      <p class="mt-0">
        Social networks probably a bad word. I guess more like communities where
        it's much more niche where you don't need to be on the platform with a
        billion people.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (27:44):
      </p>
      <p class="mt-0">
        Substack for example. It's a good example of the paid works in
        communities. Also, when I started Simple analytics, I really wanted to
        be surrounded with people that are similar. So I also paid for a work in
        progress, for example. It's also a paid community, which really helps
        for accountability and stuff like that. So I really believe in paid
        communities. But the mass, I'm not sure how that would work.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (28:09):
      </p>
      <p class="mt-0">
        Yeah, no, I paid for a few communities, but they just have an annual fee
        or just a lifetime thing rather than a monthly thing. It's almost like
        buying a pair of shoes or something. You don't continually pay, even
        though you wear 'em a lot, you don't pay monthly for your shoes. And
        that's what I'm going to try out with the platform we were talking about
        earlier, the investor platform, it just a one one-time payment for just
        access to it and I'll keep building in it and keep going, but it helps
        the creator and the builder to invest more time in the product and keep
        building it and making it better rather than you just dedicate so much
        time to it and to be free. It is so hard. It is nearly impossible to
        build a good product, especially by yourself for free. It needs to be a
        little bit up there, whether it's just something small. And I think to
        me, I like doing the one time payment thing because it's just, again,
        it's like buying a backpack or something like that. You just do it one
        time and that's sort of it. Then you can access forever, which I think
        is a really, it's a different approach for a media product. Like digital
        products we're kind of used to being free or monthly, this SaaS model,
        and I think that might change a little bit. I think people will probably
        actually get away from doing
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (29:28):
      </p>
      <p class="mt-0">From the monthly payments.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (29:29):
      </p>
      <p class="mt-0">
        I think monthly because I think companies, I think you do a great job of
        offering the annual price is so much better than the monthly price and
        I'd rather just pay it annually because one, you just get such a better
        price, but then it's just like you don't have to worry about it as much.
        I don't know. I like the annual thing and then the lifetime thing more,
        especially for early stage just ideas companies or startups that are
        bootstrapped in one person. I think it's a good way to just get early
        funding and try to build what you want to build.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (30:06):
      </p>
      <p class="mt-0">
        Especially at the start, I think it's good to have more customers than,
        for example, with simple analytics, I kind of regret to not make it
        available for a bigger public in the beginning, but at the same time you
        want to validate your product for a price that you eventually want to
        charge. So I think I started with $9 per month, but maybe in the
        beginning I should make it cheaper, but then it's hard to validate. So
        this choice is very hard because when you make it cheaper, people expect
        it to be cheaper and then all the next customers will also want to have
        it for the price. And then if you increase it, it will maybe push down
        all those customers or whatever.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (30:48):
      </p>
      <p class="mt-0">Are you bootstrapping everything?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (30:50):
      </p>
      <p class="mt-0">Yeah. Yeah.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (30:51):
      </p>
      <p class="mt-0">
        What's your thoughts on funding if somebody started a privacy fund? I
        think, I don't even know if they exist, but I mean there might be one
        out there that invest in privacy startups, but it should if it doesn't I
        guess. But would you think about raising money? What your thought
        process around bootstrapping versus raising a little bit of money to
        kind of scale
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (31:12):
      </p>
      <p class="mt-0">
        Faster? If I have a clear target for the money or clear goal for the
        money, I would probably do it. But at this time I basically want to have
        a comfortable life and I want to do work that I actually enjoy. So I
        combine those two, building my own business. And I think if you attract
        outside the money, you will get a different job. You will be more of a
        manager, have less to say in your own business and eventually they'll
        maybe grow to, I know millions a month, but your job changed quite a bit
        and I still want to have a fun job. So I'm not sure if that would be a
        fun job for me.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Grant Trahant (31:53):
      </p>
      <p class="mt-0">
        Yeah, yeah. Well I appreciate you taking the time, man. This is great to
        get to chat in person and get to chat about the product and everything
        that you've had going on, everything you've sort of built so far. So
        congrats on the project, the project and the progress and cheers to the
        next sort of five years of 10 years of having fun and building a cool
        product, my man. Thank you.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (32:17):
      </p>
      <p class="mt-0">Thanks a lot.</p>
    </PressMention>
  </div>
</template>

<script setup>
import PressMention from "../components/PressMention.vue";

const path = useRoute().path;
const slug = path.split("/").filter(Boolean).pop();
</script>
