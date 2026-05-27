const quotes = [
    //-----------Weevildoing
    //-----Machine Girl
    "<h2>Human error is the only thing I'll ever know,<br>Sharpening the blade to cut all the way to the bone.</h2><p><i>-Weevildoing, &#34;Machine Girl&#34;</i></p>",
    "<h2>Since when did I get like this?<br>A shell of a being, a human malfunction...</h2><p><i>-Weevildoing, &#34;Machine Girl&#34;</i></p>",
    "<h2>Machine Girl, something between computer and man,<br>Melting down, wearing out my dissolving engrams.</h2><p><i>-Weevildoing, &#34;Machine Girl&#34;</i></p>",
    "<h2>I don't remember who I am,<br>It seems there is a flaw somewhere in my program...</h2><p><i>-Weevildoing, &#34;Machine Girl&#34;</i></p>",
    "<h2>Happiness is something that I knew so long ago,<br>Or maybe I never knew, maybe I'll never know. :(</h2><p><i>-Weevildoing, &#34;Machine Girl&#34;</i></p>",
    "<h2>Parts of my brain are already corrupted,<br>Memories are long-gone, files in the trash bin.</h2><p><i>-Weevildoing, &#34;Machine Girl&#34;</i></p>",
    //-----Disposable Girl
    "<h2>All the pretty girls make it look so easy,<br>All the pretty girls make me not wanna be me.</h2><p><i>-Weevildoing, &#34;Disposable Girl&#34;</i></p>",
    "<h2>Swear to god, all I've done is my best,<br>But I always get treated like I'm different from the rest.</h2><p><i>-Weevildoing, &#34;Disposable Girl&#34;</i></p>",
    "<h2>I try so hard to be good,<br>To be someone worth seeing...</h2><p><i>-Weevildoing, &#34;Disposable Girl&#34;</i></p>",
    "<h2>I wanna hate them, I really fucking do,<br>But if you were in my place, you would hate yourself too.</h2><p><i>-Weevildoing, &#34;Disposable Girl&#34;</i></p>",
    "<h2>D-I-S-P-O-S-A-B-L-E,<br>That's all I'll ever be.</h2><p><i>-Weevildoing, &#34;Disposable Girl&#34;</i></p>",
    "<h2>I know it's not a healthy way to feel,<br>But to be mistreated would at least mean I'm real.</h2><p><i>-Weevildoing, &#34;Disposable Girl&#34;</i></p>",
    //-----Irreverent Girl
    "<h2>That painting made by man, the depicted divine,<br>If my life is spent in worship, is it really mine?</h2><p><i>-Weevildoing, &#34;Irreverent Girl&#34;</i></p>",
    "<h2>&#34;How stupid would you have to be to believe them?&#34;<br>I was that stupid, I am the one you demonise.</h2><p><i>-Weevildoing, &#34;Irreverent Girl&#34;</i></p>",
    "<h2>My skin is burning up, temptation is too much,<br>Can't seem to keep my story straight, the God I loves' a man I hate.</h2><p><i>-Weevildoing, &#34;Irreverent Girl&#34;</i></p>",
    "<h2>Heavenly Father, please alter this body,<br>It's impure and sinful, I don't want it on me!</h2><p><i>-Weevildoing, &#34;Irreverent Girl&#34;</i></p>",
    //-----Splitter Girl
    "<h2>Burdened with a nasty burning,<br>obscene yearning for control.</h2><p><i>-Weevildoing, &#34;Splitter Girl&#34;</i></p>",
    "<h2>I'm done feeling guilty,<br>I'll take these thoughts and tear them out.</h2><p><i>-Weevildoing, &#34;Splitter Girl&#34;</i></p>",
    //-----Fainéant Girl
    "<h2>They told me there was nothing wrong as far as they could tell<br>Oh well, guess they can't tell very far,<br>I have to be my own clinician, write my own memoir.</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>With a body and a brain so sickening,<br>Practitioners find it not worth fixing,</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>I'm scared I'm gonna lie down one day,<br>And never get back up again.</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>It's written down on paper, you can't call yourself a faker,<br>It's all true now, what'll you do now?</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>(A life sentence served and my body's the cell,<br>No, I don't need to die to know that this is hell.)</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>If only I knew how much time I had left,<br>It would've been spent a bit more wise...</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>No, they can't help, they're not diseased,<br>That's not the way they chose to be.</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>Nobody would listen, my body was trying to warn me,<br>(There's only so much medication can help).</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>I'm tired when I wake up, when I'm opening my eyes,<br>When I'm not feeling low, I get tired out by the highs.</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>I'm tired when I go out, when I'm trying to exist,<br>But if I don't, I get tired thinking about the things I missed.</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>I'm tired, just tired, that's all I ever say,<br>Because I'm tired of my illnesses making me act this way!</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    "<h2>I forget I'm an adult all the time,<br>'Cause my body gave up when I was so young.</h2><p><i>-Weevildoing, &#34;Fainéant Girl&#34;</i></p>",
    //-----i want a lobotomy
    "<h2>I wanna get rid of these feelings, please,<br>I wanna lie in bed and never leave.</h2><p><i>-Weevildoing, &#34;i want a lobotomy&#34;</i></p>",
    "<h2>I never wanna wake up, wanna stay asleep,<br>Don't wanna fucking be here, I don't wanna be me.</h2><p><i>-Weevildoing, &#34;i want a lobotomy&#34;</i></p>",
    "<h2>Don't wanna hear your crying, man,<br>I wanna fucking die like this.</h2><p><i>-Weevildoing, &#34;i want a lobotomy&#34;</i></p>",
    "<h2>I can't keep lying, I don't mean to be so frightening,<br>But lately I've been spiraling, existing is so tiring.</h2><p><i>-Weevildoing, &#34;i want a lobotomy&#34;</i></p>",
    "<h2>So no more trying, no more hiding, no more fear intensifying,<br>Don't act like you care when I'm dead, bitch,<br>I've already been dying.</h2><p><i>-Weevildoing, &#34;i want a lobotomy&#34;</i></p>",
    //-----vomitsoup
    "<h2>You never talk to me, it makes me wanna talk less too,<br>You talk to them so much, it makes me feel useless to you.</h2><p><i>-Weevildoing, &#34;vomitsoup&#34;</i></p>",
    "<h2>You said you can't live without me, I think that's wishful thinking,<br>It'd be good if I was gone, so don't be shocked when I'm missing.</h2><p><i>-Weevildoing, &#34;vomitsoup&#34;</i></p>",

    //-----------Crywank
    "<h2>&#34;You make me feel like what I do is important.&#34;<br>The pressure of a compliment...</h2><p><i>-Crywank, &#34;Your Own Worst Enemy Critic&#34;</i></p>",

    "<h2>If I become nostalgia,<br>You'll always love me more.</h2><p><i>-Crywank, &#34;An Intimate Message&#34;</i></p>",

    "<h2>Some days you'd rather be me,<br>Some days I'd rather be you.</h2><p><i>-Crywank, &#34;One Hundred Million Years Ago a Hero Crossed The Land&#34;</i></p>",
    "<h2>And maybe, in some ways, that's why it's hard to empathize,<br>You're nothing more than character in someone else's life.</h2><p><i>-Crywank, &#34;One Hundred Million Years Ago a Hero Crossed The Land&#34;</i></p>",
    "<h2>To them, you live as the fiction that you would like to be,<br>But without the control over how you're perceived.</h2><p><i>-Crywank, &#34;One Hundred Million Years Ago a Hero Crossed The Land&#34;</i></p>",
    "<h2>So then, discard the opinion, as they don't really know you,<br>Just to face the facts, you don't know yourself too.</h2><p><i>-Crywank, &#34;One Hundred Million Years Ago a Hero Crossed The Land&#34;</i></p>",

    "<h2>Hopeless, you're told, fearful of the day she dies,<br>Do they see this as a waste of your time?</h2><p><i>-Crywank, &#34;Who Is Thomas Saunders and Why Is He Significant In Your Writings?&#34;</i></p>",
    "<h2>The life you lead, if you outlive her,<br>Count the days until you sleep.</h2><p><i>-Crywank, &#34;Who Is Thomas Saunders and Why Is He Significant In Your Writings?&#34;</i></p>",
    "<h2>Spiral downward, you knew you would never cope,<br>Was it worthwhile, knowing you would sink this low?</h2><p><i>-Crywank, &#34;Who Is Thomas Saunders and Why Is He Significant In Your Writings?&#34;</i></p>",

    "<h2>Sweaty fingers push down on your throat, you say you like it rough,<br>But it's hard to think I'd do this out of love.</h2><p><i>-Crywank, &#34;Song for a Guilty Sadist&#34;</i></p>",
    "<h2>Oh, how rude of me to bring my thoughts into your bedroom,<br>Is it condescending to be so scared I might hurt you?</h2><p><i>-Crywank, &#34;Song for a Guilty Sadist&#34;</i></p>",

    "<h2>I need to stop thinking about the things I'll never do again, <br>And just be glad I did them, and I'm so glad I did them!</h2><p><i>-Crywank, &#34;Welcome To Castle Irwell&#34;</i></p>",
    "<h2>First love does not mean best love, <br>And best friends may not mean best friends forever,<br>But they both mean, at some point, somewhere, someone did care.</h2><p><i>-Crywank, &#34;Welcome To Castle Irwell&#34;</i></p>",

    "<h2>I am like cigarettes, and steak, and booze, obesity and stress,<br>Everyone with a bad heart will blame me for their mess.</h2><p><i>-Crywank, &#34;18&#34;</i></p>",
    "<h2>My life story's just a clip show,<br>Filled with long drawn-scenes of plug holes.</h2><p><i>-Crywank, &#34;18&#34;</i></p>",

    "<h2>My brain would never let me forget you,<br>It's not like you're lingering, <br>It's more like you're haunting.</h2><p><i>-Crywank, &#34;Pope Alexander&#34;</i></p>",

    "<h2>Please, let me pretend,<br>I'm not embarrassed of myself.</h2><p><i>-Crywank, &#34;Zains, Cam4, Wah Wah and Sirens&#34;</i></p>",
    "<h2>Hold me up against the light,<br>Look through me like tracing paper,<br>And tell me everything will be alright.</h2><p><i>-Crywank, &#34;Zains, Cam4, Wah Wah and Sirens&#34;</i></p>",
    "<h2>Each night I'm scared I'll die in my sleep,<br>Am I losing my mind, or am I skipping beats?</h2><p><i>-Crywank, &#34;Zains, Cam4, Wah Wah and Sirens&#34;</i></p>",
    "<h2>I got ready to tell my friends that I loved them,<br>They saw fear in my eyes, they laughed, and then the song begun.</h2><p><i>-Crywank, &#34;Zains, Cam4, Wah Wah and Sirens&#34;</i></p>",

    "<h2>Repeat my lines as if I'm a victim,<br>Repeat my lines as if I am kind.</h2><p><i>-Crywank, &#34;Deep Down I'm Really Kirk Van Houten&#34;</i></p>",
    "<h2>Sad songs won't make up for the things that I have done,<br>And sorry means nothing, when I haven't learned my lessons.</h2><p><i>-Crywank, &#34;Deep Down I'm Really Kirk Van Houten&#34;</i></p>",

    "<h2>It's empathy from friends,<br>But it's pity from the others.</h2><p><i>-Crywank, &#34;On My Mind by Kylie V by Crywank&#34;</i></p>",
    "<h2>Oh, I cauterized silly dreams that hurt my mind,<br>Metamorphosize in reverse.</h2><p><i>-Crywank, &#34;On My Mind by Kylie V by Crywank&#34;</i></p>",

    "<h2>My concept of happiness is completely based on fiction,<br>Accustomed to disappointment, from the human condition.</h2><p><i>-Crywank, &#34;Now I'm Sad (Boo Hoo)&#34;</i></p>",
    "<h2>But when you're met with constant letdowns,<br>It feels like things can only get worse.</h2><p><i>-Crywank, &#34;Now I'm Sad (Boo Hoo)&#34;</i></p>",
    "<h2>And if the present is a gift,<br>I want to send it back.</h2><p><i>-Crywank, &#34;Now I'm Sad (Boo Hoo)&#34;</i></p>",

    "<h2>Like a cat who's not yet used to it's claws,<br>I'll hurt anyone I try to adore.</h2><p><i>-Crywank, &#34;Harvey Milk Shit on the Table&#34;</i></p>",
    "<h2>Did I make it too easy to hurt me?<br>Because you didn't seem to struggle at all.</h2><p><i>-Crywank, &#34;Harvey Milk Shit on the Table&#34;</i></p>",

    "<h2>Abscess on your gadget or garment,<br>More substance in silence,<br>Remind me not to write again.</h2><p><i>-Crywank, &#34;Squeezing the Damp Tea Towel to its Final Few Drips&#34;</i></p>",

    "<h2>I am mostly scared by passing time,<br>The world, it seems, gets more unkind.</h2><p><i>-Crywank, &#34;It's Ok I Wouldn't Remember Me Either&#34;</i></p>",
    "<h2>Maybe I should just pack up and run away again,<br>Let you forget that you were once my friend,<br>Then watch another, go on and do better without me.</h2><p><i>-Crywank, &#34;It's Ok I Wouldn't Remember Me Either&#34;</i></p>",
    "<h2>Self-deprecating thoughts interrupting all the time,<br>Emphasising all the traits that I wish weren't mine,<br>They speak louder than everybody.</h2><p><i>-Crywank, &#34;It's Ok I Wouldn't Remember Me Either&#34;</i></p>",
    "<h2>I want to end reality, but I feel hesitant,<br>Optimistic that the future will be more concerned than the present,<br>And so for today, I'll remain intact.</h2><p><i>-Crywank, &#34;It's Ok I Wouldn't Remember Me Either&#34;</i></p>",

    "<h2>Hive mind is scary, I feel vulnerable and stupid,<br>Waiting for a new embarrassment to go and tear right through me,<br>A dependent, fruitless animal, watch me brimming with shame.</h2><p><i>-Crywank, &#34;Only Everyone Can Judge Me&#34;</i></p>",
    "<h2>And this confidence I fake only makes matters worse,<br>I am not a stallion, I am just perverse,<br>Hopeless, and docile, and tamed.</h2><p><i>-Crywank, &#34;Only Everyone Can Judge Me&#34;</i></p>",
    "<h2>Another day I won't remember, another day I wished away,<br>Tedious days, punctuated by dismay, everyday feels the same.</h2><p><i>-Crywank, &#34;Only Everyone Can Judge Me&#34;</i></p>",
    "<h2>This isn't a brave face, this isn't a brave face,<br>This is a mask.</h2><p><i>-Crywank, &#34;Only Everyone Can Judge Me&#34;</i></p>",
    "<h2>Now I remember,<br>It doesn't take much to make me feel small.</h2><p><i>-Crywank, &#34;Only Everyone Can Judge Me&#34;</i></p>",

    "<h2>I invade your existence with my dependence,<br>And leave you guilt-tripped, until you take care of me,<br>For if not, I will surely die.</h2><p><i>-Crywank, &#34;Leech Boy&#34;</i></p>",
    "<h2>And now I know that sounds pathetic,<br>That's because that's what I am.</h2><p><i>-Crywank, &#34;Leech Boy&#34;</i></p>",
    "<h2>As I get older, I also worsen.<br>I used to be a better person.</h2><p><i>-Crywank, &#34;Leech Boy&#34;</i></p>",

    "<h2>I was born to be mothered.<br>In that sense, nothing has changed.</h2><p><i>-Crywank, &#34;Thomas Saunders Lloyd Webber&#34;</i></p>",
    "<h2>I don't want to change myself to impress you,<br>But when you're lonely, it's hard not to do.</h2><p><i>-Crywank, &#34;Thomas Saunders Lloyd Webber&#34;</i></p>",

    //-----------Black Dresses
    "<h2>I wish this was just a cartoon so I could be like,<br>&#34;This is real as fuck! I love the way they don't give up!&#34;</h2><p><i>-Black Dresses, &#34;CARTOON NETWORK&#34;</i></p>",

    //-----------Diet Tea Other Cola
    "<h2>I got down on my knees, and said a lil' prayer,<br>Opened up the flesh,<br>Thought I could hide it inside of there.</h2><p><i>-Diet Tea Other Cola, &#34;Horrible Oracle&#34;</i></p>",
    "<h2>Oh, you're a horrible oracle, but I wanna get to know you,<br>Oh, I hope you explode into a thousand fucking pieces.</h2><p><i>-Diet Tea Other Cola, &#34;Horrible Oracle&#34;</i></p>",
    "<h2>Bleached Cow Skull; my best friend,<br>He doesn't judge me when I say I want the world to end,<br>Sometimes I just need to burn a few bridges.</h2><p><i>-Diet Tea Other Cola, &#34;Horrible Oracle&#34;</i></p>",

    //-----------STOMACH BOOK

    //-----------Sodikken
    "<h2>What am I in hell for?<br>Was I born to be tortured?</h2><p><i>-Sodikken, &#34;Gretel&#34;</i></p>",
    "<h2>Naturally occuring,<br>Monster-making condition...</h2><p><i>-Sodikken, &#34;Gretel&#34;</i></p>",

    "<h2>I think there's something wrong me,<br>Why can't I just live happily?</h2><p><i>-Sodikken, &#34;People Eater&#34;</i></p>",
    "<h2>I can't go without the feeling of your flesh upon my teeth,<br>I can't retreat,<br>No, I can't even breathe without feeling hungry,<br>Why do you still believe in me?</h2><p><i>-Sodikken, &#34;People Eater&#34;</i></p>",
    "<h2>And I'm baffled why you choose to stay with me,<br>You're completely free, yet you refuse to leave.</h2><p><i>-Sodikken, &#34;People Eater&#34;</i></p>",
    //-----------Nicole Dollanganger
    "<h2>You ruin everything you touch,<br>And destroy anyone you love, you're all over me.</h2><p><i>-Nicole Dollanganger, &#34;Dog Teeth&#34;</i></p>",

    "<h2>It's not your body that I love, but it's the shell you're inside of,<br>And you're killing it, you're killing the only piece of you I can touch.</h2><p><i>-Nicole Dollanganger, &#34;Please Eat&#34;</i></p>",
    "<h2>It's not your body that I need, but that's what sleeps next to me,<br>And you're killing it, you're killing it, you're killing it.</h2><p><i>-Nicole Dollanganger, &#34;Please Eat&#34;</i></p>",
    "<h2>'Cause I know you can only starve so much before you'll die,<br>There's parts of you already gone I can never revive.</h2><p><i>-Nicole Dollanganger, &#34;Please Eat&#34;</i></p>",

    "<h2>And I will never be able to love you, I couldn't if I tried,<br>And I will lie down next to you, but I fear a dead body would feel warm compared to mine.</h2><p><i>-Nicole Dollanganger, &#34;Barren&#34;</i></p>",
    //-----------Cavetown
    "<h2>I haven't got a lot of friends anymore,<br>And my head still says I have none at all.</h2><p><i>-Cavetown, &#34;BG Noise&#34;</i></p>",
    "<h2>Get a load of this man without a plan,<br>He doesn't wanna go to school, but doesn't wanna upset his dad.</h2><p><i>-Cavetown, &#34;BG Noise&#34;</i></p>",
    "<h2>Get out of bed, it's not that easy,<br>When your throat goes cold, and your arms feel queasy.</h2><p><i>-Cavetown, &#34;BG Noise&#34;</i></p>",

    "<h2>Everyone's got a thing, a thing they don't like,<br>A thing that makes them stand in front of the sink, with tears in their eyes.</h2><p><i>-Cavetown, &#34;Dear&#34;</i></p>",
    "<h2>I won't even lie, I'm screaming inside all the time,<br>It seems like a breeze, it feels like a dream,<br>But I don't wanna die.</h2><p><i>-Cavetown, &#34;Dear&#34;</i></p>",
    "<h2>Everyone's got a thing, a thing they don't like,<br>A thing that makes them double-think,<br>When they're standing at the railway crossing lights.</h2><p><i>-Cavetown, &#34;Dear&#34;</i></p>",
    "<h2>I don't wanna wake up sometimes, and I don't wanna sing,<br>And I don't care what happens tonight, as long as I feel something.</h2><p><i>-Cavetown, &#34;Dear&#34;</i></p>",

    //-----------Pleasantries
    "<h2>Humanity is not worth saving,<br>That's what I tell myself each day,<br>To cope with the end of the world.</h2><p><i>-Pleasantries, &#34;Sociopath&#34;</i></p>",
    "<h2>World will end whether or not,<br>You torture yourself with your thoughts,<br>Try to stop, you can't, you are only human.</h2><p><i>-Pleasantries, &#34;Sociopath&#34;</i></p>",
    "<h2>I know for a fact that,<br>The pain does not end in death,<br>Get up and go to work again.</h2><p><i>-Pleasantries, &#34;Sociopath&#34;</i></p>",

    //-----------Others
    "<h2>Lucky is she, who lives unaware,<br>Doesn't get bothered by all that's unfair.</h2><p><i>-Tikkle Me, &#34;Blow My Brains Out&#34;</i></p>",
    "<h2>But sometimes the truth is just my point of view,<br>Not what is real and not what is true.</h2><p><i>-Tikkle Me, &#34;Blow My Brains Out&#34;</i></p>",
    "<h2>Unlucky me, aware of the pain,<br>All 'cause I happen to have some brain!</h2><p><i>-Tikkle Me, &#34;Blow My Brains Out&#34;</i></p>",

    "<h2>I am something, I have been something,<br>I was born something, what could I be?</h2><p><i>-Mitski, &#34;Abbey&#34;</i></p>",

    "<h2>If you must weep,<br>Do it right here in my bed as I sleep.</h2><p><i>-Keaton Henson, &#34;You&#34;</i></p>",
    "<h2>If you must speak,<br>Speak every word as though it were unique.</h2><p><i>-Keaton Henson, &#34;You&#34;</i></p>",
    "<h2>If you must leave,<br>Leave as though fire burns under your feet.</h2><p><i>-Keaton Henson, &#34;You&#34;</i></p>",
    "<h2>If you must die,<br>Die knowing your life was my life's best part.<br>If you must die, remember your life.</h2><p><i>-Keaton Henson, &#34;You&#34;</i></p>",
    "<h2>If you must work,<br>Work to leave some part of you on this earth.</h2><p><i>-Keaton Henson, &#34;You&#34;</i></p>",

    "<h2>Am I pretty? Do I deserve to be?<br>Would you tell me if I was worthy?</h2><p><i>-ARTHUR, &#34;Woof Woof&#34;</i></p>",
    "<h2>Late at night, I don't have to be myself,<br>Pretend to read all of the books placed on my shelf.</h2><p><i>-ARTHUR, &#34;Woof Woof&#34;</i></p>",

    "<h2>I need space, I need time, I need love, I'll be fine,<br>Too much space, too much time, need my love, 'cause he's mine.</h2><p><i>-sixwing, &#34;my teeth will free you&#34;</i></p>",

    "<h2>Don't know what to say when you're not okay,<br>I find it so sad that you have to go through it everyday.</h2><p><i>-ilynnnn, &#34;Fix You&#34;</i></p>",
    "<h2>If you hate me, I don't mind,<br>I will still be here.</h2><p><i>-ilynnnn, &#34;Fix You&#34;</i></p>",

    "<h2>Relieved of thinking,<br>I did impressions of a perfect machine.</h2><p><i>-Roar, &#34;Robocop Sunset&#34;</i></p>",
    "<h2>Am I a shining instrument,<br>Of man's darkest resentments?<br>Take my thoughts, I do not need them.</h2><p><i>-Roar, &#34;Robocop Sunset&#34;</i></p>",

    "<h2>Something bad is 'bout to happen to me.<br>I don't know what, but I feel it coming.</h2><p><i>-Steve Lacey, &#34;Dark Red&#34;</i></p>"
];
function randquote() {
    const container = document.getElementById("randomquote");
    const index = Math.floor(Math.random() * quotes.length);
    container.innerHTML = quotes[index];
}
