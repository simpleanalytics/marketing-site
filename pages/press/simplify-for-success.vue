<template>
  <div>
    <PressMention :slug="slug">
      <h2>Automated transcript</h2>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (00:18):</p>
      <p class="mt-0">
        Hello everyone. Welcome to our podcast around simplifying for success.
        Simplification requires discipline and clarity of thought. This is not
        often easy. In today's rapid paced work. Environment, we've invited a
        few colleagues in data and information governance space to share their
        strategies and approaches for simplification.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(00:34):</p>
      <p class="mt-0">
        In today's episode, we will talk to Adriaan van Rossum, one of the
        founders of Simple Analytics. After the recent decision by the Austrian
        Data Protection Authority against the use of Google Analytics, many are
        searching for alternatives. I'm sure you'll find this podcast
        insightful.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (00:51):</p>
      <p class="mt-0">Hi Adriaan, welcome to the show.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (00:54):
      </p>
      <p class="mt-0">Hi, Priya. Thanks for having me.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (00:57):</p>
      <p class="mt-0">
        So tell me a little bit about yourself and how did you get started on
        Simple Analytics?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (01:07):
      </p>
      <p class="mt-0">
        Yeah, sure. So it was about four years ago that I started Simple
        Analytics, but before that, I had some experience as a web developer.
        I'm from the Netherlands now live in Amsterdam, and I always had an
        interest in building websites. I learned from people around me and I
        also learned that you could do a lot of stuff that is not super privacy
        friendly. And as a developer I think, and many other developers probably
        notice is a lot what the web is capable of. For example, when I started
        building websites, it was still possible to get someone's clipboard
        history. So you would copy paste something in a Word document, you would
        visit the website and that website could get your clipboard, so it could
        be very personal data. You copy paste everything.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(02:03):</p>
      <p class="mt-0">
        So this made me realise that, hey, if this is possible, how would it be
        for the end user? No one expects this, right? So then it started to be
        of an interest of how this all works, and then I basically started to
        have interest in privacy and what it entails, but then it was always a
        little bit on the background and didn't really do something in privacy
        that much, but I always had an interest in it. And then four years ago,
        it was in 2018, I needed to instal some analytics tech for a customer.
        And I was like, yeah, I don't really want to do this. I don't want to
        feed all this data to Google Analytics, so what should I do? What is the
        alternative? And I didn't really find an alternative that suited my
        needs, and then I realised maybe I should build it myself. So then I
        started building Simple Analytics, a super simple version at that time,
        and people already had an interest in it. There were quite some people
        that just wanted to know how many pages they had or how many pages were
        visited. So for them it was already providing value. And in the years
        after, we developed a platform quite a bit, and also GDPR made a few of
        those changes in the landscape that people actually need to use
        something more privacy friendly.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (03:35):</p>
      <p class="mt-0">
        So obviously after the recent Austrian data Protection authorities
        decision on Google Analytics use privacy friendly alternatives to Google
        Analytics, which maybe not four years ago, in my mind at least, I
        would've never thought about it till then You kind of just assumed that
        that's a default. So now it has become a lot more relevant and people
        realise that there aren't that many alternatives at all. So tell me a
        little bit more about what Simple Analytics does and how is it different
        from Google? I mean, I understand that it's more privacy preserving, but
        I was kind of fascinated to read some of your blogs in terms of you
        don't collect actual IP addresses, you don't collect a number of
        attributes that are default with Google, for example.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (04:39):
      </p>
      <p class="mt-0">
        Yeah, so there's quite a difference with Google Analytics and Simple
        Analytics, although we use it quite a bit to say what is simple
        analytics? We'll just say it's a privacy first alternative to Google
        Analytics. So people instantly get it, but there's quite some
        differences. For example, our interface is completely different. We have
        a one page dashboard versus a very complex dashboard. In Google
        Analytics, we are very lightweight, they're quite heavyweight, but
        there's also some things that are better to calculate if you track
        people that makes sense. So if you can track a person from page to page
        how long the session was for that person, how many pages they visited,
        which pages they visited. So that kind of information, you can't really
        gather without tracking people. So with simple analytics, we decided to
        like, Hey, we want to have a way that we at least can show the unique
        page views and normal page views, the time on pace, all that stuff
        that's still doable without invading the privacy.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(05:43):</p>
      <p class="mt-0">
        So for example, how we do our visitors is we check if the person came
        from a different website or came from the same website. If it's from the
        same website, then we know, okay, this is a non-unique page view. And
        with Google it's like a cookie that's placed or an IP address or a hash
        or something like that where they will track you for a longer period of
        time. And that's also one of the bigger difference with simple analytics
        and other competitors as well. Also privacy friendly competitors is most
        of them still use the IP address in a certain way. And I don't really
        think that's the best idea because if you still use it for one week,
        then we need to trust you on that and you can still track a person for
        that whole week or a day or something like that. And I think it's a bit
        of a grey zone to be in. And with simple analytics, you always want to
        be like a hundred percent sure this is legally accepted and you will
        never get any privacy issues with that. So we go for a different way and
        that's without any IP address or fingerprinting or tracking or
        whatsoever.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (06:58):</p>
      <p class="mt-0">
        So tell me a little bit more. So it makes sense that it is obviously a
        lot more privacy preserving and as a customer when you're browsing the
        site, when they're not fingerprinting you and they're not tracking your
        IP address, you feel a lot more safer. But having said that, if we,
        let's say have a website like ours where we don't have shopping carts
        and you're not doing complex analytics, all you're trying to do is to
        understand how useful your pages for your customers, this makes sense.
        But if I am, let's say a retailer and I am trying to understand bounce
        rates, I'm trying to understand abandoned card tracking or I'm trying to
        also do some cross target advertising and things like that, I mean
        without tracking IP addresses and without doing any of that, I can't get
        some of those things to work anymore. Pretty much I couldn't look at
        abandoned cards if I don't know who the user is.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (08:02):
      </p>
      <p class="mt-0">
        So we need to change our mindset a bit before we could do everything we
        wanted on the internet and track everything we wanted. And now there's
        regulations saying, Hey, we'll protect individual that visits your
        website. You're not allowed to do so anymore. And there are so many
        things that are not allowed to do anymore because of that. I think we're
        going in the right direction, but we really need to think differently.
        So do we need to collect this data? Do we really do something with the
        data? If we have collected it all, the kind of questions are very
        important to ask internally or with your team, like, Hey, is this really
        needed? And of course with e-commerce or something like that, it's very
        much based on tracking how is the flow going, how many people come in,
        how many shopping carts are filled, and stuff like that.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(09:03):</p>
      <p class="mt-0">
        So we need to be very creative in finding ways to still get those
        numbers but then in a different way and they will be less accurate. But
        that's a trade-off that we have to do with taking the more private path.
        And in the last few years we really didn't care about it at all. And I
        think if it was forbidden in that time, we would have developed so many
        different ways to get valuable insights in those key numbers. So it's
        just a matter of time. And then there's plenty of products to choose
        from and people are known to like, okay, we can't do this, but maybe we
        should do this. And then you find a solution to problems that you need
        answers for.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (09:50):</p>
      <p class="mt-0">
        So there are alternatives to simple analytics and Google. Would you want
        to talk a little bit about where you fall and how you compare and
        contrast against some of your competition?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (10:04):
      </p>
      <p class="mt-0">
        Yeah, I briefly said something about it that we are more in the green
        zone than in the grey zone, as in we're not European business, which
        makes it easier also for our customers to choose us because we need to
        follow local regulations and we need to have our servers within Europe
        as well. And however, we're different from different tools. It really
        depends on the tool, but I would say we are at the far end spectrum of
        privacy. So we take privacy a bit further than most of them. There's a
        lot of tools around owning the data, for example, that you are the data
        owner yourself with Simple. That's also the case, but we go one step
        further and we say it's not only that you own the data, but we want to
        be a hundred percent sure that you collect the data in a privacy
        acceptable way where you don't consent for. So that's also a difference
        with some tools and we always try to pick the best privacy solution
        within our reach that we can provide.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (11:18):</p>
      <p class="mt-0">
        So let's talk about this concept of data ownership. Our podcast
        listeners, we have a broad spectrum of people on how they sort of
        interpret data ownership. You obviously mentioned that with simple
        analytics, you are a service provider. So the company that sort of owns
        the data and it is their data. And then there are some privacy friendly
        products, which kind of start with that concept. But with Google
        Analytics, you don't own the data,
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (11:48):
      </p>
      <p class="mt-0">
        You don't own the data if you're using Google Analytics. Yeah.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (11:51):</p>
      <p class="mt-0">Why?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (11:56):
      </p>
      <p class="mt-0">
        Because you're basically giving them the data for themselves. Also, you
        sign some terms when using Google Analytics saying, Hey, we can use this
        data in other platforms, which in my mind means you can use it in Google
        Networks as well, which is something that really makes sense from the
        Google perspective. So they have this huge amount of data coming from
        all websites around the internet, which they can use to for their other
        products like Google Ads and Google search. So yeah, it's pretty clear
        that you don't own the data with Google Analytics because they use it
        for so many other things than the service they provide to you. And I
        think that's the whole problem. If services that are free, if you don't
        pay for our service, then the company needs to find a way to pay for
        that. So Google has found their way and simple chose to just charge
        money for it. So we don't need to have other ways to sell data from our
        customers so we can really say it's your data and we don't care about
        it. You can delete it, you can do whatever with the data you want.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (13:18):</p>
      <p class="mt-0">
        So in other words, you don't really use the data for anything. You don't
        further sell the data, you don't analyse that data, you don't process
        that data in any other way. So it's basically you are the service
        provider providing service to the customer.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (13:35):
      </p>
      <p class="mt-0">
        Yeah, yeah. And there's also customers that just use this for collecting
        data. So they say like, okay, we trust you guys. If collecting the data
        in a legal way, just send the data our way or they get the data out of
        our systems and then they process it themselves in their own tools. So
        that's also a way that people use Simple.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (13:58):</p>
      <p class="mt-0">
        And you mentioned that since you're a European company, the data is
        hosted in Europe and so you don't have to worry about cross-border
        transfer of data, which has been one of the issues with Google
        obviously. Tell me a little bit more about your product being light. How
        does that make a difference to a website when it is lighter compared to
        what Google Analytics provides?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (14:28):
      </p>
      <p class="mt-0">
        So there's basically two ways to look at it. So you can say the website.
        So you can say the website loading time is important, so how fast your
        website loads for the visitor. And it can also be lightweight in the UX
        device. So we have a lightweight tool so it's easy to understand and the
        dashboard and stuff like that. But the first one, the loading time is
        quite important for loading your website. You want to score certain
        points basically on how fast your website is. If it takes a second too
        long, then maybe someone leaves your website and you lost that customer.
        So you don't really want to have that. So you want to have a performance
        website and Google provides some tools to check if your website is
        performing. They use certain indicators, they call it core web vitals.
        And that's basically a few ways to calculate if your website is still
        fast.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(15:31):</p>
      <p class="mt-0">
        And they say they'll use these metrics also in their search algorithms.
        So you probably perform better if your website loads faster, you perform
        better in the Google search ranking, which is great. So they provide
        some tools for that. For the end user, it's nice because you have a fast
        website that shows up on top insert. We did some tests with simple
        analytics on a website and then with Google Analytics, and then we
        compare those two. And the funny thing is that you can get a hundred
        points for your website. So without any script, we had 98.2 points, so
        that's without any analytics. And then we added simple analytics and
        then we had 98.0, so there's only 0.2 difference. And then we changed
        simple analytics to Google Analytics, and then we got like 88.9. So
        that's basically 10 points below the highest number. So you can see that
        there's a huge difference when using Google Analytics versus Simple
        Analytics just based on their own algorithms and their own core web
        vital indicators. So that, yeah, it was quite interesting to see, and
        that's what we mean when we say lightweight. It almost has no impact on
        the performance of your website while Google Analytics has a way bigger
        impact your website.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (17:03):</p>
      <p class="mt-0">
        So another topic that I kind of want to drill down further in. So you
        don't track IP addresses, but you can tell maybe not with precision that
        let's say Priya visited your website from Houston, but you could tell
        that Priya visited somewhere from Texas or how does that work? Can you
        tell us, you said you have to make some compromises, but it would be
        nice to kind of understand how much of a compromise it is?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (17:37):
      </p>
      <p class="mt-0">
        Yeah, exactly. So we will not know if we have visited three times. We
        also don't know if the same user visited three times. What we can see is
        that a user is from a certain country, so the country is something that
        basically the browser sends the time zone of the user to the website.
        And that's the part we collect. So we collect the time zone from the
        browser so we don't have to touch the IP address. So then the time zone
        could be anything. For example, Europe, Amsterdam is a time zone. So
        then in our system we all match like, oh, this is from Amsterdam, well
        then it's in the Netherlands. So then we still know it's a person from
        the Netherlands. We don't know anything more from that person, just that
        their time zone was set to the Netherlands. And this works quite well
        because every country has one or more time zones, and most of the time
        zones of all the machines are automatically set up.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(18:54):</p>
      <p class="mt-0">
        So if you travel, your time zone changes with you. This is basically the
        same as on your phone. You have the time and if you travel, the time
        changes with the location you're at. And then also the time zone changes
        in the browser. So that's basically the way it works, and we think
        that's the great approach. But at the same time, I'm also not, what also
        could be a solution is that you get the IP address, the time that a
        person visits your website and you just check like, Hey, is this IP
        address from a certain country? And then you just drop the IP address,
        but you still have the country. And I think that's still fine because
        you're not saving the IP address and you're just matching it with a
        database that's already in your system. So it's not that you store the
        IP address ever, it's just that you match it with a database. I think
        that's also a good solution. But yeah, again, we are a little bit on the
        safe side, so we use the time zone and we don't touch the IP address.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (20:01):</p>
      <p class="mt-0">
        So in that sense, I mean, I'd like to kind of make it relevant to a US
        user. So who's listening to this podcast? So in this case, you're
        probably going to be able to say that Priya visited in the central time
        zone, but you may not be able to pinpoint whether I'm in Chicago or I'm
        in Texas or I'm in Illinois or Texas. So you can't give me a state
        specific or a city specific location information, but you can give me an
        approximate saying that it's US. And in the central region?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (20:32):
      </p>
      <p class="mt-0">
        Yeah, I can say it's in the US, that's what we'll store. So not even the
        central region. We'll just say US.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (20:42):</p>
      <p class="mt-0">
        Oh, okay. Sounds good. Any other closing thoughts that you would like to
        share?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (20:49):
      </p>
      <p class="mt-0">
        Well, I think the whole privacy thing is now really, really starting up.
        And you see that we briefly touched it with Google Analytics, that they
        are already forbidden in a few countries in Europe. And I think I really
        feel it is just the beginning. So if businesses still think like, oh, we
        can probably wait a bit, it's just a matter of time that you really have
        to do something about it. So I would say that for most businesses it's
        very important to already look at a few solutions because it takes a
        while before you implement. So probably you want to know what data you
        get, you want to test a few tools. And yeah, I think it's important to
        take a step now because it's only going further and more private privacy
        minded. There's many regulations that are being created in the EU as
        well for even further down or more privacy for the individuals.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(21:53):</p>
      <p class="mt-0">
        So yeah, it's just a matter of time that you can't use the tools that
        you are already using. So better get familiar with the tools that you
        can use and try to find a mindset that allows to get numbers in a
        different way without getting the numbers from one specific version so
        that you don't see, hey, pre-app is this website time three times, but a
        person named X whatever, visit this website three times. And for the end
        user or for the analyst or the marketeer, it's all fine. They don't care
        about the name of the person. So if we take little steps into that
        direction, I think we'll be better for every visitor.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (22:41):</p>
      <p class="mt-0">
        No, I totally agree with you, but I'm just going to speak from a
        perspective of an analytics person or somebody within the corporation
        making these decisions. Last 10, 15 years, we've sort of evolved into
        this model, not purposefully, but it just sort of happened because it's
        possible. And there were a number of things that we never considered. So
        there was no alternative to Google Analytics. So nobody was thinking
        about data ownership. They were just thinking in terms of, oh, I could
        just do this and now I can get all this information about my website.
        That's pretty interesting. Right, exactly. And sometimes you also have
        this notion that I could collect all this data. I'm not sure whether I'm
        going to use it, but maybe I should keep it because I want to figure out
        how I'm going to use it. And so like you mentioned, I may never be
        interested in knowing Priya visited the website.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(23:39):</p>
      <p class="mt-0">
        I may be only interested in aggregate numbers, but I don't know what I
        want. The decision to collect doesn't quite correlate with the decision
        to use. So the idea is let's collect as much as we want now because we
        haven't made decisions on what we are going to use. And so when you
        start with a usage, you may realise that you have collected, and this is
        actual statistics that I'm giving you, which is about 80% of the data
        that people collect, they don't use or they dunno how to use, or even if
        they know how to use it, they don't trust that data because it's either
        outdated or it's partial or whatever. So they end up using about 20%,
        but they don't have insights into the 20% they use. So they make
        decisions that are very broad because it makes more sense, it's safer.
        So privacy was never a consideration. And it has taken all these
        regulation, a lot of awareness to start thinking. I think most of us
        have dual roles, and I'm saying this also when I'm a customer, when I'm
        being tracked, I don't like it, but when I am an analytics person, I
        just worry about what if I need this information and I somehow made the
        wrong decision. So I don't want to be the decision maker. So in some
        ways it takes 15 years of going a certain path needs to be, you have to
        unwind and now think differently. It takes time.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (25:21):
      </p>
      <p class="mt-0">
        Yeah. And it takes a lot of courage as well because you will probably
        make a few mistakes along the way, right? Oh, you think this will answer
        my question and then later you realise this didn't answer my question,
        so then you'll miss some information. But I think it's important to get
        out of this mindset of indeed what you're saying, let's collect a
        hundred percent and then see what we need because that's not a viable
        solution anymore. It takes time to set also within yourself. But I
        think, yeah, we're getting there.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (25:58):</p>
      <p class="mt-0">
        Well, thank you so much for your time, Adriaan. And of course, we need a
        lot of solutions. So most of the time, I mean as privacy professionals,
        when I talk to customers and we're sort of thinking about alternatives,
        when you don't understand the alternatives, it's much more difficult to
        figure out a path forward. It just feels like there's so many changes,
        but I don't know what the new normal should look like. And so in some
        ways, having more privacy friendly technologies also provides you
        alternatives to think about and where in the spectrum somebody wants to
        select whether the most friendly one, like you said, in the green zone
        or something in the grey zone, that would be their choice to make in
        their journey. But at least being aware and knowing there are choices is
        a step forward.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (26:58):
      </p>
      <p class="mt-0">
        Yeah, exactly. Exactly. And there's more and more choices popping up,
        right? It's also market. So yeah. That's great. Yeah.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Priya Keshav (27:06):</p>
      <p class="mt-0">Thank you so much.</p>
    </PressMention>
  </div>
</template>

<script setup>
import PressMention from "../components/PressMention.vue";

const path = useRoute().path;
const slug = path.split("/").filter(Boolean).pop();
</script>
