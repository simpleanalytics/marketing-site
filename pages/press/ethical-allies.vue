<template>
  <div>
    <PressMention :slug="slug">
      <h2>Automated transcript</h2>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (00:02):</p>
      <p class="mt-0">
        We are ethical allies, and this is the podcast from the Ethical Commerce
        Alliance, the Industry Network Concerned with ethical challenges in
        e-commerce. We strive to support businesses in implementing ethical
        practises such as data protection beyond GDPR. We connect retailers in
        tech, academia, nonprofits, and activists to explore how ethical values
        make a difference to economic success and foster a thriving digital
        society. We speak with people that connect the dots between unlikely
        disciplines like computer science and law, or statistics and psychology.
        Everything's connected and reveals what makes us human. Today I'm
        speaking with Adriaan van Rossum, founder of privacy first analytics
        company, Simple Analytics. Adriaan is based in Amsterdam in the
        Netherlands and runs simple Analytics together with Iron Brands who is
        taking care of the marketing part when a Adriaan is responsible for the
        product of the company. Hello and welcome a Adriaan. Good to have you on
        the show.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (01:11):
      </p>
      <p class="mt-0">Well, thanks a lot for having me.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (01:12):</p>
      <p class="mt-0">
        Thank you for being here. Would you like to give a brief introduction of
        who you are and tell us a bit more about yourself?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (01:18):
      </p>
      <p class="mt-0">
        Yes, a 100%. Yeah. So I'm indeed the founder of Simple Analytics. I live
        in beautiful Amsterdam, as you said, and yeah, I've done many things,
        but yeah, the things next to business, I always like to talk a bit about
        it. I love to do kite surfing. I love to make our home smart. My
        girlfriend doesn't love it that much all of the time, but yeah, I love
        to do a lot of sports and stuff like that. But yeah, I also love privacy
        and that's why I started Simple Analytics.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (01:59):</p>
      <p class="mt-0">
        Tell us more about this. What is your professional background and what
        gave you the idea for Simple Analytics?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (02:05):
      </p>
      <p class="mt-0">
        Yeah, it started when I was 16. At the age of 16 I started to develop
        websites and my brothers, they showed me how to do it if I had any
        questions and I got a real big interest in building those, and that
        never really stopped. I started studying, but yeah, that was not really
        my thing. So after literally nine studies, I decided to finish one fast
        and then just continue with things that I loved and that was building a
        business. So I started a few businesses along the road and eventually I
        was with my girlfriend in the Canary Islands. It was in, I think it was
        rif, and I was there also a bit working for a client of mine. I did some
        freelance work and I needed to instal Google Analytics, and I was saying
        to her, yeah, I don't really feel comfortable by installing Simple or
        installing Google Analytics all the time. And then she said, yeah, you
        build projects all the time, so why don't you build something for that?
        And that's where I started. So basically three months later, the first
        version of Simple Analytics was born, and then I already got some paying
        customers and I was like, oh, this is really something that people are
        interested in. And it was also the same year that the GDPR came into
        effect. So it was 2018, so the timing couldn't have been better. But
        yeah, that's a bit of a background of why I started Simple Analytics.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (03:45):</p>
      <p class="mt-0">
        That's a great story. Very innovative and very brave just to do things.
        I love that approach and really to be passionate about something and
        going for it, this is not what everybody would do. So I'm really into
        that, but tell me more. Why privacy? Why did you go on Google Analytics
        and wonder about and reflect on this? Because so many websites are using
        it without thinking about it, or at least they're using it anyway
        because it's convenient, it's cheap, it's there. What was it that really
        made you reflect on this, that this is wrong, and why was this an
        invasion of your privacy?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (04:36):
      </p>
      <p class="mt-0">
        Yeah, this also goes back quite a bit. I think also to the age of 17 or
        something. When I was building those websites, I started seeing, I saw
        the limitations of the web and especially limitations regards to
        security and privacy. And at that time there was not really so much
        going on regarding privacy. Everything that you could think of was
        possible on the web.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(05:07):</p>
      <p class="mt-0">
        So there was this little bug in the internet explorer that I love to
        talk about is the way that you could copy the clipboard of a visitor. So
        let's say you are in your email client, you typing an email, but you
        want to copy it to a different version. So you copy the text and you
        paste in a new email and in between you visit my website or after, and
        you visit the website and then this website could copy the stuff that
        you had on your clipboard, which is a massive invasion of privacy at the
        same time. Also a security issue. I would say
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (05:44):</p>
      <p class="mt-0">Absolutely, I had no idea, I didn't know about this.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (05:47):
      </p>
      <p class="mt-0">
        This was possible, and I learned about this because I was developing in
        the web. So yeah, you learn those tricks of the trade. So that's also
        where I started thinking, if you can do this, what else can you do?
        There's so much possible, and I think that's a big advantage that you
        can have as a developer because what is technically possible. So then
        you probably know what other businesses can do with your visits or with
        your data or with your behaviour on the web. And that's also where I
        started doubting Google and Facebook and those platforms with all the
        buttons that are basically massive trackers of user data and how you
        visit the web. So at that time I started to think about it a bit more,
        but I didn't give it that much thought, but I kept it as an interest for
        the whole time. And then more and more news came out of big data
        companies, I think it was a few years ago. And then yeah, it really
        started to get to me and I was like, Hey, why not start something that's
        really good for the planet and for the people on it and make something
        that's better for it?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (07:16):</p>
      <p class="mt-0">
        Were you aware of all the consequences that it may have other than when
        the example that you gave is a very drastic invasion of privacy,
        obviously, and everybody knows, okay, when people can read my emails
        without knowing me about it and their sensitive information in it, the
        negative consequence is there obviously. But using Google Analytics and
        the long-term consequence negative effects, it can have that. It can
        have effects on who owns and access your data, accesses your data, and
        who can have potentially access to your data, very sensitive information
        that it can have negative impact on your next job application or a loan
        that you apply for or an apartment or renting out a new apartment,
        things like that. Were you aware of that at that time or because I'm not
        sure if there were the stories around at that time, but I would like to
        hear from you if you dug deeper.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (08:25):
      </p>
      <p class="mt-0">
        Well, not around the time when I was 17, there was not really, I'm now
        33. There wasn't really a talk about that. But yeah, I think those
        profiles, I think that was the first time that I really heard about,
        okay, there is something being done behind all those websites. So
        profile building was something that Facebook also did, but also Google
        of course, and it wasn't that much that it would end up with a potential
        landlord that could check that information. It's more about what happens
        when it goes wrong or comes in the hands of someone that wants to do
        evil. And I think that's for me, the main driver for privacy is that if
        it's in good hands, it's probably not a problem. If it's in your own
        hands, it's also not a problem. But if it's in the hands of someone that
        wants to do bad, then you have a problem.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(09:32):</p>
      <p class="mt-0">
        So it's not that much related to really seeable things. Like for
        example, copying an email is something that everybody can understand
        what is happening, but building a social profile, what is that? What do
        you do then? Or how can it help you? Those questions are way more
        difficult to understand, and I think it's never completely clear how
        those profiles can be used, for example. But for me, it's more important
        that we say, okay, all this data, I gave it to a platform. So it's my
        data, and I think that's what the GDPR and lower regulations in the
        world are trying to solve, and I think that's the right way to go.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (10:20):</p>
      <p class="mt-0">
        I agree. Yes, I think so too. Thank you for this, Ian. So let us go back
        now to Simple Analytics. Tell us how it works, what features it has,
        what makes it privacy first, how you go on about this, just brag about,
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (10:43):
      </p>
      <p class="mt-0">
        Well, I love this part. So when I started Simple Analytics, it was even
        more simple than it is now. So we had a long way to go. So it's almost
        four years, I think September somewhere, or actually I think it's in
        three days or four days. We are obviously four years old.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (11:07):</p>
      <p class="mt-0">Oh, congratulations.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (11:08):
      </p>
      <p class="mt-0">
        Thank you. Thank you. We'll get some champagne somewhere. But yeah, so
        it started with a very simple chart. So the chart showed the amount of
        page views, it showed a few tables with the referrals pages where people
        are on in the countries, and that was already something that a lot of
        people enjoyed using. But of course we got a lot more customers and we
        also asked about those or asked those customers like, Hey, what features
        do you want? And we have a public roadmap so people can vote on certain
        features that they want. So we are adding way more features every time,
        and basically you can do as much as you can do with Google Analytics
        except for the tracking part. So there's a few parameters or metrics
        that Google Analytics can calculate based on tracking. So for example,
        an important metric from Google is bounce rate.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(12:17):</p>
      <p class="mt-0">
        You need an amount of sessions that are on the website and then you can
        say, okay, this is the bounce rate with sim tics, we can't do this, so
        we need to make clever ways to still get valuable information. So one of
        those ways is, for example, the time on page we try to be a bit smarter
        than Google is. So for example, when you visit a webpage in Google and
        five minutes later you go to a different website in a different tab, and
        then you are, I don't know, watching Netflix for an hour and you go back
        to this first website, Google's things that you visited this website for
        one hour and five minutes, which is obviously not true because you're
        watching Netflix. So what we do is then we detect if the webpage is open
        and if someone hides the webpage. So by going to a different tab, then
        we just stop the counter. So then we know, okay, someone is not looking
        at the page, it's not included in the time on page. And there's a few
        other things.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(13:27):</p>
      <p class="mt-0">
        The choices that Google makes with Google Analytics is sometimes a bit
        weird, but we have to live with it because people compare us with Google
        Analytics. So we need to do a bit of learning for our customers to,
        let's say for example, those time on page metrics. That's something that
        in Google is way higher. Yeah, that's obviously higher because they
        calculate also when you're not on the page. So there's some stuff that
        you need to learn your customer, like, Hey, you see this number now, but
        it's more correct than the one of Google. And once you say this to
        people or you show it in the dashboard, they say like, oh yeah, this is
        indeed way better. Why isn't Google doing this? And stuff like that. So
        it's also really fun to have this challenge of how can you still get
        valuable metrics without tracking people?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(14:25):</p>
      <p class="mt-0">
        And I think that's also one of the Unix selling point of simple
        analytics is we never track people and a lot of our competitors are
        doing it for only one day. But yeah, I don't believe that the GDPR is
        saying anything related to like, Hey, it's okay to track a person for
        one day and if you drop the cookies then it's fine. No, it's just about
        not tracking at. So exactly that's how we do it at least. And that's a
        bit odd that we are the only one doing it like that. We've seen one
        other business in the last few years that did it as well, but it didn't
        became that popular. So yeah, we are doing it a bit different, I would
        say. And yeah, what is also a challenge for us is keeping the balance
        between adding new features and keeping it simple because we love what
        people say about a tool. They just go to a tool and you say, I'm not
        overwhelmed with all the data, I just see a few numbers. Those are
        important to me. And I see if my blog post is working and I can just
        close the tab and I'm not overwhelmed. And I think that's one of the
        biggest perks of Simple Analytics is that it's simple to digest and it's
        still super privacy, privacy friendly.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (15:47):</p>
      <p class="mt-0">
        I think it's sometimes the hardest part is to keep it simple and
        straightforward a 100%, especially when so much and when all the things
        that are possible and you want to offer the best and now most features,
        but you want to enable the customer to use what they want to need and
        require on the other side, keep it as simple and straightforward as
        possible. I think it can be hard to find a balance, but
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (16:22):
      </p>
      <p class="mt-0">
        Yeah, it's also fun. You can also build it for two groups of people, for
        people that really want to have the simple version and people that want
        to do some more advanced stuff. And you can in the UI, hide the advanced
        stuff from the normal user. And then, I don't know, if you click a
        button, you'll see more options, for example, a little thing, but then
        the UI is still simple to digest, but advanced user can still search
        through all the data or filter on data or stuff like that. So I think
        it's a challenge to make it work, but it's super fun to see that it
        works for both type of people.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (16:59):</p>
      <p class="mt-0">
        I think it's odd gets something to do with the business size, larger
        businesses who want more insights, who might also have a larger budget
        to spend on this, and small web shops or marketplace who still want to
        see some who's visiting their site and not who specifically obviously,
        but a counter how many per day and what they're doing there just to get
        an idea what are my best products? And
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (17:35):
      </p>
      <p class="mt-0">
        Yeah, I think that's also the last group of people to switch is
        e-commerce businesses. They rely so much on conversions and what
        campaign works best and what still can be linked to what campaign. So I
        think for them it makes the most sense to not obey the law. I would say
        it's not good, but it makes more sense for them than for an information
        website of the government, let's say.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (18:05):</p>
      <p class="mt-0">
        Yeah. Which leads me directly to my next question. Why would I as a
        business choose your service over free analytics tool, especially when
        I'm working on a tight budget? What is, apart from all the USBs and the
        advantages that you already talked about, what is behind it? How do I
        turn to creating a willingness to buy Simple Analytics to spend money to
        increase my budget for this?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (18:50):
      </p>
      <p class="mt-0">
        Yeah, so first of all, there's the law. So if you want to obey the law,
        there's less choice left. So for example, Google Analytics is being
        blocked or forbidden by the GDPR based on the data that's being
        transferred overseas, the personal data. And a lot of governments are
        already saying, or privacy agencies are already saying, Hey, it's
        forbidden in our country. So every country in the EU will probably
        follow. We already have Austria, France, Italy, Denmark, not completely.
        Denmark is then forbidden the Google workspace. So it is getting there.
        So if you want to do something legal, then you need to pick a different
        option than Google Analytics. So then the next question is why should
        you pay for a service when there's also free services? And yeah, if you
        don't really care about the data of your visitors and you don't really
        care about privacy at all, then go for a free version because free
        versions are fine if you don't really care about that stuff.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (20:14):</p>
      <p class="mt-0">
        Yeah, I think you pay with your customer's data in the end.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (20:17):
      </p>
      <p class="mt-0">Exactly.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(20:19):</p>
      <p class="mt-0">
        Yeah. So they need some data. A great example is Google Analytics data
        being used for Google Ads. They can internally use the data from your
        visitors of your website. So for them, it's a great amount of data that
        they can use for their ad business. And their ad business is I think 95%
        more or less of their revenue. So for them, it makes a lot of sense to
        have a free product that's used by so many people for something else in
        their business to help them with. But as a customer, I think you have
        the option to choose something that's good for your visitors or not.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(21:08):</p>
      <p class="mt-0">
        Again, if you don't really care about your visitors, then it doesn't
        really matter what you do, but if you do care about your visitors and
        you do care about your own brand and you do care about how your brand is
        perceived by different customers or visitors, then it makes sense to
        make some or choose something in favour of them. And so yeah, you
        already said it. If it's free, then you are the product. So someone else
        makes money off the free product. So yeah, that's definitely an issue.
        And I also think it's really important that you own the data. So it's
        your visitors, it's your visitors, so why would you give that
        information to some different party that goes on with that information
        and does whatever they want with it? I think that's something that you
        can't really sell anymore within your team.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (22:05):</p>
      <p class="mt-0">
        No, and it's also your responsibility. It's a responsibility towards
        your company and towards your customers too.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (22:13):
      </p>
      <p class="mt-0">
        Yeah, yeah. So if you take your business seriously, you'll pick
        something that is probably paid and then there's still a lot of options
        to choose from. So do you really care about a lot of privacy or do you
        care a little bit about privacy? There's different grades in that area.
        We also wrote a blog post about the five or four or five most privacy
        tools. So people can pick a bit or select a bit on the scale of privacy
        and features, because that's usually the difference, the amount of data
        points or metrics that you collect at one side and the other side, the
        much privacy you want to get. And I think Simple Analytics is definitely
        very much on the scale towards privacy and less towards the amount of
        data points. One feature for example, is also that you can disable
        certain metrics. So let's say, oh, I don't want to get the user agent, I
        don't want to get the browser version. I don't want to get, let's say a
        session id. You can all limit those and say, okay, don't collect those
        at all.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (23:26):</p>
      <p class="mt-0">
        So with all your work that you do, it can be a huge challenge sometimes
        from the business developing side, but also from the feature and product
        side to keep a balance there and to foster sustainable growth and
        amplify your message that you're sending with building a company and a
        product that you do with Simple Analytics. So with all the challenges
        that are lying ahead, who do you turn to for advice?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (24:10):
      </p>
      <p class="mt-0">
        And I like that question, and to be honest, I have a few different ways.
        I have close friends that I have some, let's say I had a wedding two
        weeks ago from one of my best friends and I gave him a speech and his
        wife of course speech was also about being ethical or a short part of
        it. You don't want to be speaking about that subject on a wedding all
        the time. But one of the things that I go to him for is ethical advice.
        And I told him, you are one of those persons that we'll say if you're
        bullshitting them and you need those people because if I'm saying like,
        Hey, I want to do this with my business and I think cookies are kind of
        need it, and I would go to him, he'll probably say, yeah, that's the
        whole reason of your business. That's a bit silly to suggest that or
        something not as black and white as cookies versus no cookies.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(25:21):</p>
      <p class="mt-0">
        And I think you need those people in your life that you can connect with
        on a level that they say, okay, what you're saying right now is
        incorrect or this wouldn't be you from my perspective. And I think those
        people are amazing and for business advice in different areas, it's
        really good to surround you with people that are further than you. So if
        some people in your life start a group, I don't know, WhatsApp group or
        Signal or Telegram, connect with them and make sure you can ask them
        your questions that arise in your business because they already have
        done a business before and they are very skilled at it. So learn from
        those people. So always get a few people in your life that are already
        further than you regarding a business and ask their advice. And then
        still, it's still advice. So the big challenge with advice is what are
        you taking or what advice are you willing to follow up and what advice
        are you not following up? That's still your own choice. But yeah, I
        think it's good to get advice from people that are ahead of you.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (26:41):</p>
      <p class="mt-0">
        Yes, I agree. You also with Simple Analytics only have just joined the
        Ethical Commerce Alliance, our growing network as a partner, which we
        are thrilled about. So do you expect to receive advice there as well?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (27:05):
      </p>
      <p class="mt-0">Yeah, that might happen. Yeah, a 100%.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (27:07):</p>
      <p class="mt-0">
        In exchange with other partners or in the messages and blogs and
        activities that we share, the upcoming panel discussion in October.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (27:17):
      </p>
      <p class="mt-0">
        And I think it's good to surround you with businesses that are also a
        bit similar because there's so many different ways you can run your
        business, and sometimes it is just one comment from someone saying like,
        Hey, why don't you do this? And then you think, oh, that's actually a
        great idea, and then you do it. And that happens more with similar
        businesses where at least the ethics or the values are aligned.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (27:47):</p>
      <p class="mt-0">
        For me, it's sometimes not even, oh, that's a great idea, I can pick
        that up. But sometimes it's just exchanging with people talking about,
        well, in the field of data ethics and privacy, everything about data of
        ethics and privacy and just exchanging news in-depth knowledge sparks my
        creativity usually. And to find inspiration in exchanging with people on
        certain topics like talking with you or all the podcasts that I did have
        funded amazing, all the information that people are so willingly share
        all my guests that I had, I'm so grateful for this and hope that our
        audience, our listeners will find some inspiration in this too. And
        yeah, this is what I think what also does creativity is all about
        speaking and making. It's not reinventing the wheel, but it's picking up
        a new idea that is new to you and making it your own style and your own
        way. A bit like what you do with Simple Analytics, with having this
        itch, this concern, this itch just scratched the concern that you have
        and think like, no, we really need to do something about this. And you
        just sat down and develop something out of nothing,
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(29:30):</p>
      <p class="mt-0">Which is amazing.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (29:31):
      </p>
      <p class="mt-0">
        Yeah, I think it can be inspiration for many as well to just see you can
        do something that's still ethical and you can still make a profitable
        business from it. Usually something that's being seen as, oh, but if
        you're ethical, you will lose money. That's not always the case. You can
        also be ethical and make it your business.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (29:57):</p>
      <p class="mt-0">
        No, exactly. And this is what we're doing in the ethical commercial
        lines too. We put ethics at the top of the agenda of everything because
        this is what we see too, that ethical considerations are thrown
        overboard when looking at the budget, the first thing that are thrown
        away. Why? Because they think, or many people or businesses tend to
        think that this is something they can avoid or that they don't stress
        the importance because I think oftentimes it is overlooked by long-term
        negative effects it can have in the case of analytics tools and the use
        of cookies and trackers and the whole privacy issue, I think it is
        easily overlooked that spying on people, tracking people without their
        consent or even sometimes without their knowledge erodes trust. And how
        do you want to convince people to buy from you when they don't trust
        you, when they cannot trust you or when they have concerns about what
        happens to the data.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (31:21):
      </p>
      <p class="mt-0">
        And the more people that ask those questions to those businesses as
        well, the more customers ask those questions, the more those businesses
        will see it's important
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (31:35):</p>
      <p class="mt-0">And the more will adopt to that, I think.</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (31:36):
      </p>
      <p class="mt-0">
        Yeah, exactly. Because sometimes you miss a bit as a business, I guess
        the need because the customer is not asking for it. And I think if a
        customer is more vocal about it, then that would help making a case
        within the business to make it more privacy friendly.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (31:56):</p>
      <p class="mt-0">
        But for this, the people need to know the individuals, the customers
        need to know what's happening, need to have a certain awareness. For
        now, the cookie banner are designed not for people, but just for the
        businesses to be able to comply with the baseline GDPR, but no one can
        read them and no one has to read them because they don't give you the
        full picture or what happens to your data in the end. Also, they are
        written in a very legal way, so it's not really understandable. But what
        it means is that individuals are left alone with their privacy because
        privacy is a private matter, but I think they're left to deal with it on
        own without being able to find lots of reliable information. This is
        currently changing. We see a lot more being talked about it, we talk
        about it. But if more businesses offered trustworthy solutions, how can
        bear standards be created more easily and understandably, and raising
        more awareness for the negative consequences of privacy violations?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (33:05):
      </p>
      <p class="mt-0">So how can we avoid or show the negative consequences?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (33:11):</p>
      <p class="mt-0">
        Yeah, I mean, I think we, people just need to know better what's
        happening to their data. In order to be able to make better decisions.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (33:21):
      </p>
      <p class="mt-0">
        Yeah, it's funny, the cookie banner, for example, is one of those ways
        to show what's going on, but it's more of an annoyance to everybody than
        that. It's really helping people. Now we know that cookies are being
        set, but basically we know that every website is now selling cookies and
        you have an annoying cookie banner with everybody, or I know 70% of the
        people clicks Yes, because the no is so much hidden.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (33:47):</p>
      <p class="mt-0">
        Exactly. Yeah. But I think we can just do better if we, Simple Analytics
        does avoid this and avoid the use of trackers. And so we have a lot less
        cookie information. Then you just need to tell the visitors of your
        website to what cookies are in place and what they're used for, which
        can be done in three, four simple sentences that is understandable to
        everybody. And then you can just click, okay, or I accept this very
        simple and straightforward and just getting rid of all that data and all
        the trackers.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (34:31):
      </p>
      <p class="mt-0">
        Yeah, there's definitely a lot to gain there, and I think we'll get
        there eventually. But what it already did is that so many people are now
        talking about cookies or about the cookie banners and about tracking,
        and before no one was really aware of that. So I think regarding that,
        it really succeeded in getting more attention to itself. I think that's
        great. I think that the next step can be that we don't really want a
        cookie bench anymore. As a business, we start to think about, okay, how
        can we do our business without those annoying cookies? And I think more
        and more businesses are doing that. We see a lot of customers in also
        weird, not to say weird, but in areas where you don't really expect
        because you would expect a government or you would expect a lawyer
        organisation or those customers when they sign up, it makes sense.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(35:37):</p>
      <p class="mt-0">
        But if a business, like a car lease business or a Gamble website, those
        are also customers. And that's something where you think like, okay, why
        is that? So if we ask that, then there are some awareness within the
        company and mission saying like, Hey, we really want to have the best
        products for our customers and our visitors, which means that we also
        don't track them. And I think that's the way to go if business see those
        values, see the value for their own visitors, and also they're very loud
        about it. They share it on the website in the filterer, you can read
        their statement about what they think is important for their visitors.
        So they really make it something very positive. And then as a visitor,
        you see those badges or see those sentences and you think like, okay,
        they really care about me as a business, so I would rather do business
        with them than with something else.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(36:42):</p>
      <p class="mt-0">
        At the same time, I think a lot of people are also just buying something
        without really thinking. And those customers or those visitors, I don't
        think they will change a lot in the foreseeable future, but for that, we
        have regulations. So we really need to change those companies forcibly.
        And some companies already take the lead and start doing it, which is
        awesome because if you're the first, you are taking the bigger market
        instead of if you do it at the end and you are forced to do it, then it
        doesn't give you any positive PR like it will do when you start.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (37:29):</p>
      <p class="mt-0">
        No, I think the competitive advantages and the reputation go hand in
        hand. Speaking of regulation, and this will be my final question. In
        recent case in Denmark, Anand and retailer was fine by data protection
        authorities for failing to delete a customer account, which the customer
        had frequently requested, and then turned in the end, turned to the
        Danish data protection authorities who in turn back to the beginning
        find the retailer. So when I read this, one thing that I first noticed
        is, or that first thought like, okay, there are ways to fight back
        reported reporting it to the authorities can have an effect even for
        individuals.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(38:31):</p>
      <p class="mt-0">
        And the other thing that I would like to ask you about how, I mean, this
        is one case in many, I mean, I think I personally have more than one
        story to similar like this, where I had problems of having my accounting
        leader, having my data deleted from someone. I never gave consent to
        using metadata in the first place. But this happens so often, and there
        are numerous reasons of failing to do this. One of the things that I
        suspect has happened is that a lot of plugins and a lot of analytics
        tools were in use. Who in turn had access to that customer data and made
        use of the data. And I think this was the problem, I think, I don't know
        for sure. So this isn't the assumption that I made that this made it
        next to impossible for the retailer to delete that data completely and
        forever. So I would like to ask you, what do you make of that? And if
        you had a customer or maybe you have or people or businesses interested
        in acquiring Simple Analytics, what do you recommend? How do you speak
        with them about this issue and how can we avoid this?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (40:12):
      </p>
      <p class="mt-0">Avoid it as a business or as a customer?</p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (40:15):</p>
      <p class="mt-0">
        No, from the business perspective, if you from Simple Analytics had a
        potential customer or customers with a similar issue or similar problem
        say like, okay, we want to avoid this in the future, what can we do or
        how do you deal with this?
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (40:34):
      </p>
      <p class="mt-0">
        With Simple Analytics, it is easy because we build our own software and
        we are able to build our own software. So we are really the owners of
        the data. So the data of our visitors, of our customers and the visitors
        of their customers, the visitors of our customers, they are all stored
        within the Netherlands on our servers. So we have a few servers, they're
        all encrypted, and there is where the data is of our customers. So if a
        customer says like, Hey, I want to delete my account, it's just a push
        off the button, and we start deleting their data. And it's for us a
        fairly simple process because we are the owner of those servers. So the
        services that we use, and I think if you, for example, have a web shop
        and you have an SEO, you have a sales plugin, you have social plugins,
        you have so many different plugins that you have no clue what is really
        happening in those plugins.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(41:45):</p>
      <p class="mt-0">
        I think it's the business owner that first need to evaluate, okay, what
        tools are we actually using and how much value does it provide? Does it
        provide a lot of value? Check what's going on in those tools? And if it
        doesn't say, just email them and ask them like, Hey, how do you handle
        personal data? You also have the DPA, the data agreements for that. But
        I think it's more important to ask you yourself the question, if it's
        not needed or not critical, just remove it. It's probably better to not
        have that plugin if it just adds a little bit of value. So make sure
        that you use as less services as possible and try to find those
        businesses that are open to privacy. And there's many really have the
        options. You can either choose already the continent. So if you go for
        Europe, you know that the rules here are a bit stricter.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(42:53):</p>
      <p class="mt-0">
        So a European company is probably better regarding privacy. Make sure
        that if a customer contacts you about deleting something, that you will
        do everything in your power to delete it. And we also sometimes have a
        customer saying something very threatening like, Hey, if you didn't
        delete my data and you still have this email, and then we show them we
        don't have this email, and now you're sending us more data, so now we
        delete your email again. But yeah, make sure to not email us again
        because it's adding data to our system that we don't need and don't
        want, and it's really delete it, but people don't really always trust
        it. And that makes total sense because so many businesses say, Hey, we
        delete your data and it's still there. We have proper systems in place
        to delete it. So yeah, with us it's not a problem.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">(43:52):</p>
      <p class="mt-0">
        But that's again, because we own the systems and we have a web shop
        that's very difficult. So try to find the shop that's maybe not the most
        convenient to use, but it's the best in privacy, and you will have maybe
        less analytics on who is visiting your shop, but maybe you should change
        your KPI to the amount of sales that you get and link the campaigns that
        you do online to those sales and maybe do one month with one campaign
        and the other month with another campaign and compare it that way.
        There's so many ways to run your business in a different way that's more
        privacy friendly. So yeah, definitely a lot of options to go for. And
        yeah, I would say make profit not the number one reason to have your
        business try to add some value to the world and not just making the most
        of money.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (44:51):</p>
      <p class="mt-0">
        That is the perfect ending, a Adriaan of our conversation. Thank you.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">
        Adriaan van Rossum (44:57):
      </p>
      <p class="mt-0">
        You're welcome. Thanks for having me. It was really, really fun to talk
        with you.
      </p>

      <p class="text-gray-400 dark:text-gray-600 mb-0">Nina Müller (45:03):</p>
      <p class="mt-0">
        Thank you for listening. If you enjoyed it, tell your friends about us.
        Follow us on Twitter and Ethical Allies, or find out more at Ethical
        Alliance Co.
      </p>
    </PressMention>
  </div>
</template>

<script setup>
import PressMention from "../components/PressMention.vue";

const path = useRoute().path;
const slug = path.split("/").filter(Boolean).pop();
</script>
