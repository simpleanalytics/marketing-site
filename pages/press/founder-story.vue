<template>
  <div>
    <PressMention :slug="slug">
      <h2>Automated transcript</h2>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Hi guys, Artem Daniliants here. And welcome to another episode
        of Daniliants ventures podcast. Today, I have Adriaan from simple
        analytics, and I think it's going to be a really good episode because we
        have a founder, a startup founder just doing his thing, creating
        something really interesting, but in very crowded space. So I want to,
        ask Adriaan, why did he decide to create analytics software when there
        are so many other options and most importantly, for me, how's it been
        how the company started and so forth, but enough of me, Adriaan, thank
        you very much for being here. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. Thanks for the invite. And yeah, I’m very glad that I’m here. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Thank you. Thank you very much. So could you tell a little bit about
        yourself? So you're in Netherlands, right in Amsterdam. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, that's correct. Yeah. So I’m living now in Amsterdam. I like to
        travel a lot, so as a nomad, but yeah that's not going to happen anytime
        soon. That is unfortunate, but there's worse things that can happen to
        your life. So I’m pretty lucky still. And I live here with my
        girlfriends and I’m pretty happy with the city. There's so much to do
        and yeah, I’m really in love with where I live. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">Yeah. So are you originally from Amsterdam?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        No, I’m from the south of the Netherlands from a little village, a
        village that nobody knows, so I won't name it here. But yeah, that's
        where I’m originally from. And then when I was like around 18, I thought
        like, okay, let's get the heck out of here and let's go to the city. So
        I went to the Hague, Utreht  and finally in Amsterdam.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        All right. So how do you like it there in Amsterdam is the startup
        community good? Do you have likeminded people? Cause I kind of feel like
        Amsterdam is a startup hub in a way, there is so much interesting stuff
        going on. I used to travel, good old times have been in Amsterdam, so
        many coworking offices, like a good vibe I think obviously. I think a
        lot of people who haven't been in Amsterdam know it for other reasons,
        especially in north America, when they haven't been exposed to the
        startup community in Netherlands, but how do you feel city-wise for your
        startup? 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Honestly, I think it's lacking. Yeah there are quite some co-working
        spaces and things are good, but it's like most of the people, like when
        you travel abroad and you go to like co-working space, then you meet
        like a lot of people that have the evening off and they just want to
        like go for a beer or something or enjoy the new conversation sort of
        making new friends and in the Netherlands, that's not so much the case.
        Because like everyone lives in the city, so everyone leaves at night. So
        it's less fun to like or a little bit harder, I think to meet new people
        in co-working spaces. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Okay. The coworking space that I’ve been to, I felt maybe like that as
        well. Everybody's kind of doing their own thing, and then when the
        evening comes, people leave, but then I thought like, what the heck!
        There is meetup.com, obviously, meetup.com and some other events geared
        specifically for startup community. So you can go there and meet people,
        but, okay, good, good. So, Amsterdam is great, but could be better.
        Startup wise, community wise. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Could be better, but it's like, it's a great city. Like I love it. And
        it's yeah, you have so many things to do. So if you are bored or you
        want to have an event, you just go to whatever event is next week. So
        that's great. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. And Amsterdam I think is situated in a good location when you
        think about Europe in general. So from there, once, the skies are clear,
        it's not so far away if you want to travel to UK, maybe again, that's a
        problem since, they exited the EU. So we don't know how that works, but
        I guess, it's a pretty nice place. The only thing that kind of bothered
        me about other lands and Amsterdam specifically is just enormous renting
        costs. Like the living costs there in Amsterdam as a tourist I have
        experienced on as a tourist. Like one of the most expensive hotels and
        stuff like that. It's just, I don't know, like living wise, is it
        expensive to live in Amsterdam? Like if you are like permanently
        living. Yeah. It depends how you compare it. I think it's equally
        expensive as maybe Barcelona or something, or it's probably less
        expensive compared to London or to New York. Also in size it's very
        small. It's a very small city. But like it's more expensive than the
        rest of the Netherlands that's for sure. But compared to other cities,
        like if you go to London or New York, it's probably way more expensive.
        If you go to like, or places like Asia or other parts of Europe, it's
        maybe a little bit cheaper. But yeah, it's like, yeah, for me it's
        affordable as in like I’m used to the Dutch prices, so that's like,
        yeah, that's your measurement. Yeah. But for me, I live in Helsinki,
        Finland, and it's pretty expensive city and the country is pretty
        expensive, but when I traveled to Amsterdam and, look at total price,
        I’m like, whoa, that's expensive. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">Luckily the locals don't sleep in hotels. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. For sure. For sure. So how about you as a startup founder, so you
        have an awesome product, Simple Analytics.  And analytics I guess a
        software as a service product. So you sell it as a software and
        basically you kind of compete, I wouldn't say maybe head-on, but you
        compete with many other offerings on the market. So there are like
        server-side analytics. There are like the big boys, enterprise analytics
        and there is something like middle ground, like google analytics and
        maybe like even Yandex metrica and all that stuff. And then boom, you
        come in with Simple Analytics. Could you tell me a little bit, and I’m
        sure the viewers will be interested to know, how did you end up with the
        idea of creating Simple Analytics and what was the reasoning behind it?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Well the main reason is that I’m not a huge fan of google.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        You're one of those, I think we need people like you, I think we need
        people like you to create alternatives. Because there are no
        alternatives. Like everybody knows, google and everybody knows their
        offering. So if there were more alternative, I think they wouldn't have
        such a huge market share. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Exactly. Yeah. But that's also how this idea originated. Like I was
        traveling abroad, I think it was in January. I was staying with my
        girlfriend and I was complaining about like how I needed to install like
        this google analytics snippet that you install for many clients. And I
        was doing like freelance programming work at the time. So I needed to
        install the snippet all the time and I was like, yeah, but you all
        giving like all your visitors data to google and google. They use it for
        their ads. Like it's not a secret or something it's in their policy. So
        they use it for their ads and for their other products. So yeah, this
        doesn't feel right for me. And I just was complaining about it to my
        girlfriend. And then suddenly I felt like, why not make something that
        doesn't do that? So where the data is actually from the owner and also
        merged to like a big corporation that makes other ways of money with it.
        And that's how it was born. Like I then worked for, I think one or two
        months and build like a very easy prototype. It was just a graph. It was
        just like a little snippet. And I tested it with a few users, and they
        liked it. And then I thought like, okay, I think really this can be
        something. And that's like when the day came that I launched on hacker
        news, that was like a huge day. Like it was on the homepage for like
        nine hours, I think. It was on the number one spot for a very long time.
        So that's how I got like my first customers. And then I really knew
        like, okay, this is really something that people are actually looking
        for. And then like I had enough motivation to keep on going and now it's
        like one and a half year later, I think. But yeah, it's super fun to
        like have this side project and you started from a certain mindset where
        you really, really care about privacy. Like not giving your data away,
        like not having different ways to make money. And yeah, this just felt
        right. And it feels still very right to do it like this and yeah people
        like it, it seems. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. So if you think about it basically you came up with an idea,
        you're like, okay, I have to insert a google analytics snippets. So why
        not create an alternative, do something on my own. And then create an
        alternative focused on privacy, but obviously you must be a programmer.
        I mean, it's not, like you just said like, oh, okay, great. Then you
        went to Upwork, created a requirements file. And you're like, okay,
        somebody do this for me. So you basically, if you talk maybe a little
        bit about your background, so basically you were capable of doing it
        yourself. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. That's true. Yeah, I started programming when I was, I think, 15
        or 16 or something. And I learned it from my brothers. They had done it
        for a few years more because they were older. And so I learned it from
        them and could ask them questions and build my first website for my
        school. And yeah, I did little projects and also got to know what was
        possible. Like in those, this was quite some time ago. But then even
        like internet explorer that was huge of course, 5 and 6 and stuff. And
        you can even like read the clipboard data of users visiting your
        website. Which is pretty bad of course. But as a normal user, you would
        never think of that. But if you're a developer and you see it's
        possible, then you know that like what other companies can do with all
        the data. So I was always quite aware of what is possible with the web
        and what you can collect from users. And yeah, then I started studying,
        but studying wasn't really the thing that motivated me. So eventually
        after more or less nine studies, I think I finished one. But in between,
        like I was always working like side projects or for a company, like
        freelancing and part time jobs and stuff. And then eventually I was
        working, I think like for like, I never worked full time, but like three
        days a week and I did it for a few years. And then I realized like,
        yeah, if I stay in this comfort zone of work then I become maybe a
        little bit of a better programmer, but I don't really care about being a
        good programmer. I really want to have my own business and make some
        profits in something that I really care about. And this way I started
        to, okay. Maybe I should just start my company super analytics at a time
        as well. And then maybe I need to stop my current job because then I
        really have the motivation to get started. So that's why I stopped
        working for my boss and then I started this company and then I needed to
        deliver something in like no time, because otherwise I wouldn't have any
        profit and couldn't pay my rent. So that's how it started.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Good. Good. So basically, you're a programmer, I guess.  Would it be
        fair to say is that you're like more focused on the web or are your like
        generalist, you do whatever, or are you interested more about the web,
        in general? 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">Yeah, I like the web more. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Same here. Same here. I used to do programming in high school, started
        my first business in high school as well. Used to do some really
        horrible php programming in high school, but that was good enough. And I
        always felt that programming is not the most interesting thing. It's
        actually doing something with it and creating a product and actually
        looking at people, using it, and I’m sure you obviously evaluate your
        data. How many signups, what do they do? Which pages are, I guess you
        use Simple Analytics, inside Simple Analytics in a way? To analyze your
        software, I guess and the way that people behave. But so you started
        working on the product. How long did it take you before you had
        something that resembled a working product, something that you could
        actually ask money for?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, like I think it was two months. So two months before like from
        building it from scratch to launch date. And it was the moment where I
        dare to charge money for it. And that was, I think two months maybe I’m
        wrong. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        It's still not the very long development cycle. Well, what about, other
        things like copywriting, what about design? Did you do all of that
        yourself as well?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Design. I did not myself. What I like to do is like just building the
        thing completely and then make sure it works. And then ask a designer
        like, hey, I built this thing. Maybe you can make it nice. That's what I
        did this time as well. I knew a friend who was a designer and he has
        developed or designed a website and that I implemented in a few days and
        then it was done. So I didn't have to do the design myself. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">What about copywriting, stuff like that. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, that's what I, yeah, that's what I did myself. Like I’m building
        the whole product and not to forget like the marketing of the product,
        which is a lot of time as well. Getting it ready for product hunt,
        getting it ready for hacker news. And make sure that everything is
        correct for SEO and stuff like that. So making it ready for launch
        basically. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        So you're, I guess a one-man team, right. You use freelancers and
        friends, maybe. You can, but you're working alone pretty much. So you'll
        handle support. If somebody writes to support inbox, it's you who
        replies and stuff like that. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. I have experimented with external people as well for support and
        for freelance developments, I still do it. Which is great, I’ve like a
        great freelancer, web developer, actually two, one that sometimes helps
        and one that helps me every week. And that's great because then
        sometimes I can just like chill for a bit and then stuff gets still
        done. And that's a great feeling like the product moves on, even if I
        don't work on it.  And that's something that I really enjoy because then
        yeah, you don't have to like have the feeling that you're always, I need
        to do something.  Which is I think common pitfall for makers or
        entrepreneurs that are like only by themselves, because then you have to
        do like so much work and that creates so much pressure. So I think it's
        great to have like some other people around you that help you with
        that. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Of course, of course, actually being involved in a few projects and
        startups, I actually decided at some point that I will never start
        anything alone anymore. I think it's very hard. A lot of people can make
        it work, but it's just a lot harder.  Combining family, being sick and
        all that, and then still being able to maintain a business. But how did
        you fund your business? So, you quit your job and obviously money
        stopped coming in. You had something, you had to do something. So for
        two months you basically supported yourself probably using savings.  And
        then, or did you have an investor?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        No, I didn't have an investor and I probably never want to have any
        investors. Like a bootstrap business, I’ll just say, yes or no to
        myself, not to anybody else. And like for the start, like I’m still
        doing some freelance once in a while. And that's just like the easy
        money. So you can charge like, as a developer quite a load per hour. So
        then if I do select one week in one month, in the beginning, that would
        be enough for like yeah, I think three weeks’ time for working on simple
        analytics. And I still do that sometimes because then I put
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah, for sure. For sure. And if we go back to the Simple Analytics, so
        the core concept, is similar to google analytics in a way that you get a
        little bit of insight into how people behave on your website, what kind
        of, how many visitors you have and so forth. But the core, I guess,
        difference is that it's stored on your servers and you don't share that
        data anywhere. There is no third parties involved and you don't do any
        kind of like crunching of the data analysis in order to compile a
        profile for the website. And then you sell it to some other like Alexa
        or like whatever. So basically that's like the biggest difference. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. These are our number one promise to our customers is we will never
        sell your data. And that's for us super important because the data is
        from our customer. That's also why we have so many ways how you can
        download your data, get it out of our systems, get it into your systems.
        Like we don't really want to own the data. Like we don't care about the
        data because yeah, it's yours and do whatever you want with it. And of
        course we try to find nice ways to represent the data nicely for our
        customers, but we will never ask a third party like, hey here's the data
        and now you can build up a profile or anything else. No, that's not what
        our customers would expect. And also something that would also be in
        huge contrast with what I think is important with our analytics
        business. So yeah, that would be very strange if that ever would
        happen. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. That seems fair. I also worked with a few government officials and
        to my surprise, they actually denied installing google analytics on,
        government websites. Cause they said it's against the policy of the
        government. So it was the first time when actually somebody pushed back
        and said, no, we don't do that. That's not how we role and then I
        realized, okay, it kind of makes sense. It's a government website. Then
        you are giving data to an American company, yeah, kind of makes sense. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">That doesn't feel right. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. It doesn't feel right. Especially with nowadays as a developer,
        you know yourself how much you can actually scrape, form, submissions,
        miles, interactions, you can get GPS possibly, whatnot. There's so many
        ways you can actually scrape the data and build a profile, but in your
        product, what I think is interesting is that your whole product that
        hinges on your promise. So you promise there is no reselling of the
        data. And obviously I believe you, I think reading your blog posts and
        your interview in the hackers and so forth, it's like your core, I guess
        value personally as well. So your product just kind of fits within your
        already existing values. But how do you communicate to your customers
        that it's not your words. How can you make it more transparent and
        believable, the policy? Cause nobody knows what happens on your server.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. Yeah. So there's definitely something that is hard to like just
        promise. Like people need to believe you. So there's a lot of like
        building your brand and that matches a lot with like building trust and
        the Simple Analytics trust is like the most important thing that we have
        to get from our customers. Otherwise they don't use us. So that's what
        we also have, like quite some content about building their trust. So
        recently I also published a blog post about like what you can do as a
        business to make your business more privacy friendly. With a lot of tips
        like what you can actually do. And also with like examples also for
        developers, how they can use this information actually in their servers.
        And this makes your brands also more trustworthy. Because if we write
        about it, then there's a huge chance that we will actually did it. So
        that we actually also implemented these. Yeah. So we now we're talking
        about it. And then you're building more trust that way by sharing, like
        what you're doing, how you're doing it, why you're doing it. And also
        like on twitter, I’m quite active on sharing insights. Also on our open
        page, like we share or financials public statistics, so that's also
        contributing to like the whole what those people say is probably true.
        Maybe not like you never know for sure. But that's how we try to build
        the trust. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        So basically, but you have something in the contract as well. When
        people sign up, maybe there is some mention about it, not selling it to
        third parties. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        At the moment, I don't think that's the case. Like in the contract it
        says like, okay, if something happens to your data then yeah, we want to
        make sure, I’m not sure if that's in the contract, but as one of our
        rules is that like, we don't want to collect data that is interesting to
        steal. And of course, sometimes just pay issues can be interesting to
        steal for, I don't know, a competitor or something. But we try to like
        collect as little data as possible to still provide value. And that's
        also an important difference I think with competitors is that if you
        only collected the parts that are strictly needed, you can drop all the
        IP addresses. You can drop all the, or you can anonymize the user agents
        and stuff like that. And then you have like a data set that you can
        still use and have without any cookie banners or whatever. And at the
        same time, it's not that bad if something goes wrong. If your employee
        steals it with your credentials or whatever, it's still data that's
        like, I don't know, to a certain extent it's not that critical if its
        lost. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        So basically that's, I think is a very interesting distinction with
        google analytics by default, they want to track everything or other
        competitors. I mean like other competing products. By default it's
        everything. And then there are some settings to restrict that and this,
        and in google analytics, you can enable IP anonymization, but that
        requires you to actually change things. By default it's everything, you
        know, they just gobble the data. So you have an interesting approach. So
        you try to collect as little as possible while still being useful. So
        basically you obviously collect some information about, for example,
        geolocation, but maybe you don't collect IPs. Maybe you get information
        about I don’t know, like browsers and what type of browsers are being
        used, but then you don't try to profile people. You don't try to match
        them and say, hey, this person, this is probably a separate person that
        does this and this. So basically your data set, yeah, I think it's
        pretty interesting. I always wondered why in google analytics, when you
        enable and I’ve inserted that snippet million times myself, I always
        wonder why you can't choose what they want to collect.  So in google
        analytics, some projects, they just want to know how many visits, that's
        it, nothing else.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. I think you can do it. But it's very complex to set up. Like it's
        like, I don’t know, google analytics has a tendency to make everything
        possible. And at the same time, make it unusable for the end user,
        because already if you open the dashboard, it's quiet... 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">Or too much info. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. Right. So it's hard for a new user at least to understand what's
        going on, on their dashboard. And I think it's the same for their
        features. Like you can implement almost everything like you can do
        server-side tracking, all that stuff, which is pretty amazing. Like you
        can all do it, but like it's not like the defaults. And that's like what
        is, I think, super important for all those privacy debates out there.
        And all the companies doing like I don't know, Facebook, for example,
        they say a lot from like something like, oh, there's this setting. And
        if you go to your settings and if you have like 15 clicks later, you can
        disable it, so everyone can disable it. And then the European union is
        like, oh yeah, that's nice. But it's not like, it's about a default.
        Like if the defaults are to track everybody and then maybe 1% toggles
        the buttons to something like less privacy in Facebook, it isn't going
        to change the world, we need to have to default. And that's why the
        Simple Analytics, I really care about the defaults and the defaults are
        super privacy friendly. And we also prevent people from abusing our
        system if they want to use it privacy unfriendly, for example, the
        events, events you cannot like have a product id with it, stuff like
        that. So people cannot abuse the system to track people.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        So, profiling is harder in your system. If you want to do it, you
        basically can't. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">You cannot, or you have like a huge margin of error. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Okay. Okay. That's interesting. That's interesting. So yeah, but the
        people are still combating, like for example, because companies are so
        bad when it comes to privacy, now there is a lot of tools, that people
        and communities use themselves. So for example, if you look at ad block
        and many different variations of it then we have things like do not
        track. And then again, I’ve kind of feel that companies still don't obey
        doing a track I guess setting in your browser. So for example, does
        Simple Analytics obey do not track?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. By default it does. It's a funny one because like we don't track
        users ever. But it still feels like visitors should be able to disable
        it. So that's why we enable or block visits from people with do not
        track.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. So if person has do not track in his browser and for those who
        don't know, there is a new setting that has been there maybe for like a
        year or two now in some browsers and most browsers, I think you can set
        so that other websites will be able to see that you don't wish to be
        tracked. But again, it doesn't really work. There is like, I think still
        you get tracked by google and they have terms of agreements where it
        says like, yeah, if you set this setting then maybe we don't do this,
        but everything else we still do, and there is no transparency. So you
        cannot really check. You basically have to trust the websites. But how
        do you feel about the people just getting sick of the whole tracker
        thing and going, especially developers and tech savvy people just going
        to, like an additional add on to their browser that blocks everything
        just like completely removes the whole tracking system from the
        internet, do you think that's the right way?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, the right way is a difficult one. I don't have permission to say
        that. I don't know, like, I think user, end user on the website in a
        browser, it's like the open web, they should be able to block whatever
        they want. So they are the one in power and they should be in power
        because they are browsing the web and they are not choosing whatever
        tracker they run on their website or whatever, so they should be
        empowered. So I think it's very good to have a blockers and block
        whatever you want. That being said, or that having said, there's also
        something like the good side of the trackers. Like Simple Analytics
        doesn't track people. And they're just collecting statistics, page views
        basically. So it doesn't harm anything. If you related to like do not
        track movement or whatever, or that setting. But it's very to, I don't
        know, like, it's very hard to make your case I think, then you need some
        kind of like or then the blockers need a community where the community
        says like, yeah, some are good, and some are not so good. That's already
        happening. You have like certain lists with like friendly trackers or
        trackers that obey to do not track setting. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">Is Simple Analytics on the list?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, for sure. Yeah. On that list, I don't know actually. But we are on
        the list of normal track blockers.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Oh, okay. But I mean, like in the white list, like where it's kind of
        allowed, because as you mentioned, there's community that creates lists
        of good trackers and I was wondering, you would definitely want to be on
        that list. Cause Simple Analytics kind of feels, as a good fit. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, I should check that actually. I don’t know from the top of my
        head. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        You see it's already useful, the interview is already useful. But you
        were saying, sorry. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, so the power should be, oh yeah and the community they are then
        all of a sudden responsible for checking who is good, who is not good.
        And for them it's way easier to just block every third-party tracker or
        whatever from their website. And yeah, that's too bad for companies like
        us. But yeah, that's part of the deal. So also that's basically why we
        started making a local bypass which actually bypasses the ad blockers
        and still gives website owners the ability to see their page views. And
        that's also an interesting selling point because like google analytics
        is blocked a lot, like in major, by default they're blocked. And also
        like more and more browsers are going to enable booking google
        analytics. And for example, Firefox focus on mobile and stuff like that.
        So then customers of Simple Analytics are interested like, okay, what's
        the difference between google analytics and Simple Analytics? So then
        they can actually measure how many visits that are blocked, and it can
        be from 5% to 25% of a difference depending on what your target audience
        is of course. But yeah, that's an interesting topic.  
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        What you mentioned and it kind of piqued my attention. You mentioned
        that you have an ad blocker bypass. So basically if I use ad blocker and
        I want to block all the bad guys, you are still able to get analytics
        from that view and from that visit as well. So you penetrate the ad
        blocker in a way I’m just interested. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        But you can still block the individual websites, but it just gets a
        little harder. Because like the major block lists don't have like all
        the little websites on them. That's an interesting topic. Like it
        started with like the conversation with the ad block people like, I had
        an issue on the broker list and I just saw like, okay, there's no way
        they are ever going to allow anything like Simple Analytics. So then I
        have to build my own feature to fight this issue. And I don't know if
        it's super important, like in the beginning when I started simple
        analytics, I thought it was super important to have this feature. At the
        moment I’m not so sure. I also see customers changing back from the
        bypass feature to just a regular feature. So the regular collection
        script. So yeah, I’m not really a hundred percent sure what is the best
        way here, what do you think?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        What I think, well, I think that if you create a bypass for ad block,
        I’m interested in how it works, because I think that's interesting from
        the technical perspective, but again, and maybe you have a cool blog
        post about it, or maybe that's a good idea for the next blog post. Like
        ad blocking, should we abate, or should we try to bypass it? But I guess
        we should always respect the will of the customer and the user. So if
        the person has chosen to add an AdBlock that blocks all the trackers, I
        think it would make sense to kind of obey that and not try to cheat your
        way and still try to get something. Obviously in Simple Analytics, since
        you don't track, there is not much harm. Basically the person will be
        able to see that, hey, there is one more visitor view or there is one
        more page view. It doesn't matter. But I think if somebody goes out of
        their way and installs additional, add on because something pieces them
        off, I think it makes sense to kind of respect that decision and say,
        okay, this guy, okay forget him, we're not going to get any data out of
        him, let's say, but what actually scares me a little bit, if you can do
        it and you're obviously a very talented developer, but you are just one
        person, why doesn't google bypass ad block or does google already bypass
        ad block with google analytics, google tag manager? What do you think,
        is there some evidence of them doing something like that?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        I'm not sure if google does that actually. Like it doesn't seem like
        they are fighting at blockers this way. They do fight brokers in a money
        way. As in paying a lot of money to ad blockers, to bypass their ad
        blocking on google ads and not so much analytics. I think analytics, I
        think are still will still be blocked. But yeah, I don't know actually
        what google, I think they don't fight it actively. It's also like also,
        yeah, cat and mouse game. So yeah, you fix it and you have to find
        another way to bypass ad blocker, to very shortly have a technical
        explanation about it. It's just like, it's basically a sub domain. So a
        customer has a sub domain, they can link the sub domain to our server.
        So we have like a specific server for this feature. And then we make
        sure the SSL certificates are already generated. And then we just showed
        the proxy. So it basically proxies the public script and proxies API
        calls to our main server. And that's it.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Basically the ad blocker doesn't block it because it's not served from
        your domain. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">Exactly. So it's served from a different domain. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Most likely customer domain, right? Like a c name or something, customer
        just ads and that's it, done with, oh, okay, that's pretty smart because
        then obviously blocker will not be able to list all of those small
        websites and it's just too tedious obviously. I thought it was going to
        be something, I’m disappointed a little bit, but not in a bad way. I
        thought, like maybe you hijack like DOM object, then you are like,
        you're looking for ad block maybe in some way in a string and then you
        do something fancy, like dynamic loading, but okay. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Well we like to keep things simple. Yeah, it's in the name. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        It's much, much simpler and way more efficient and it obviously works.
        That's pretty interesting. I kind of also read a lot about google kind
        of make it harder for ad blocking extensions to live within chrome
        environment. There has been some, maybe a little bit of a pushback and I
        think google developing chrome is kind of scary as well. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">Oh yeah. It's super scary. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah, because it's kind of, it's like, because browser is slowly moving
        towards an operating system. So you do, if you have things like google
        stadia, you can play in the browser, you have office in the browser, you
        have whatever you want pretty much nowadays in the browser, video,
        sound. So, chrome is basically like an operating system and there is
        even like chrome books. So basically you have a computer with just
        chrome, which makes it an operating system in a way, but them developing
        it and us not really knowing what's going on behind the scenes, not as
        much, even though it's an open source software. But there is still
        google juice, a little bit in it that we don't see that they put in the
        chrome browser, but not in the open source version of chromium. So I
        always kind of feel, I moved away from chrome many, many times. First it
        was Firefox, I think after that it was Opera. And now I will be trying
        again, I guess, edge, since now it's powered by chromium. So a guy like
        you, obviously very interested technology-wise and ethics wise in the
        privacy, what browser do you use? 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">Firefox </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Firefox. What's the reason for it? And like what is your setup? How do
        you remain private online?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, that's a good question. Yeah, I really like Firefox because it's
        an independent and yeah, it's kind of independent. Like they still get
        money from google. But they're like more independent than like, for
        example, google with their whole operating system and their phones and
        whatever they have, like way more. So it's nice to have like a smaller
        player in the field that they're still building and focusing on the
        browser and there's also like a very strong force for privacy. Which is
        great, like their mobile browser, Firefox focus is amazing. Like it's
        just like one-tab browser, and you can just browse whatever you want,
        you hit on, throw it away and you have a new screen and that's like how
        you work. And so then you don't have like all the advertisements and all
        the things, all trackers are built in and stuff like that. So Firefox is
        really doing a great job in the mobile landscape as well. And that's
        also why I like them. And as in how I stay private online well, first of
        all, you can't, so it's a lie if people say you can. But you can try to
        keep yourself more private or more secure. For example, if I work like
        in a coffee place, I will use a VPN just because the coffee place cannot
        read my data. Yeah, service provides somewhere can, of course, because
        I’m hosting my server somewhere. So it's not like a privacy issue. It's
        more like a security issue, I would say. And on the web, it's very
        important to have like all those ad blockers and it https everywhere.
        There's an extension that converts http addresses to https. And I think
        that's one of the most important things you can do. And also privacy
        wise, you can give the data that you want, right. So you can agree to
        use iCloud or not. Or you can use your real name, or you can use like a
        burner email address. Like I’m big fan of onlineservice service, it's
        called www.burnermaill.io. And they have like this very simple product.
        It's just like, you have your own domain name and you can put every
        email address in there you want, and then you get those emails forwarded
        to your main inbox. So you have some kind of filter mechanism, but you
        still have like, yeah, it's kind of like spam filter on steroids. Which
        is great and all those kinds of tools like together, I think they will
        make your life a little bit more privacy friendly, but like, to a
        certain extent. Like your IP address, the VPN still ends up somewhere.
        There's always some other side of the corn that always happens with
        using certain tools.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. And I think you said it really, really well when you said, it's
        really all about the default. I mean, like you're a technical guy and
        you can install https everywhere. You can install ad blocker, even
        though those are not very hard, but then VPN, using VPN, then using like
        burner emails. So that traditional grandma, that will be like rocket
        science. She's like burner email. I'm not selling weed, bro. I just want
        to see my daughter's pictures and there is a check box, do you agree?
        And she agrees to everything and god bless her soul, it's not her fault
        that she is not going to read 45 pages, privacy document that basically
        outlines that, hey, we can track you, we can do this and this and this,
        and we don't have to tell you much. So I think it's definitely about the
        defaults and I think it would be awesome if browsers like fire fox had,
        these are when you first opened the browser and there was a dedicated
        space for privacy and it asked the customer, hey, like how important
        privacy to you is. And here are some defaults I suggest for you. And
        then maybe it could enable certain features. So for example, if you're
        very privacy conscious, maybe block third party cookies, maybe block
        trackers, set do not track. So I think, changing the defaults, I think
        that has the biggest impact maybe, and that people vote with their
        money. Right. If they use Firefox and Firefox is number one, google will
        be like, okay, well we'll have to do something about our privacy as
        well.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. And I also think like funny way to measure if a browser is privacy
        friendly is getting the numbers behind its revenue from the browser. So
        I think a few months ago there were some new numbers about like ads on
        different browsers and the ads in safari declined in price quite a bit.
        Because safari is getting more privacy friendly and more stricter on
        their cookies on third party domains by default, which is great because
        then you can actually measure like, oh, expertise, don't really like
        this browser anymore because they cannot target their audience that well
        anymore. And yeah that's quite a funny way to see if a browser, I’m not
        sure it's probably not accurate, but it's funny way to see if your
        browser is a little bit biased.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        There is some correlation. I think that's very interesting. I never
        thought about it, but yeah. And maybe in some browsers it's easier to
        install ad blocks and in some browsers, maybe it's a bit harder, but
        yeah, that's actually pretty interesting, very good point. One thing
        that I wanted to talk to you about is obviously you being very open with
        your financials, here in Finland, we're very open about our financials
        as well. You can walk to the tax office and you can ask how much the
        president makes and you will receive his tax return and you can go to a
        tax office and ask how much a company makes and see their financial
        information. But many startup founders, they aim for the great success
        for that gazillion dollars that will someday just drop from the sky and
        bless their life with luxury. But you are bootstrapping obviously,
        you're not looking for investors. You will not accept, somebodies money
        and will give away 50% of your company. Cause I kind of feel your
        business is your lifestyle, your livelihood, and also a way for you to
        make your mark on the world in a way, that makes sense for you. But why
        are you open with your financials? And since you are open about your
        financials can you tell me how much you make currently and what
        attributed to the growth?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. So first why I’m open about financials? It has like, I think two
        main reasons or three reasons I would say. One reason is if you want to
        build trust, you need to have some transparency on how you work, maybe
        on things that other companies are not transparent on. And for me that
        was important. So I also saw like a result or examples of other
        companies doing that. I was like, hey, that's cool. So you share your
        data in an open way with a lot of people. So it was also just cool to do
        something like that. And it's also great because if you share your data
        open, it works marketing wise as well. So people start talking about it,
        you can talk about it to others. I do this monthly update with update on
        the numbers, things that I did last month, new features and stuff like
        that. So then you have all of a sudden content you can share with
        others, which is also definitely a part of why I do it. And what was
        your second question?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        How much do you earn now and what contributed to that? If you want to
        share the screen, you can do that as well in zoom. Or if you just want
        to tell the numbers, I’m not that much interested in, are you rich or
        not? Cause I know you are still scaling up and all that, I’m not really,
        like, I just, I am interested what you were able to achieve
        bootstrapping, and what kind of things attribute it to that growth.
        Because I think that's the most interesting. I'm almost sure how-to
        percent that you will be very profitable. And if you continue down this
        path, there is obviously a demand for your product. But I’m really
        interested in about you not wanting to take any money and doing
        everything out of your own pockets. So what you were able to achieve is
        really interesting. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. So I started the open page, I think from the beginning or almost
        the beginning, but I didn't add my profit to it from the beginning. So
        in October 2019, I started adding the profit to it, but not only the
        profit, but also like, what is the hosting, what are the services, what
        are the freelancers costing and stuff like that. So then you have like
        on the slash open page on Simple Analytics, you have this chart
        basically with like all those information per month. So every month I
        will update it and then people can see like, oh, you are paying a lot
        for freelancing now. And you have more customers coming in or less
        customers coming in. So people can actually ask you questions about it.
        There's actually, yeah, I liked it about having a business because then
        you can also learn from others and you can also show others like, oh,
        this dude from the Netherlands, he just built his company and it works,
        like he makes profit with it. So it's also a little bit for inspiration
        to others, like really believe in sharing your knowledge or sharing your
        information to help others. And at the moment I have like 471 paying
        customers. And I started with the launch date, it was like 30. So this
        is like already a number where like, I would never have believed that I
        would have this number this time. So it was, yeah, it was super exciting
        to see that number grow. And also like, it never stops really growing.
        So it's always had like a very sustainable growth which I also like
        really like, because then you don't have like all the issues with that
        you would need to think about like, oh, if everybody, if there's like a
        whole new group from a certain, I don't know sorts of, yeah, that they
        won't like certain feature set. And if they would start, like in the
        beginning of my company, I would maybe I know changed something for them
        and then wouldn't be great for the others. And now I build it like quite
        slowly. And that makes it also way better than you think about what
        you're going to do. What are you going to add, how are you going to do
        things? So that's also what I like about like this kind of growth. And
        what contributes the most, I think is, yeah, it's very lame to say, but
        it's like being out there, like sharing your content, sharing what
        you're doing, let people know that you're doing what you're doing and
        why you're doing it. And also like certain like growth hacks, like, I
        don't really like the term growth hacker. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">But it's popular. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        It is popular, but like, it feels like you're, I don't know, you're
        tricking people into selling something and that's what I don't like
        about it. So, but you have so like, within Simple Analytics, we have
        like the feature we had from the start where people can make their
        dashboard public. So then everyone can visit your dashboard if you link
        it somewhere or you can tweet about it and people can actually go
        through your dashboard. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">So that's a growth hack. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">That's basically a growth. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        I guess let's say growth hacking if we consider it a bit now, now then I
        guess it wasn't effective marketing strategy,  to kind of loop back,
        like link back to your product and say like, hey, like you can see this
        dashboard, people see the dashboard, but they're like, oh, cool, what
        was used to make this dashboard? And there somewhere in the bottom, you
        have powered by Simple Analytics that brings you a lot more visibility.
        Maybe it brings you a little bit of link juice, stuff like that. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. And also like people can embed the graph also on their own
        website. So it's easy to get your data on your own open page for
        example. Which is also that contributes to the same things as people
        getting back to the platform. And also, it's also important that to
        notice that like, if people do that also reward them for it. So what we
        did is, you have this affiliate program, so people can just like create
        their own affiliate link. And then if people go through their link and
        they will get like a month for free and the customer itself he'll get
        like a month off reward. So it just in us dollars. And then also like if
        they share their public page, people don't know about if they have a
        referral link or not. So what we do is like, we replace, like the
        sign-up button we have on the open page for those customers, if there
        are referral links so that people can actually get money for it. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        They're motivated to share it. And you kind of reward them for that. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. Yeah. So it works a little bit of both ways and those things
        contribute to growth. But I think what works like short term blocking
        works very well. But now we also see like a lot of traffic comes through
        google. So that's a big source for us. But yeah, it's like a huge
        combination of all different things. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. So I obviously heard about you the first time when I read the
        interview in indie hackers, even though I sent you an email that you
        considered very impersonal, which was really funny. Cause I actually,
        and I don't mind at all. It was wonderful. It's just that, I actually
        researched your company and then I sent you an email and you're like,
        well, that's not personally and it was true because I used the template
        in Gmail and I was like, damn Artem, you spend all this time and now
        it's always that so I’m really glad you actually replied and said like,
        hey, what's up. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">Your second email was great. Like, it was great. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        I took the time and actually learned about the company. But for me
        personally, it was really interesting what kind of spoke to me in a way,
        is that in the interview that you had you mentioned like many different
        things that you did. Like product hunt you launched on product hunt. You
        talked about hacker news. Being there for like, I think nine hours you
        mentioned. That's all great. I also read about you having a free
        account, like free version of the product and you scrape that pretty
        quick. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">Yeah. I chickened out. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah, you chickened out. But again I think maybe for a good reason. I
        think nowadays kind of everybody is premium. So I think it makes a lot
        more sense when you actually have a free maybe trial to a paid version.
        I think maybe that makes sense. When person has already inserted his
        credentials into stripe, and then you offer him like a seven-day trial
        so he can see how it works and then make a decision to stay or not. But
        again, you've tried many things, but what is interesting to me is that
        your product is so easy to market, so easy to market, but maybe it will
        go against your philosophy. If you go to, for example, ad words or in
        Facebook marketing and you just choose, people who like google analytics
        and then just target those and say like, hey, why not stop giving your
        data to the big guys? Why not, take ownership of your data. So have you
        considered paid advertising or using tools which utilize profiling is
        kind of against your, I guess moral compass, would it be?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, that's an interesting question. I thought about it, especially in
        the beginning. I'm still happy I didn't do it. Like, I don't really like
        paid advertising. Because it contributes to this whole, I don't know...
        So it would feel wrong to like at the same time, say like, tracking is
        bad and in the same time also using it. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Then your monthly report, it will say like AdWords costs, like 4,000
        euro and people would be like, come on, dude. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. So I have tested it on the go because that's the one search engine
        that doesn't track you. And also their ads are just surfed based on
        keywords that you type in. So it's not like privacy invasive, so I have
        tested it and that didn't really work. Like I didn't get like a lot of
        customers through that. So I stopped doing that and focus more on like
        the long-term investments as in like, get your name out there in SEO
        wise as well. And then you'll get organic traffic, which is free and way
        better because people like organic traffic more than the crap on top. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. It converts the best.  I mean, it converts probably the best. If
        somebody finds you through a blog post about privacy and then they're
        like, okay, this guy is obviously, or this company is obviously like a
        thought leader in a way, maybe in privacy. So let's see what they got
        and so forth and they are a lot more trustworthy. But going back to your
        financials, what is your revenue now, if you don't mind me asking since
        it's all, public anyway. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. It's all public. So I’m just reading it from the screen. So the
        yearly recurring revenue is or annual is 80k in the moment. And then
        divide that by 12 and you get a monthly of 6.7 k per month.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. So if you think about it, to what point do you need to get
        money-wise? So I wouldn't, again, I hate the whole idea of, creating
        unicorns and, having a billion-dollar company, I, myself don't even
        identify with that. I kind of feel it's stressful and it's just after a
        certain point, money-wise, what another million going to do to you. But
        I think a lot of people are like, you, they just want to do what they
        love with people that they care about and make enough money so that they
        can support their dreams, their ambitions, can give a little bit to
        charity and support kids and stuff basically. And I think you kind of
        fall into that camp, right. I mean, if your product will be a huge
        success, you will not be against it, but at what point would you be
        happy like money-wise, at what point you will be like, okay, I can take
        a breather and maybe go on a holiday? 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, I can already basically. Because I’m happy with the revenue I get
        now. The only thing is that I pay quite some of it to my freelance web
        developer. And I also care about our long-term relationships. So I love
        to keep him on board for a long time. So what would happen with more
        revenue is that he can work more days and I can work less. What I’m
        doing now is, I’m working now two days a week on Simple Analytics.
        Because I have some freelance project at the moment which I also work
        two days on. I've got still one day of free time and then the weekends,
        of course. And when I started doing that like a few weeks ago, it felt
        so great to just like have time off and stop working, stop thinking
        about your business. Because if you're working only on your own
        business, you just get like, your head is just like half is your
        business and half is maybe the rest of it. That's not a healthy mind. So
        even, yeah, after this freelance project is done, I will not go, I’m not
        going to work like five days a week. I will work three days a week
        because my customers don't really know the difference. Like I’m still
        building features. My developer is still building features. I'm still
        focusing on marketing, why not do it in three days. Like, it is this
        possible, right? You have your own business. You have all the freedom
        you'll have. So I’d rather work three days and getting this next million
        on my bank account. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        That's actually wonderful. For me personally, I also have an ecommerce
        business, and I try to grow passive streams of income where I will be
        able to choose how much I work, because I guess you're also a person who
        wouldn't want to just chill seven days a week. You still want to
        stimulate your mind, right? 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">Oh yeah. For sure. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Read, maybe, write blogs, and solve challenges that you have technical
        or otherwise. But at some point, I don't know how old you are, and I
        don't know if I can ask you, but how old are you? 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">I am 31. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">Oh my god, I’m so much older than you. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">How old are you? </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        I'm I think 36 or 37, I’m not sure. Because I always tell my wife, there
        was a funny story. I actually told my wife that I’m so old and I said to
        her that I’m 36. And she said that, no, no, no, you're actually 35. And
        I’m like, no, no, no, I’m 36. And then she showed me, and, made me
        believe that I’m 35. At that point, I felt like, whoa, I got an extra
        year. Like I can do all this stuff. There is so much opportunity for
        undone work. But anyway, yeah so for me personally, I guess the balance
        work and life balance is so important, especially when get away from
        twenties, and you start relationships and you get to meet awesome
        people, you get to travel, see friends and you realize, wow! For me, I
        think it's not like for example, with already like 3,000, 4,000 euros,
        even if you live in Europe, you can live a modest but good life and if
        you work two, three days a week, you most likely will be overall happier
        compared to somebody who, for example, works seven days a week, gets
        like 20 million, but then always running, always stressing. So it's
        really good to see that you are, but again, let's say if your turnover
        or revenue monthly will be like let's say 20k, 30k, maybe you will have
        some staff working for you, maybe support person, a developer full time.
        And maybe you will devote more time to kind of like privacy, advocacy
        and research and maybe, take on like, do you want to take on maybe
        another challenge or is Simple Analytics your only thing for foreseeable
        future? 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Well I wish, I’ve plenty of ideas in the privacy landscape. So there's
        so much to do. There are so many areas that are not covered with privacy
        friendly tools. So I’m definitely going to do that at some point. Like I
        don't know when, maybe in a few months, maybe in two years. So I’m
        definitely working on something like that as well. But yeah, also funny
        about your age though, I had also for one year that I said it wrong. So
        I know how you feel. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah, yeah. But your number is not as scary as mine. Well, I guess mine
        is... 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">It is five years difference. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah, but if you think about it, also what I wanted to ask you and we're
        finishing up, it's been a really, really good hour, one of my favorite
        interviews, but like, how are you planning to scale? What I’m just
        thinking that as a programmer, I guess, want to be programmer nowadays,
        a little bit of python here and there. It doesn't maybe count. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">It counts. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. Okay. Thank you. Thank you. I feel better now, but anyway so what
        I’m trying to say is that the more views you will have, the more people
        will use your software, you will have to have more capacity. So are you
        keep on new technologies, like lambda and serverless, technologies that,
        for example, amazon offers, or are you like old school in terms of
        infrastructure? Cause I think one of the very important parts of your
        software is the data center, right? Because even if you say that we
        don't sell, but if there is like DMC take down or if there is some
        infringement, whatever, I don't know. And you know, cops walk in and
        grab the server, there is no much you can do. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        If they do it, then they're pretty stupid because the servers are
        encrypted. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">You do encrypt your data. </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. So the servers are encrypted as long as they are running, I mean
        they're unencrypted of course. So if the cops come in, they should keep
        the servers running and then they can maybe, get some data out of the
        memory, I think. There are even companies that are like gluing, like the
        memory to the motherboards and stuff like that to prevent this kind of
        behavior, but there's like, yeah, it's kind of, there are some limits on
        what you can do. Like I cannot walk into the data center and do
        something like that. But I can like get my own server. So I have like
        bare metal servers fully encrypted. Leaseweb in the Netherlands. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Okay. I am familiar with Leaseweb, they're pretty good and pretty
        affordable, right? 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah. Like they're not super cheap, but they're like affordable indeed.
        And their service is pretty great. Like I had some issues with it, and
        they were yeah, pretty fast with responding and technical help. So that
        was important for me. I also had like my service in Iceland, I would not
        recommend it to other companies that want to be privacy friendly.
        Because it's, the servers there were not like as up to date as the
        servers here. And also, the companies were not that big. So I was
        hosted, or I hosted with the biggest company in Iceland. And they still
        were running hard drives and stuff like that instead of SSDs. So it was
        just like, yeah, I’m not going to going to stay here. And I also asked
        my customers, you want to vote on if you are okay, if we move our
        servers out of Iceland and move them back to the Netherlands and they
        all said, yes, they are just fine and go for it. Because that's very
        important to us like where is the data, where is it hosted, who has
        access to it? So that's also why we ask our customers about it. And
        yeah, we were very happy with Leaseweb. And one thing to say about like
        using the latest technology and stuff, I’m personally a big fan of using
        stuff that's out there for some time. So for example, nodes we use like
        the long-term surface versions, same for ubuntu and stuff like that. And
        also little bit programming wise, we don't want the latest, newest
        hippest reacts or stuff like that. We use like few now a little bit here
        and there. But we don't really care about like, what is like hot right
        now. We care more about like, what will bring or help us further. Like
        for example we were running into issues with postgres a little bit for
        our analytics. So now we're working on an elastic search engine that
        will have the data way faster than we had before and before it wasn't
        needed. Like we didn't have like this relationship between like certain
        elements of our analytics. And now we have, and now we want to add it to
        our dashboard. So now we are going to do it, but we were already around
        for like one and a half year.  So I think it's great for developers that
        are going to start something and work on something or building a
        company, use the tools that you know, and then see if you get traction,
        if you get traction great, then you can do whatever you want, but start
        with what you know, otherwise you will probably not finish your project
        at all. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Yeah. Yeah. And if you think about it, a lot of people say that for
        example, php is horrible and myself, I moved away from php as fast as I
        could from python and thought that it makes sense for me. But then there
        are entire companies, successful companies that use php and are really,
        really popular, in the end customer doesn't care one bit. If it works,
        it works. And, you can make any web programming language work, I mean, I
        still can't wrap my head around JavaScript. For some way, it doesn't
        click in my head. I'm still kind of a backend guy myself. I like the
        servers. I used to run free BSD when I was younger, and I liked it way
        more than Linux. And then, Linux kind of overtook the server market and
        I’m still missing my little old free BSD box. But thank god we have
        things like raspberry pi and stuff.  That's really, really good. So
        Adriaan, this has been amazing. It was really, really fun. And I really
        appreciate you being on the podcast. I will have links to Adriaan’s blog
        and obviously to Simple Analytics in the description below and yeah, it
        was really, really good. I really appreciate you coming on. 
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Adriaan van Rossum:</p>
      <p class="mt-0">
        Yeah, thanks for having me. I really liked the conversation. You
        had great questions. And I started to think about like, yeah about, for
        example, a book list for do not track companies and stuff like that.
        Yeah, I will do some of that as well, so thanks also for your good
        questions.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Artem Daniliants:</p>
      <p class="mt-0">
        Thank you very much. And one thing, if I would do, if I were you, as a
        marketer, I think like a podcast about privacy on the web, that could be
        really cool. That could be really cool. Because people who are
        interested in it, you could get a lot of back links, from iTunes, from
        google directory and like in general, like what's happening, and the
        field is changing so quickly. There is always something going on. There
        is something to talk about and since you're already invested in the
        field and you're motivated, I think you'll be a good person to have
        something like that. So it's maybe something to consider as your next
        growth hack. All right. Thank you very much again Adriaan. It's been a
        blast. Thank you.
      </p>
    </PressMention>
  </div>
</template>

<script setup>
import PressMention from "../components/PressMention.vue";

const path = useRoute().path;
const slug = path.split("/").filter(Boolean).pop();
</script>
