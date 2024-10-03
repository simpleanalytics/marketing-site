<template>
  <div>
    <PressMention :slug="slug">
      <h2>Automated transcript</h2>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (00:00):
      </p>
      <p class="mt-0">
        Hello, my name is Debbie Reynolds. They call me "The Data Diva”. This is
        "The Data Diva Talks" Privacy podcast, where we discuss Data Privacy
        issues with industry leaders around the world with information that
        businesses need to know now. I have a special guest from one of my
        favorite cities in the world, Amsterdam. I have Adriaan van Rossum, the
        Founder and CEO of Simple Analytics. Hello.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (00:40):
      </p>
      <p class="mt-0">Hi, there. Thanks for having me.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (00:42):
      </p>
      <p class="mt-0">
        Yeah. Well, this is great. I'm glad we were able to connect. You and I
        reconnected on LinkedIn. I think we were doing a joint, were at an event
        in the US. The Rise of Privacy Tech? And you contacted me, and we're
        both going to be at this event, we talk. And you sent me some
        information about your product. And I thought I love what you're doing.
        I love your privacy focus. And I thought this would be a great way for
        us to get to know each other and get to have my audience get to know
        you. Well, first of all, tell me a bit about you and your journey in
        privacy, and then a bit about Simple Analytics.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (01:29):
      </p>
      <p class="mt-0">
        Yeah, sounds great. Yeah. So the journey started when I was fairly
        young; I would say, now, I'm 32. Still not very old, I would say. When I
        was in high school, I was just interested in building websites and doing
        this kind of stuff. And in the early days, there were so many different
        ways that you could connect websites with browsers, and in the time, you
        had Internet Explorer six, for example. And that was a very, yeah, how
        would you say it,&nbsp; it was a very premature browser at the time. And
        what you can do is very weird stuff. So if people would visit your
        website, you will be able to get their clipboard, for example, nowadays,
        that wouldn't be a part of any browser feature, but yeah, it's something
        that wasn't really thought of. And I started playing with that. And I
        realize, hey, this is very privacy-invasive of a feature of a browser,
        right? Everyone can access the data of others now. So there are there
        was, I think, the first moment where I started to realize like, what the
        capabilities of websites are, and what you can do as a webmaster, or as
        a Website Builder. From that moment on, privacy got more important for
        me, and yeah, it always kept an interest. And at some point, I was
        installing Google Analytics for some clients, and I was working as a
        freelancer them. And yeah, it didn't feel right. I really wanted to do
        something else and then feeding all the data of their visitors also to
        Google Analytics. And yeah, we know they use it for other purposes than
        just showing you the analytics, right. So I thought, like, okay, I need
        to do something about this. And I talked with my girlfriend about it.
        And she said, like, why don't you build something yourself? And I was
        like, yeah, that's just what I'm going to do. So I started building
        Simple Analytics. I think it was four years ago. And since then, yeah,
        it has been super fun to work on something that's your passion. And at
        the same time, you're doing something that’s, yeah, a little bit better
        for the world. So that's how I started. And that's still what a mission
        is. And yeah, I really love to work on this.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (04:07):
      </p>
      <p class="mt-0">
        Yeah, well, that's really cool. I think right now, and I guess people
        are really focused on analytics right now. Because of this Google.
        There's a ruling in the EU around Google Analytics. And there's kind of
        a lot of talk in the EU around cookies and how websites work. And
        there's an IAB Europe case going on in Europe right now. So there's a
        lot of focus in Europe right now on websites and how they collect data.
        And I think people in the US are watching this very closely because this
        may impact the way they do business. But one thing that's really
        interesting, I decided many moons ago to become a webmaster because I
        was interested in how websites work and I was interested in how the
        Internet works, how I wanted to know how the data flowed. And some of
        the stuff I found out. I was horrified.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (05:08):
      </p>
      <p class="mt-0">You did that?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (05:08):
      </p>
      <p class="mt-0">Oh, yeah, I couldn't believe it.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (05:10):
      </p>
      <p class="mt-0">What did you find out?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (05:11):
      </p>
      <p class="mt-0">
        Oh, my God, just how people can manipulate data and how the data flows.
        You say, okay, I just add data here, it is only there is like, I know,
        it flows to other places, you know, it's been scraped. Data about you
        are being scraped from other places on the Internet. I mean, it was just
        unbelievable. But what one of the things that I found out, and this is
        something that you alluded to, and that people don't really understand,
        and I hope because of some of these cases that are going on their
        understanding, there's a lot of like passive data collection, that
        happens, right? So it's like, you put data on the Internet, and you
        think you know if you're a webmaster, or you're someone who's updating
        data on the Internet, you're not understanding that the tools you may be
        integrating into your website may be collecting and selling data, that
        you didn't intend for it to do that. But that is actually exactly what
        it's doing. So tell me a little bit about that part of the Internet.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (06:13):
      </p>
      <p class="mt-0">
        Yeah, it's also very hard to make sure that there's no data going
        somewhere else. It's very difficult to know, okay, we use this service
        now. And we want to find out what services they use. But it's very hard
        to do. Like in Europe, you have now the privacy policy, which kind of
        states it a bit. But it doesn't have to go into detail. So you don't
        really know which other businesses are using your data as well. So it's
        very not transparent as it should be. So it's very hard for someone to
        make a decision. Okay, this is a product where the data will stay in the
        product and not so much go somewhere else. And it's simple, we, of
        course, care a lot about it, because we want to have our data within the
        Netherlands, or at least in Europe. And that's an important factor for
        us. But also, for us, it's super difficult to find the right tools to
        make that happen. But it is possible like you can always find a European
        alternative. But it's not the same as having this number one product you
        are very used to, for example, right? For example, use Google Docs or
        something like that; there's not a great alternative for that. So it's
        very hard for a lot of businesses to, first of all, find a solution
        that's different. And it’s, for example, better privacy-wise, but then
        you also have to do a little bit of a step back currently for how the UI
        will work and how fast you will be with the software. So what I really
        hope for is that in the near future, more and more products and more and
        more builders and makers will understand this problem and that there
        will be more solutions within Europe. And also hopefully with payments
        from the European government, as well to make this happen. Because it's
        very hard to see where the data is going through, so yeah, we better
        build something that's privacy-wise, a good solution. You're familiar
        with this Google Analytics case; I'm sure that's going on in Europe
        right now.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (08:28):
      </p>
      <p class="mt-0">Yeah, yeah.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (08:30):
      </p>
      <p class="mt-0">
        People don't really understand what this case is about and what it means
        for the audience. Give them a simple version of what's happening with
        this case and what they need to be thinking about as a result of it.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (08:48):
      </p>
      <p class="mt-0">
        Yeah. Also, recently, my partner wrote a blog post about it. So maybe
        it's nice when the show notes, where it is, in detail, explained what
        exactly happened in this case. So I will go through it. Not so
        thoroughly, but for people that want to, then they can do that. So
        actually, the Austrian regulations authority opened a complaint that
        someone had visited a website from someone from a business in Austria.
        Okay, so I can explain that. The Austrian equivalent of the Data
        Protection Authority. They got a complaint from someone on a health care
        website. And the complaint was that the data was being shared with
        American servers. And since 2020, we have a so-called Schrems II, which
        doesn't make sense, like illegal. So you don't want to send data of your
        customers to US servers. Before that, we had a data protection shield,
        which was awesome. But now that shield is gone. So basically, users
        don't send sensitive or personal data to US servers. And so what they
        found out was that it was doing this. So they were sending data to
        Google Analytics and Google Analytics; their servers are yet from
        Google. So and also in the US. What was the problem here is that they
        were thinking they were safe, as in they were anonymizing the IP
        addresses. And it feels like anonymizing IP addresses is something that
        isn't personal data anymore, right? Because it's not relating to one
        person, but maybe to a group of persons. But what they now said is that
        it's personally identifiable information. So they say even if you
        anonymize the IP address, you're still in trouble. You still can't do
        that. So then, there is no solution within Google Analytics that I know
        of. And that it would make sense to still be able to run it in the EU.
        So that's basically the thing. So the IP address is anonymized. But it's
        not anonymized. It's still personal data. So, therefore, it's still not
        allowed to use it in the EU. And this is not final yet. So it's still
        also in the Netherlands; we're still talking about it. It's not final
        yet. So it's not forbidden just yet. But it can happen that it will be
        forbidden in the near future. And that's where a lot of people are
        looking for different solutions. And yeah, we see that as well. There's
        so much more attraction to our product because people are kind of
        scared. Oh, I don't want to have some bad privacy case on my business.
        So let's better get it fixed.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (12:09):
      </p>
      <p class="mt-0">
        So the issue is the data transfer, right? Without the knowledge and
        consent of the individual. And a lot of times, I think, you remember
        that. So you're someone who built websites in the past, you know,
        building websites now is much different, where a lot of things are baked
        in. So I remember when you used to have to go out and get a Google
        Analytics ID, and then you have to add it to a website. And now, you
        don't have to do that because it's already in there.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (12:45):
      </p>
      <p class="mt-0">
        Yeah, it's usually just a tick off a box, like, hey, fill in your idea.
        Funnily enough, I did a test a few weeks ago, installing Google
        Analytics. I still think it's fairly complex, as in, just getting that
        ID parameter that you use in different tools or getting the script tag
        to install on your website if you are a developer. It's not easy, I
        would say, but a lot of integrations are there. Right? So if you're
        using WordPress, it's just a click of a button, and you installed the
        Google Analytics plugin, and you're done. So that's an advantage.
        There's a lot of tooling around Google Analytics. Yeah. And that's
        something that is always a problem with being the biggest right? And you
        have the most tooling. But still, it's, I think, a fairly complex
        product.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (13:40):
      </p>
      <p class="mt-0">
        Right, exactly. People want to be on the Internet, and they want to
        obviously keep businesses or other people from other places looking at
        their stuff. But then they have to make sure that their website is
        compliant within their country about how to transfer data. Another case,
        I don't want to pick on Google, but this is about fonts. I talked with
        another guest on the podcast about fonts. It is funny because we were
        talking about fonts before this case came out. So talk to me explain
        what the issue is about fonts so that this case was about Google Fonts.
        But fonts, in general, can be problematic if they're not embedded.
        Right. So explain what this problem is, although a lot of people don't
        understand it.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (14:35):
      </p>
      <p class="mt-0">
        So fonts are, yeah, it feels like it's something that's it's not bad,
        right? It doesn't do anything on your website; it just makes it more
        beautiful, right. But the thing is, you're sending a request to some
        other server to load the fonts in. And that's something that can be
        abused. It also cannot be abused, right? If I host a website like here,
        this is the font I created. Everyone, everyone is allowed to visit it.
        Just use it whatever you want, that's fine. But if it's not the case,
        and I don't know about a specific case with Google, why it's a bad
        thing. I can look it up later. But it's more like you're sending data to
        different websites when you embed forms. So that's in a nutshell, it is.
        So you're getting data from a different website, and that's not yours.
        So you're sending also your visitor's IP address and stuff about your
        visitors to that website. And it depends on the website, what they do
        with it.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (15:44):
      </p>
      <p class="mt-0">
        Right. And it's not just a Google issue, because you know, Adobe has
        fonts, you know, there are a lot of fonts right, that people can use. So
        I think the issue is having, I guess, that library installed in a way
        that your website doesn't have to call a separate location, you know,
        I'm saying for the fonts to be installed, or on either all your website
        or install someplace more locally related, is that correct?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (16:14):
      </p>
      <p class="mt-0">
        Yeah. So it's fairly easy to download the font and install it on your
        own website. And then you're bypassing the whole problem of sharing the
        IP addresses to Google. And I think that was what the case is about the
        decision in the German court was like, you're sending IP addresses to
        Google, without authorization or legitimate reasons to do so. So that's,
        that's the problem. So you probably want to download the fonts and also
        the Google Forms; you usually can just download this click of a button,
        you download the forms. And there's enough tutorials online where you
        can search for how to embed your own forms on your website. And then you
        have solved that problem. So yeah, it takes a little bit more effort.
        But privacy-wise, it's way better.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (17:10):
      </p>
      <p class="mt-0">
        What I noticed over the years is that this is around the time that GDPR
        became a law, and it started into enforcement. So say 2016 to 2018, I
        noticed that some of these tools, like Google Analytics, they were
        transferring more of the responsibility over to the user to the
        webmaster. And so I was concerned about that. So I'm like, people don't
        even know exactly what they're doing. So I've heard a lot of people say,
        well, I'm compliant with GDPR. Because I use Google like, well, that's
        not their responsibility. That's kind of your responsibility. But I
        think a lot of people didn't understand that. They think, okay, I use a
        major tool. I'm compliant. What are your thoughts about it?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (18:01):
      </p>
      <p class="mt-0">
        Yeah, it's a good thing that you bring this up. Google is definitely
        walking away from responsibility here. Right? They build this tool. And
        they say, oh, it's your responsibility, how to use it. But at the same
        time, they have many users from the EU and also from California, and
        there are different places where privacy laws are in place. And then it
        is their responsibility, right? They have a responsibility to their
        users to at least inform them and those around them to make it easy for
        them. And they did the bare minimum of what was required. So they did
        the IP anonymization, there was a feature, it was a big thing for them,
        like, oh, this is totally okay. Today, or a few weeks ago, we found out
        it's not okay; it's not enough. So yeah, they have been walking away
        from a mess that they created since a long time, and I really empathize
        with John from before, the browser episode you had with him. And I think
        we can agree a lot on how Google is in this landscape and how much
        responsibility it takes, and it's way too little.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (19:14):
      </p>
      <p class="mt-0">
        So tell me about where your tool comes in. So this is actually prime
        time for you and your tool and tools like it. Because I think people,
        for the most part, people are like, okay, I just want to do business. I
        don't want to be in a fight with the EU about different things, and
        people don't know what to do. So I feel like some people, they're like,
        okay, well, I'll keep Google Analytics, but I don't know exactly how to
        change what I'm doing. Right? Because a lot of people they've built all
        these workflows on top of this. They don't know how to get through it.
        But as an alternative, talk about how your tool is different.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (19:59):
      </p>
      <p class="mt-0">
        Yeah, so the first thing is basically the cookies, right? It's been an
        important subject for a long time now. And that's the major part of why
        Simple Analytics is different from Google Analytics. So we don't use
        cookies. But also, cookies are not just a cookie on your browser, and
        it's like everything that is used to track a visitor. So it's basically
        a term for everything that you do around tracking visitors. So if you
        have an anonymous IP address, and you still attract people that feel
        somewhat like a cookie, if you're having some storage in your browser,
        that's not a cookie; it's still legally a cookie. It's not defined like
        that. Because the GDPR wants to be very broad on how they define those
        things. But there's one thing that the, for example, in the UK, and
        there you have Becker, that's a version of GDPR, they are way more clear
        on what is a cookie and what is not. So if people want to know, okay, I
        want to know more about what is included in that; Becker is a really,
        really good resource for that. But that's a big difference between
        Simple Analytics and Google Analytics. So we don't use cookies; we don't
        track people at all. And then the next thing is there's a mind shift
        needed or required at least one because if you think about all the
        things that you use in Google Analytics, like this, if you really think
        about it, it's maybe 1% that you use. You want to know how many
        visitors, you want to know, where is this bike coming from? You want to
        know how is my newsletter performing, and stuff like that? So that stuff
        you want to know, but there's so much more in Google Analytics. And I
        think for a lot of people, we should ask ourselves, do we really need
        all that type of information? I recently spoke to a customer and a
        person who said, hey, we have a business here, and we don't use
        analytics. And the business was doing great. And that's also something
        that, yeah, would be really, really good to think about, right? What is
        the data that you really need? How can I run my business? Instead of
        doing it the other way around, like gathering all the data, you need or
        don't need? And then you ask yourself later, hmm, did we really need
        this data? Or what is the question we are going to be getting on this
        data? So I think we need a mind shift to change into thinking about what
        we actually need in data. So that's why I think Google Analytics is way
        too much for most people; there's way too much. So that's also a reason
        why Simple Analytics is a great alternative. Because you're only getting
        the needed information, so you get the page, which you get to how long
        people are in your, on your pages, and stuff like that, you can see
        where people are coming from, is your newsletter performing well. And
        stuff like that. So you can still get all the insights that most people
        need. And that's usually enough for most people. And that's something
        that we should realize. And then on top, the last difference is, we
        heard that quite a bit now, is Google Analytics is not free, right? So
        it sounds free. But yeah, we all know, it's not free, like you're still
        paying, we have the privacy of your visitors and yourself. So you could
        say, like, how can we fix a privacy issue? Well, at first, probably if
        you want to have analytics, you need to pay for it. Otherwise, you'll be
        in a different way. And I think that's where the EU does a great job.
        And they're far from where they need to be. But the EU tries to protect
        the visitors of those websites. And I think that's a great place to
        start. And we try to help with that mission as much as possible.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (24:31):
      </p>
      <p class="mt-0">
        You hit on something really interesting. I would love to explore this a
        bit more. And you're talking about tools that are free, right? What
        happens and I wish that there was something, I don't know in law or
        something where they can change this, so the loophole is when you use a
        service or something, and it's free, there is a value exchange there.
        That happens, right? So yeah, the problem with the free tool is that the
        value exchange tends to be very asymmetrical, and it's not as beneficial
        to the individual. So, let's say percentage-wise, you sign up for a free
        tool, maybe it benefits you 20%. But the tool that you're using for free
        may benefit from you like 1,000%. Yeah, so I think that, when you have
        something, I've run through this recently, where I had something that I
        was using, and I thought, you know, I'm really not comfortable with the
        asymmetrical nature of this exchange, right? So I decided to go to
        something that I paid for the way I was like, okay, this is because I'm
        paying for this tool, it sort of evens the playing field a bit,
        obviously, the company, you're going to make a profit. But it's more of
        an even exchange, I feel. What are your thoughts?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (26:13):
      </p>
      <p class="mt-0">
        Yeah, exactly. I'm saying it from a person that makes money on this,
        right? So this is where the listeners should know that. But at the same
        time, I really believe that if there is indeed this percentage
        difference, right, like 100, or 1,000%, for example, you'll have a
        really calculation of, I think it was a few years ago already, but if
        Facebook would charge people, they should charge people $7 a year, and
        then they would have as much profit as they would now with their ad
        business. So they would charge everybody $7. And then you think like,
        yeah, but nobody is giving Facebook $7, maybe 1% of their customer base
        will do it. And the percentage maybe higher even. So then everybody
        leaves a platform, and a platform dies, right? So there's this thing
        with free software or free products; it's very, very hard to get the
        majority of people or a very big portion of people without charging them
        for it. At the same time, very difficult to make them pay for it. So
        what do you do? And I think there's a very good moment right now, where
        more and more people think, oh, but if I charge and have a smaller group
        of people, that's also great. Like, you see a lot of things like
        sub-sec, and you see a lot of independent makers and so many creators
        that are working on something and selling it directly to their fans,
        basically. And I think that's a very great way to start it. And then I
        think we will have way more smaller companies. And I think that's great.
        Because if you have one massive company, there's a lot of power to be
        abused, right? So I think we're going in the right direction here, where
        there are many different and small companies. And then we're finally at
        some point where one company can't say, oh, we're abusing the law or
        abusing our power. And that's okay. And then the next company will do
        the same. So I think we're, yeah, we're on track to something really
        great if this goes in that direction.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (28:39):
      </p>
      <p class="mt-0">
        What else is happening in the world of technology or privacy that's
        concerning you right now, in terms of if you're thinking about the
        future, right? So I like to talk to people like you about development
        tools. I feel like you're really kind of future-focused, right, where we
        sort of need to go. So what's happening right now that's concerning you.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (29:05):
      </p>
      <p class="mt-0">
        I think what is concerning me is that the power is moving a bit to
        browsers, and especially the Google Chrome browser. And that in the
        beginning, it was a great thing. They developed a very fast browser and
        did some very great things technology-wise, and it was great. And then
        now the whole landscape of browsers is basically based off that one
        browser. So Google Chrome is created by an open-source version. And the
        open-source version is called Chromium. And now, almost all browsers are
        built with that version with Chromium. And what Google now is doing is
        they start adding, they say, privacy features into their browser. But
        it's Google. So there, you always have to think twice if they say
        something regarding privacy. And this time, it's no different. Like,
        they got a lot of backpressures, or how do you say that? From from
        FLOCs, for example. So building profiles in the browser, so they didn't
        have to track people. At the same time, you're tracking people in the
        browser. So you're just moving the whole problem into something else and
        then say, we don't track you. So it's a terrible power move of Google to
        do that. At the same time? I think it was four years ago when I started
        my company. There was also this new Google version. And it had the login
        icon on the top right corner, right. So there's this little avatar, and
        then you're logged into the browser. And there was at that point, I
        thought, okay, this is is going too far. And at the time, they said,
        yeah, but we're not going to use this to look, at different sites just
        for Google services. Until now, and now they use it for multiple stuff,
        including tracking, and then it's like, oh, but you said the thing to,
        like, have the privacy landscape except you. And then later you do
        something else. And that's what they did. That's what WhatsApp is doing.
        There are so many businesses that do that. So it's very hard to believe
        those businesses. And I think the only solution for that is to break
        them up into smaller pieces or to shut the practice down. And for
        example, don't allow them in the EU or in other privacy-aware countries
        or places, and then they need to change. So I definitely think there
        needs to be a law for those businesses to really fix the privacy issue.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (31:51):
      </p>
      <p class="mt-0">
        Do you think there'll be a change? Do you think, as a result of this
        litigation, that Google's going to make any changes here?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (32:00):
      </p>
      <p class="mt-0">
        I think they will do the bare minimum that's required for this. Yeah,
        it's hard to say what they will do. But the history shows that they are
        not really going to fix the problem. Because their business model is
        built around tracking so that they're not going to say, tomorrow or next
        week, hey, you know what, we did something bad in the last few years,
        we're going to solve it now for once and for good. And we're going to do
        it like this. We don't track anyone, anybody, anymore. And sorry, to our
        shareholders. But yeah, the company will devaluate quite a bit. That's
        not what they can do. Right? The shareholders will be very mad, people
        will be replaced, and they will keep doing what they will do. So yeah, I
        don't really think that will solve an issue. I do think that with
        legislation, you can change them a bit. But at the same time, in their
        balance sheets or yearly report, they already have a budget for fines,
        right? So it's just part of the business model to pay a few fines, and
        you can continue doing what you do. So yeah, I don't really trust that
        will change that much. But I do think their pie is going to shrink in
        the future. So there will be more and more smaller companies that eat up
        their market share. And at some point, they will be obsolete.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (33:33):
      </p>
      <p class="mt-0">
        Yeah. Interesting. Interesting. So if it were the world, according to
        Adriaan, and we did everything that you said, what would be your wish
        for privacy anywhere in the world, whether it's technology, human stuff,
        regulation?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (33:50):
      </p>
      <p class="mt-0">
        I would say that every individual would be able to say where the data
        will end up and how and they will be in the power of it. So I would say
        if you install an application, let's say, you installed TikTok, you
        should be able to say, like, okay, I don't want to have my data being
        shared with anybody else. I don't want to have my data on servers in
        China; for example, I don't want to have my data being used for this and
        this and this just for this. I think if, at some point, we will be
        there. Or at least I hope, and I really think that. Yeah, that's one of
        the things in an ideal world where that will, yeah, that would be my
        ideal world where you can really say like, privacy belongs to the
        individual again.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (34:47):
      </p>
      <p class="mt-0">
        Right, right. That's great. That's great. So how do you tell people how
        they can get to know you and your tool?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (34:58):
      </p>
      <p class="mt-0">
        Yeah, so it's SimpleAnalytics.com, And we're active on Twitter also on
        LinkedIn. And we have a nice, nice newsletter. It's called the
        PrivacyNewsletter.com. And that's quite nice because it shows a few
        tools every month. So you can kind of see what's changing in the
        landscape. We have some news articles and some new features that we
        launched in our tool. So yeah, I would recommend subscribing to that
        one. And yeah, you can always try it out there too. It's as easy as two
        weeks of a free trial, and just go to SimpleAnalytics.com.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (35:41):
      </p>
      <p class="mt-0">
        Perfect. Perfect. Well, thank you so much. This is great to have you on
        the show. I wish I were in Amsterdam right now, so I'm kind of jealous.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (35:50):
      </p>
      <p class="mt-0">
        Oh, you're always welcome here. To be fair, it's a bit gray and rainy.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (35:56):
      </p>
      <p class="mt-0">
        I'll take it. I'll take it. I just love it over there. It's so much fun
        in the Netherlands.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (36:05):
      </p>
      <p class="mt-0">Let me know when you do. We'll do the coffee.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Debbie Reynolds (36:07):
      </p>
      <p class="mt-0">
        Oh, totally. Totally. All right. Well, thank you so much, and we'll talk
        soon.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (36:12):
      </p>
      <p class="mt-0">Awesome. Thank you</p>
    </PressMention>
  </div>
</template>

<script setup>
import PressMention from "../components/PressMention.vue";

const path = useRoute().path;
const slug = path.split("/").filter(Boolean).pop();
</script>
