
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, PlusCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";


const ventPosts = [
  {
    id: 1,
    identity: "Hide my Identity",
    content:
      "I am 21m i just have one question for people who have different religious partner i am an Relationship am Christian and she is Muslim our relationship is just perfect i now she is the one i am not worried about now but i am afraid about the long run will our different affect our love so the question i have to people who are in Interfaith relationship how do u make it work pls give me so though on it i love her to much just to late her go",
    tags: ["Relationship", "Teen"],
  },
  {
    id: 2,
    identity: "Hide my Identity",
    content:
      "Hey y'all am 17F ena highschool student i want to vent something it's like judge endtareguny alfelgm😭yehone lij alena lk highschool mejmery sngeba ene ezaw tmrt bet new yetmarkut esu gn addis nbr then we start talkin' mnamn malet keza idk if esu leguadenyochu negro or it was all joke hulum sew yabeshqen nbr beqa bzu ngr gn i was like ጎጫ ngr so ignore arekuachew mnamn case malet keza 2nd sem lay beqa afeqerkut new mlachu😭😂gn i don't want kene endihed so zem alkuny esum endezaw mnamn bcha bzu keza ametu aleqe beketayu amet tegenanyen ena we started being endedro erasu malet keza gn he did start a relationship kehonech lijga she is like my friend endeza ngr ena i said ohh okey mnamn then esu betam new miyafekrat bzu ngr new yehonelat gn she is cheating on him bzu gize ik it's weird gn asfetenkuat hula malet gn she is fucked up cheater malet keza ahun endet adrge lngerew malet betammm menager alebny yalezya esu yalebet huneta will take him eskemot ewnet mn larg eshi😭",
    tags: ["School", "Relationship", "Teen"],
  },
  {
    id: 3,
    identity: "Hide my Identity",
    content:
      "Hello 👋 selam eendet nachu....the thing is...i am a male of 29 ena i have been working as employee for like 2 years..ena felt like being back from.my friends some of my friends run their owwn business menamen ena they have good financial status kene anetsar. Ena now i want to start some mini business... endewum already paid bet kiray of 4 months. Ena ahun serawun lemejer ferach metabegn..what kind of this. Demo i have gf ena esuam....sera serta selmatak yehun ayehun alakem..ena....she is feeling same as me. Mene temekrugnalachu",
    tags: ["Friendship"],
  },
  {
    id: 4,
    identity: "Hide my Identity",
    content:
      "Being a medical intern is exhausting, but being a medical intern from a poor family background adds a whole different weight to it. I don't have the luxury of taking things slow or being uncertain about my future. I have to think ahead, push myself, and take every possible opportunity, even when I feel drained. I want more for myself. I want to try for the USMLE, maybe other exams too, but it feels overwhelming. The cost, the preparation, the fear of failure—it's a lot. And sometimes, I wonder if it's even possible for someone like me. No financial safety net, no connections, just sheer effort and hope. For those who've been in this position,how did you do it? How did you manage the pressure, the finances, and the self-doubt? Any advice would mean a lot.",
    tags: ["School", "Family", "Adult"],
  },
  {
    id: 5,
    identity: "Hide my Identity",
    content:
      "This might sound like a sad story, and maybe I'm acting like a victim—but so what? I saw a TikTok where a Muslim girl joked, \"When my hijab privileges don't work and an XY chromosome sits beside me.\" And now, I can't stop thinking about it. Because,now I come to think of it, no guy ever sits beside me. Ever. And that probably means I'm… ugly? Today, I went for a walk with my best friend, and as we were talking, this guy came up to us asking to borrow a phone. Said his was dead and he needed to call a friend. I wasn't going to hand over my phone, but I offered to dial the number for him instead. He was clearly drunk, maybe even homeless. As I headed back home, he mentioned he was going the same way. I didn't think much of it. But then, out of nowhere, he says, \"I was actually trying to get your number.\" And all I could think was—I know I didn't dress up today, but do I give off the impression that I'd be open to being approached by you? I get that guys these days have audacity beyond reason, but there are levels to it. And if he thought I was approachable, does that mean I'm that ugly? That fat? I don't know. I don't even know why my friends are my friends. What is it about me that seems friendly? I'm fat, a little ugly, and I have psychological barriers that make it hard for me to connect with people. I struggle to make good decisions, and honestly, I can be a hypocrite. So what is it that keeps them around? Because I really don't see it. I feel like I drain the air around me. I can't just act or blend in like everyone else—it takes time, and sure, I could teach myself, but I won't. Because deep down, I know I'm a pick me. There's a difference between can't and won't. I need attention all the time. I don't really listen to people. And when someone gives me even the smallest bit of attention, I squeeze it dry until there's nothing left. And I hate that about myself.",
    tags: ["Relationship", "Adult"],
  },
  {
    id: 6,
    identity: "Hide my Identity",
    content:
      "20 F SO DONT judge! I started doing myself since I was 8, I know this sounds insane/ lie but only god knows I been doing this for a while. I don't know how to stop tbh I don't even wanna stop…also I'm a virgin waiting till marriage and enate temut I'm not lying I would like to do teklil if it's not late. What do you guys say?",
    tags: ["SexualAssault"],
  },
  {
    id: 7,
    identity: "Hide my Identity",
    content:
      "Hey I need suggestions, the thing is I always get awkward with every one I get close to even brothers, i don't know what is different, yk I can't get what's wrong with me, I don't ignore them but it just gets awkward after a while of intimacy most of with boys it's not a problem with girls, I am boy btw...",
    tags: ["Friendship", "Relationship", "Adult"],
  },
  {
    id: 8,
    identity: "Hide my Identity",
    content:
      "24 F It's crazy how I'm 24 in college surrounded by people every day and still feel like I don't have a single real friend. I talk 2 people I sit with them I even laugh when they laugh but none of it feels real. It's like I'm just there a background character in everyone else's life. I'm always polite i try to be warm easy to talk to but it never turns into anything deeper. No one ever really chooses me. Amd it's exhausting always being part of things but never in them. I just want someone I can sit with and not feel like I'm faking it. Someone who gets me. Someone I don't have to try so hard around. I'm tired of surface level conversations and temporary closeness. I want to be seen. Reallyyyy seen. And on top of all that I've been carrying this hate for how I look for as long as I can remember. It's not a phase. It's not something I just started feeling. I've always hated my appearance. I can't even put it into words sometimes. It's like I'm trapped in a face, in a body, that doesn't feel like mine..one I never asked for. I try to ignore it but it's always there. In every mirror. Every photo. Every moment I'm reminded I'll never feel at peace with how I look. And recently I lost someone really important to me. They weren't just part of my routine they were a piece of me. And now that they're gone there's this emptiness I don't know how to explain. It's quiet in a way that hurts. And it's like everything else my loneliness my self hate..it just got heavier after that. Like tge one small comfort I had is gone too. I just needed to let this out. Because carrying it alone all the time? It's really starting to get to me.",
    tags: ["Friendship"],
  },
  {
    id: 9,
    identity: "Hide my Identity",
    content:
      "Hey yall, admis please post this, it's lowkey urgent 😩. Okay so this is my second time venting, the first time was about a guy I saw on an event and us looking at each other the whole time he had girls around him. Anyway update, he texted me and we're on a talking stage right now. But there's this one guy at my local gym that I have been dyingggg to talk to, he's reallyyy tall handsome betam. And it's not only me, I can tell he's also interested in me but it's just my rbf that's literally stoping him from talking to me. Ene demo le wend lij bezu fit mestet alwedem ena my gym buddies went to him and asked his number for me, and he was like \"tell her to come and talk to me\" but I didn't 😭I was tooo prideful. I mean I had the balls to send my friends over there like isn't that enough? Anyway this happened before meeting the guy I updated you on. Ena zare demo it was so intense between us like I couldn't even finish my workout looking at his beautiful eyes and body. And I swear to God I tried to avoid making eye contact but it happens alottttt. And I also noticed him starting at my butt through the mirror multiple times o. different days 😭becha alakm I'm really confused idk how I feel about them both. I know I said we're just on a talking stage with the other one but he already confessed his love. Becha I venteddddd and helpppp pleaseee I need yalls opinion. Thank yall and admis also!",
    tags: ["Friendship", "Relationship", "Adult", "Teen"],
  },
  {
    id: 10,
    identity: "Hide my Identity",
    content:
      "Here is the thing i've been in relationship with this guy since about for 8 months i really love him and imagine my future with him i mean i am so obsessed with him he also tells me he loves me buys me chocolate and flowers in every date but yesterday morning we were ok even sometimes his messages melt my heart i know he is not a player because i approached him first but when he came back from work he text me as usual and when i told him about how my day was i just started posting these videos in tiktok and replayed some comments like hey beautiful mnamn stuff comments but that was just for the engagement if you know how tiktok works and i think he was not happy about that and i don't want to make him sad so i deleted them immediately then he said i don't think our personalities fit together we should end it here i mean we fight and fix it whenever something happens between us but last night he just decide and told me that(didn't even try to fix that) what do you think is this a valid reason to break up or he never loved me at all",
    tags: ["Relationship"],
  },
  {
    id: 11,
    identity: "Hide my Identity",
    content:
      "F here Guys i just find out that my mom cheated on my dad like 4 years ago and the dude contacted her this year that's how i find out ena idk what to do with this information he is trying to to get back and shit idk man am freaking out my mom? bro like do i tell my dad? am disgusted i hate her omg i should have moved out when i turn 20 but nooo i stayed and witness this shit am kinda high rn but idk i fucking hate my life rn i wouldn't wish this on my enemy ughhhhhhh anyway what tf am i supposed to do ? I need help ASAP how tf do i erase this shit from my brain",
    tags: ["Family"],
  },
  {
    id: 12,
    identity: "Hide my Identity",
    content:
      'Hey y\'all, I\'m a 22-year-old Orthodox Christian and this scene from Young Sheldon really stuck with me: > Sheldon: "Did you know that if gravity were slightly more powerful, the universe would collapse into a ball?" Mary: "I did not." Sheldon: "Also, if gravity were slightly less powerful, the universe would fly apart, and there would be no stars or planets." Mary: "Where are you going with this, Sheldon?" Sheldon: "It\'s just that gravity is precisely as strong as it needs to be. And if the ratio of the electromagnetic force to the strong force wasn\'t one percent, life wouldn\'t exist. What are the odds that would happen all by itself?" Mary: "Why are you trying to convince me to believe in God? You don\'t believe in God." Sheldon: "I don\'t, but the precision of the universe at least makes it logical to conclude there\'s a creator." I believe in God, but I do think He plays favorites—because look around: some people seem way smarter, some are rich, others are poor, and most of us fall somewhere in between. Why does this inequality—even in talent, looks, opportunity—exist? It shakes my faith sometimes. I mean, damn, I\'d love to be rich, super smart, and have a girlfriend. So why aren\'t I one of those people? Why, huh?',
    tags: ["Adult"],
  },
  {
    id: 13,
    identity: "Hide my Identity",
    content:
      "Hey ya''ll i am 22 male i just wanted to tell you how panicking i am right now, i mean 2 weeks ago i had sex for the second time in my entire life and i am in the doubt that i have been infected with hiv, the thing is with the girl we had sex 3 times but the in third time the condom fell into her urine and stayed there for an hour or half an hour and i asked the girl to buy a new condom but she insisted that we use the 3rd condom as it was not used before and i rubbed it against the bed shit and we had sex, at the moment i felt nothing but a week later i felt milf fever and i was worried it might be hiv and i started looking into the symptoms and i had some of the symptoms like swollen lymph nodes on my groin and neck, then i was deeply worried and i took hiv test and it said negative but the thing is i am deeply worried that i might be infected is there anyone willing to give me some advice or anyone who has passed through this situation. I don't need hate and insult i know i fucked up, i sinned i don't want no body to tell me this again!",
    tags: ["School", "Melancholy", "HealthComplications", "Relationship", "Adult"],
  },
  {
    id: 14,
    identity: "Hide my Identity",
    content:
      'Hi guys endet nachu am 22F Ena ye gebi temari negn.let me share you my friend\'s story. the thing is eske yehone gize dres my friend straight neber metmeslegn even eskahun selezi topic ketenesa she acts like straight endehonech Ena Endezi ayent neger des endemaylat gn i found out girlfriend endalechat yehone Ken photo Enday setagn "my love gebash? good night Yene konjo " yemil text anebebku.it was not normal 2 set guadegnamoch endemisasafut aynet . Keza Ken buhala miyaregut neger normal alneberem andande erasu abeba tesetatalech btw the other girl is tomboy betam. even she gave her bra bracelet.keza and Ken selkuan setagn toilet hedech kefche message\'achewn sanebew "i miss you, i miss kissing you Miste " mil text ayew kezan ken buhala lesbian endehonech aweku.ene endemak atakem esua ena she acts like Endezi aynet neger endemaymechat . Guys ene Tsebel wesejat mnamn endatelugn esu teftogn adelem. Gn endet arge laskumat please amakrugn thank you',
    tags: ["Friendship"],
  },
  {
    id: 15,
    identity: "Hide my Identity",
    content:
      "Okey here is the thing I'm 20 years old and keyehonee time jemeroo misemugn semetoch aluuu I have been watching porn Soo much not the regular stuff the crazy stuff new mayew yehonee bdsm shit adelem bekaa unique yehonee nw be amerowachuu matasebut ngr eyetederegee nww sew rekash nw milewen mindset feterebegn esuu lay demooo sew simot sikoret stuff chemerekubet (even my IG fyp is crazy betayut) mnamn I dunno why Im doing this maybe sew rekash mehonun seredaa be netsanet enedefeleku menekesakes yasechelegn yehonal I dunno gn lately psychopath ngr eyehoneku nw like I imagine hitting little kids and some other crazy shits like eyeteramedeku menegelay whether it's old women or teen or normal setoch I just imagine doing crazy stuff and I just laugh about it mnamn ngr enaaa Ezi weset psychology metaweku orrr bechaa similar stuff misemachu sewoch enaweraaa Thank you sooo much I hope addmins approves this 🙏🙏🙏",
    tags: ["MentalIllness", "Adult"],
  },
]

// Available tags for creating a new vent
const tags = [
  "Relationship",
  "Teen", 
  "School",
  "Friendship",
  "Family",
  "Adult",
  "MentalIllness",
  "HealthComplications",
  "Melancholy",
  "SexualAssault",
];

interface VentCardProps {
  id: number;
  identity: string;
  content: string;
  tags: string[];
}

function VentCard({ id, identity, content, tags }: VentCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white hover:border-fuchsia-500/30 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-zinc-400">{identity}</span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-zinc-300 mb-4 line-clamp-4">{content}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function VentPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState("");
  const [hideIdentity, setHideIdentity] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ventPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(ventPosts.length / postsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 4) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContent("");
    setSelectedTags([]);
    setIsCreating(false);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-fuchsia-500" />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-fuchsia-300 bg-clip-text text-transparent">
              Vent Anonymously
            </h1>
          </div>
          
          {isCreating ? (
            <Button 
              variant="outline" 
              className="border-zinc-700 text-zinc-300 hover:text-white flex items-center gap-2"
              onClick={() => setIsCreating(false)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Vents
            </Button>
          ) : (
            <Button
              className="bg-fuchsia-600 hover:bg-fuchsia-700 flex items-center gap-2"
              onClick={() => setIsCreating(true)}
            >
              <PlusCircle className="h-4 w-4" />
              Create Vent
            </Button>
          )}
        </div>

        {isCreating ? (
          <Card className="max-w-2xl mx-auto bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Share Your Thoughts</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="hideIdentity"
                    checked={hideIdentity}
                    onCheckedChange={(checked) => setHideIdentity(checked as boolean)}
                  />
                  <label htmlFor="hideIdentity" className="text-sm text-zinc-300">
                    Hide my Identity
                  </label>
                </div>

                <Textarea
                  placeholder="I need to vent..."
                  className="min-h-[200px] bg-zinc-800 border-zinc-700 text-white resize-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />

                <div>
                  <p className="text-sm text-zinc-300 mb-2">Select Tags (up to 4)</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedTags.includes(tag)
                            ? "bg-fuchsia-600 hover:bg-fuchsia-700"
                            : "bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
                        }`}
                        onClick={() => handleTagToggle(tag)}
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:text-white"
                  onClick={() => setIsCreating(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-fuchsia-600 hover:bg-fuchsia-700">
                  Post Vent
                </Button>
              </CardFooter>
            </form>
          </Card>
        ) : (
          <>
            <div className="grid gap-6">
              {currentPosts.map((post) => (
                <VentCard
                  key={post.id}
                  id={post.id}
                  identity={post.identity}
                  content={post.content}
                  tags={post.tags}
                />
              ))}
            </div>

            <Pagination className="mt-8">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="cursor-pointer bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                )}

                {pageNumbers.map((number) => (
                  <PaginationItem key={number}>
                    <PaginationLink
                      onClick={() => setCurrentPage(number)}
                      isActive={currentPage === number}
                      className={`cursor-pointer ${
                        currentPage === number
                          ? "bg-fuchsia-600 text-white"
                          : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                      }`}
                    >
                      {number}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="cursor-pointer bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </PaginationLink>
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </>
        )}
      </div>
      
    </main>
  );
}