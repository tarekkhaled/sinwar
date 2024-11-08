import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        siteTitle: 'Palestinian Narrative (the Historical truth)',
      },
      hero: {
        tagline: 'Every Story Matters. Every Voice Counts.',
        mainTitle: 'Our Land. Our Truth. Our Story.',
        subtitle:
          'For generations, our narrative has been silenced, our history rewritten, our existence questioned. Today, we reclaim our voice.',
        intro: {
          part1:
            'This platform stands as a testament to our enduring connection to Palestine - a land where our ancestors planted olive trees that still bear fruit, where our grandparents held keys to homes they were forced to flee, where our children dream of freedom they have never known.',
          part2:
            'Here, we confront every narrative used to justify our dispossession. We challenge every myth used to erase our presence. We document every attempt to rewrite our history. Through historical records, lived experiences, and undeniable truths, we expose the carefully constructed narratives that have been used to justify the ongoing occupation of our land.',
          part3:
            'From the streets of Gaza to the olive groves of the West Bank, from the refugee camps across the diaspora to the villages erased from maps but living in our memories - this is our story. Not as victims, but as a people refusing to be erased. Our existence is our resistance, our memory is our weapon, our truth is our shield.',
        },
        quote: {
          text: "They tried to bury us. They didn't know we were seeds.",
          attribution: 'Palestinian Proverb',
        },
        closing: {
          callToAction:
            'Join us in preserving our narrative, protecting our heritage, and promoting our truth.',
          impact:
            'Because every demolished home has a story. Every uprooted olive tree has a history. Every displaced family has a right to return.',
        },
      },
      amsterdam_incident: {
        title: "The Amsterdam Football Match Incident and Media Manipulation",
        zionist_claim: `Israeli citizens and football fans were viciously attacked in Amsterdam in what US antisemitism envoy called 'terribly reminiscent of classic pogrom', with Israeli media reporting unprovoked attacks by 'Middle Eastern migrants hunting down Jews in the streets of Amsterdam.' Israel claimed it needed to send rescue teams after what they described as a 'very violent incident' against their citizens.`,
        palestine_response: {
          description: `The reality of the Amsterdam incident exposes a calculated Israeli propaganda operation that follows their familiar pattern: provoke, attack, play victim, then manipulate media narratives. The sequence of events reveals a premeditated strategy that began even before the match.

The Jerusalem Post published a telling article announcing that Mossad agents would accompany Maccabi Tel Aviv fans to Amsterdam - an unprecedented announcement that suggests premeditation for what would follow. This was not standard security protocol, but preparation for a planned provocation.

The Israeli supporters' true intentions became clear at the match itself, where they showed profound disrespect during a one-minute silence for Spanish flood victims - a deliberate insult to Spain for its recognition of Palestine and stance against the Gaza genocide. But their most shocking behavior came when they chanted "There are no schools in Gaza because there are no children left" - celebrating their military's killing of over 12,000 Palestinian children.

The Israeli fans then initiated a campaign of violence and provocation across Amsterdam:
- Attacking local residents' homes
- Assaulting Arab taxi drivers
- Vandalizing Arab-owned businesses
- Tearing down Palestinian flags
- Chanting "Death to Arabs" and other racist slogans
- Physically attacking Arab pedestrians

When local youth, particularly from the Moroccan community, organized to defend their community from these attacks, the Israeli propaganda machine immediately activated. Within hours, the same media outlets that ignored the initial provocations and attacks began portraying the events as an antisemitic "pogrom."

The truth emerged through unexpected sources. A Dutch woman who filmed one of the key incidents exposed how Israeli media was misrepresenting her footage, confirming that it actually showed Maccabi supporters initiating violence against a Dutch citizen. Even the traditionally pro-Israel Daily Mail broke ranks to report the truth: that Israeli hooligans were the instigators who tore down Palestinian flags and attacked locals.

This incident perfectly encapsulates Israel's broader propaganda strategy post-October 7:
- Initiate violence and provocation
- When met with resistance, immediately claim victimhood
- Mobilize compliant media to push a false narrative
- Use the manufactured incident to justify further aggression
- Suppress or discredit evidence of their initial provocations

The Amsterdam incident demonstrates how Israeli propaganda operates - provoking violence, then manipulating the narrative to portray themselves as victims, exactly as they did with October 7 to justify their genocide in Gaza. But just as the truth emerged in Amsterdam thanks to local witnesses and honest journalism, the broader truth about their actions in Gaza cannot be forever obscured by propaganda.`,
        },
        resources: [
            'https://x.com/Megatron_ron/status/1854899703634153754',
            'https://www.jpost.com/israel-news/sports/article-827683',
            'https://www.dailymail.co.uk/sport/football/article-14053391/Israeli-football-hooligans-Palestine-flags-Ajax-Maccabi-Tel-Aviv.html',
            'https://x.com/Mehmetcanbekli1/status/1854880338427732127',
            'https://x.com/SenpaiTheories/status/1854701914354503721',
            'https://news.sky.com/story/israel-says-it-will-deploy-rescue-mission-after-violent-incident-targeting-israeli-citizens-in-amsterdam-13250370',
            'https://x.com/Megatron_ron/status/1854907447577600437',
            'https://x.com/Johnpatrick500/status/1854841403685142852'
        ]
      },
      sinwar_tunnel: {
        title: 'Al Sinwar Tunnel Hiding Narrative',
        zionist_claim:
          'Yahya Sinwar is hiding in tunnels, using civilians and hostages as human shields while showing no regard for Palestinian lives, living in his underground kingdom without concern for Palestinians suffering for his cause, surrounding himself with hostages for protection.',
        palestine_response: {
          description:
            "Before addressing these fabrications, it's worth noting President Biden and Secretary Blinken's own assessment of Netanyahu as untrustworthy, stating that 18 out of 19 of his officials are equally dishonest. This context is crucial when evaluating any Israeli military claims. The reality of Sinwar's final stand in Tel Al-Sultan, Rafah, completely shatters these Israeli fabrications. Here was Hamas's highest-ranking leader, fighting in an area deliberately evacuated of civilians for three months. The Israeli military's own footage – perhaps their most reliable evidence against their own narrative – shows Sinwar in his final moments, fighting alone in an area devoid of civilian presence. Even as he lost his left hand, he continued fighting with unwavering determination. This singular fact demolishes the entire Israeli narrative about Hamas leaders hiding behind civilian shields. What's particularly telling is that this evidence comes from Israeli military cameras themselves. The footage emerged through soldier leaks, who were astounded at finding themselves in direct combat with Sinwar. When Israel accuses Hamas of any action, it's often a reflection of their own tactics - a pattern so consistent it serves as a reliable inverse indicator of truth. Their accusations have become a mirror reflecting their own strategies rather than revealing any truth about their opponents.",
        },
        resources: ['https://www.youtube.com/watch?v=YqkSaMuuzzY'],
      },
      sinwar_wife: {
        title: 'The Luxury Handbag For Al Sinwar\'s wife',
        zionist_claim:
          "Footage shows Sinwar's wife carrying a $32,000 Hermès Birkin bag in tunnels while Palestinians suffer from lack of basic necessities, demonstrating Hamas leadership's exploitation of Gaza's resources.",
        palestine_response: {
          description:
            "The desperation of Israeli propaganda following their failure to tarnish Yahya Sinwar's heroic final stand has led them to attack his wife with recycled pre-October 7th footage, manufacturing a controversy about a purported $32,000 Hermès Birkin handbag. The absurdity of this claim becomes apparent with even the most cursory examination. Anyone who takes a moment to compare the two bags in question can easily see they're not even the same. But let's entertain their fiction for a moment - imagine bringing a $32,000 Birkin bag into an underground tunnel, 40 meters below ground, in an environment without basic amenities. It's as logical as parking a luxury yacht in the desert. The reality stands in stark contrast to these fabrications. Sinwar's wife is known throughout Palestinian society as a respected Quran teacher and educator, recognized for her modesty and dedication to the Palestinian family unit. The footage itself betrays Israel's deception - her attire mirrors that of countless Palestinian women during the war, simple and practical garments available within Gaza's markets. Every element of the image contradicts the Israeli narrative. Her modest dress, consistent with typical Palestinian women's clothing, hardly suggests someone carrying a bag worth tens of thousands of dollars. Moreover, the practical impossibility of acquiring such a luxury item in besieged Gaza - where she has never left - exposes the absurdity of these claims. This desperate attempt to smear Sinwar's family after failing to tarnish his legacy reveals the bankruptcy of Israeli propaganda. When they couldn't discredit the warrior, they attempted to discredit his wife - and failed at that too, succeeding only in highlighting their own dishonesty and desperation.",
        },
        resources: ['https://www.youtube.com/watch?v=IjiBGIEl_9U'],
      },
      beheaded_babies: {
        title: 'The Beheaded Babies Narrative',
        zionist_claim:
          "Israeli soldiers reported finding '40 beheaded babies' in Kfar Aza, a claim amplified to such magnitude that even President Biden declared 'I never really thought that I would see and have confirmed pictures of terrorists beheading children.'",
        palestine_response: {
          description:
            "The fabrication of the 'beheaded babies' narrative exposes the depths of Israeli propaganda manipulation. Al Jazeera's meticulous investigation of the complete victim list reveals a stark truth: only two babies died on October 7th - one from a bullet through a door, and another during an emergency cesarean after the mother was shot. Neither was beheaded, neither was burned. The White House's subsequent retraction, admitting Biden had never actually seen such evidence, speaks volumes about how this inflammatory lie was crafted and spread. This fabrication served a clear purpose: to dehumanize Palestinians and justify what would become one of history's most brutal military campaigns against civilians. Senior Israeli military officers, standing in front of cameras at various locations, repeatedly told these stories to international journalists, knowing they would be amplified globally. Yet when pressed for evidence, none could be produced. This pattern of manufacturing horror stories reveals more about the propaganda machine than any truth on the ground. The White House's retraction speaks volumes - not just about this specific claim, but about the broader campaign of misinformation designed to justify what would become one of the most devastating military campaigns against civilian populations in recent history.",
        },
        resources: [
          'https://www.youtube.com/watch?v=_0atzea-mPY',
          'https://www.youtube.com/watch?v=bFEurGy05ps',
          'https://www.lemonde.fr/en/les-decodeurs/article/2024/04/03/40-beheaded-babies-the-itinerary-of-a-rumor-at-the-heart-of-the-information-battle-between-israel-and-hamas_6667274_8.html',
        ],
      },
      burned_children: {
        title: 'The Burned Children Piles Narrative',
        zionist_claim:
          "ZAKA's Yosi Landau claimed finding 'two piles of 10 children each, tied and burned' in Be'eri kibbutz, a story that spread rapidly through international media and was used to justify military action.",
        palestine_response: {
          description:
            "The alleged mass burning of children collapses under investigative scrutiny. The documentary's comprehensive victim list reveals only two 12-year-old twins died at Be'eri. When pressed for evidence, Landau's story began to unravel - first admitting confusion about ages ('18-year-olds, 20-year-olds...'), then failing to provide any photographic evidence of his claims. More tellingly, many of the burned victims initially claimed as Israeli civilians were later admitted by Israel itself to be Palestinians, raising disturbing questions about who actually caused these deaths and why these bodies were burned. The Israeli government initially claimed 1,400 casualties, later revising this number down to 1,200, acknowledging they had mistaken burned Palestinian bodies for Israeli ones. This admission raises serious questions about the nature of these deaths and who was responsible for the burning of these bodies. The pattern of inflammatory allegations followed by quiet retractions reveals a systematic effort to manipulate public opinion and justify military actions. These fabricated atrocities serve a calculated purpose: as media analyst Mark Owen Jones explains, 'If you can activate people's sense of disgust, they're more likely to support dire retribution against Palestinians.' This manufactured narrative has been used to justify real horrors inflicted upon Palestinian civilians.",
        },
        resources: [
          'https://www.youtube.com/watch?v=_0atzea-mPY',
          'https://www.youtube.com/watch?v=bFEurGy05ps',
        ],
      },
      tortured_family: {
        title: 'The Tortured Family Narrative',
        zionist_claim:
          "Secretary Blinken described a family of four tortured at breakfast - claiming the father's eyes were gouged out, the mother's breast cut off, and the children's limbs amputated before execution, presenting this as evidence of Hamas's brutality.",
        palestine_response: {
          description:
            "This sensationalized tale, like others, crumbles when faced with actual evidence. The documentary's thorough analysis found no victims matching these graphic descriptions in any verified casualty lists. This pattern of manufacturing increasingly horrific stories reveals more about the propaganda machine than any truth on the ground. The systematic nature of these fabrications becomes clear when examining how they spread - from initial claims by ZAKA volunteers, amplified by Israeli officials, and then broadcast globally through diplomatic channels. Secretary Blinken's repetition of these unverified claims in official capacity shows how deeply embedded this disinformation campaign became in diplomatic discourse. The absence of any evidence supporting these specific claims, despite Israel's careful documentation of actual October 7th victims, speaks volumes. These fabricated atrocities serve a calculated purpose: to generate public support for actions that would otherwise be difficult to justify. The escalating nature of these claims - each more horrific than the last - reveals a deliberate strategy to overwhelm public sentiment and suppress critical questioning. This manufactured narrative of horror stories, later proven false, has been used to justify real horrors inflicted upon Palestinian civilians, resulting in the deaths of over 31,000 Palestinians, including 13,000 children.",
        },
        resources: [
          'https://www.youtube.com/watch?v=_0atzea-mPY',
          'https://www.youtube.com/watch?v=bFEurGy05ps',
        ],
      },
      pregnant_woman: {
        title: 'The Mutilated Pregnant Woman Narrative',
        zionist_claim:
          "ZAKA's Yosi Landau claimed witnessing a pregnant woman with 'her stomach butchered open' and her fetus stabbed, presenting this as evidence of Hamas's savagery.",
        palestine_response: {
          description:
            "This inflammatory claim dissolves under the slightest scrutiny. Not only did Be'eri kibbutz officially deny this account, but when pressed for photographic evidence, Landau could only produce an unidentifiable charred image. No victim matching this graphic description appears in the comprehensive casualty list. When challenged to provide evidence during the documentary interview, Landau's response revealed the hollowness of his claims: 'I will not put it in front of the camera,' followed by showing an unidentifiable burned image that contained no evidence of his graphic claims. This pattern of manufacturing atrocity stories, later proven false, reveals a systematic attempt to justify the unprecedented violence unleashed on Gaza's civilian population. The documentary exposes how these unverified claims were deliberately spread through media channels and diplomatic networks, creating a narrative that served to dehumanize Palestinians and justify collective punishment. The fact that Israeli officials continued to promote these stories even after their own communities denied them reveals the calculated nature of this propaganda campaign.",
        },
        resources: [
          'https://www.youtube.com/watch?v=_0atzea-mPY',
          'https://www.youtube.com/watch?v=bFEurGy05ps',
        ],
      },
      systematic_rape: {
        title: 'The Systematic Rape Narrative',
        zionist_claim:
          'Israel alleged widespread and systematic rape occurred on October 7th, launching a global campaign criticizing the UN and other institutions for supposed inaction.',
        palestine_response: {
          description:
            "The systematic manufacturing of rape allegations exposes a calculated propaganda campaign. After five months, the truth has emerged starkly different from initial claims. Israeli police were forced to admit having 'no specific bodies' to match their rape allegations. The UN special representative found no tangible visual evidence of rape in their comprehensive review. Even more telling is Israel's persistent refusal to allow independent investigations while continuing to amplify unverified claims. The New York Times' attempt to substantiate these allegations further exposed their fragility - when they featured a central rape claim, it was publicly refuted by the victim's own family, who stated it was impossible given their communication with the victim minutes before her death. The investigation revealed a former Israeli intelligence official among the report's authors, who had previously endorsed genocidal social media posts calling for Gaza to be turned into a slaughterhouse. This weaponization of sexual violence allegations follows a documented pattern of manufacturing atrocity stories to justify military actions. As media analyst Mark Owen Jones explains, 'If you can activate people's sense of disgust, they're more likely to support dire retribution against Palestinians.' The blocking of independent investigations while spreading unproven allegations speaks volumes about the true nature of these accusations. This manufactured narrative of horror stories, later proven false, has been used to justify real horrors inflicted upon Palestinian civilians - a military campaign that has killed over 31,000 Palestinians, 44% of them children. The pattern is clear: initial shocking allegations receive widespread media coverage, while subsequent corrections or retractions go largely unnoticed, serving the broader agenda of justifying unprecedented violence against a civilian population.",
        },
        resources: [
          'https://www.youtube.com/watch?v=_0atzea-mPY',
          'https://www.youtube.com/watch?v=bFEurGy05ps',
          'https://www.cnn.com/2024/08/09/world/video/israel-sde-teiman-alleged-prisoner-abuse-footage-diamond-tsr-digvid'
        ],
      },
      only_democracy: {
        title: 'The Only Democracy: Examining Democratic Claims',
        zionist_claim:
          "Israel presents itself as the Middle East's sole democracy, a beacon of Western values in the region.",
        palestine_response: {
          description:
            'Can democracy coexist with military rule over millions who cannot vote or enjoy equal rights? The Israeli system employs different laws for different ethnic groups, restricting movement, land rights, and family reunification for Palestinians. Genuine democracy should not involve segregated roads or military courts based on ethnicity. This selective application of democratic principles contradicts the very definition of democratic values.',
        },
      },
      historical_connection: {
        title: 'Historical Connection to the Land',
        zionist_claim:
          'Israel bases its claim to the land on a historical and religious connection dating back to biblical times, considering it the ancestral homeland of the Jewish people as documented in religious texts and archaeological findings.',
        palestine_response: {
          description:
            'Can a historical claim truly be based on ancient writings alone, while overlooking the continuous lives and presence of others on the land? Palestinians have maintained a deep, uninterrupted bond with this land through generations, with documented Arab presence predating the modern era. This connection is more than historical—it represents a living legacy and identity rooted in centuries of habitation, cultural development, and farming. For Palestinians, this land is not only a heritage; it is home. Our communities have continuously lived here since the 7th century, building a relationship with the land that is both spiritual and practical.',
        },
        resources: [
          'https://www.youtube.com/watch?v=kPE6vbKix6A',
          'https://www.aljazeera.net/encyclopedia/2004/10/3/%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%85%D9%86%D8%B0-%D8%A7%D8%B3%D8%AA%D9%88%D8%B7%D9%86%D9%87%D8%A7-%D8%A7%D9%84%D9%83%D9%86%D8%B9%D8%A7%D9%86%D9%8A%D9%88%D9%86#:~:text=%D8%A8%D8%AF%D8%A3%D8%AA%20%D8%A3%D9%88%D9%84%D9%89%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9%20%D8%A7%D9%84%D9%87%D8%A7%D9%85%D8%A9,%D9%85%20%D8%AD%D9%8A%D9%86%D9%85%D8%A7%20%D8%BA%D8%B2%D8%AA%D9%87%D8%A7%20%D8%A7%D9%84%D9%82%D8%A8%D8%A7%D8%A6%D9%84%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D8%AA%D9%8A%D8%A9',
        ],
      },
      ancient_jewish_kingdoms: {
        title: 'Ancient Jewish Kingdoms',
        zionist_claim:
          'Israel cites the existence of ancient Jewish kingdoms as evidence of historical sovereignty and legitimate claim to the land, pointing to archaeological findings and biblical accounts of the kingdoms of Israel and Judah.',
        palestine_response: {
          description:
            'How does ancient political control translate to modern territorial rights? If ancient kingdoms determined today’s borders, wouldn’t maps of every nation need redrawing? The existence of ancient Jewish kingdoms represents only one chapter in a longer, diverse historical narrative that includes numerous civilizations and peoples. These kingdoms ruled for a relatively brief period within the extensive history of the region, overlooking countless generations of Palestinians who have cultivated and developed a profound connection to this land.',
        },
        resources: [
          'https://www.aljazeera.net/encyclopedia/2004/10/3/%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%85%D9%86%D8%B0-%D8%A7%D8%B3%D8%AA%D9%88%D8%B7%D9%86%D9%87%D8%A7-%D8%A7%D9%84%D9%83%D9%86%D8%B9%D8%A7%D9%86%D9%8A%D9%88%D9%86#:~:text=%D8%A8%D8%AF%D8%A3%D8%AA%20%D8%A3%D9%88%D9%84%D9%89%20%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9%20%D8%A7%D9%84%D9%87%D8%A7%D9%85%D8%A9,%D9%85%20%D8%AD%D9%8A%D9%86%D9%85%D8%A7%20%D8%BA%D8%B2%D8%AA%D9%87%D8%A7%20%D8%A7%D9%84%D9%82%D8%A8%D8%A7%D8%A6%D9%84%20%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D8%AA%D9%8A%D8%A9',
        ],
      },
      religious_significance: {
        title: 'Religious Significance',
        zionist_claim:
          "Israel emphasizes the land's deep Jewish religious significance, particularly Jerusalem, citing biblical connections and religious texts that establish it as the promised land for the Jewish people.",
        palestine_response: {
          description:
            'Why should religious significance translate to exclusive political control, especially in a place sacred to multiple faiths? The land holds deep religious importance not only for Jews but also for Muslims and Christians. For Muslims, Al-Aqsa Mosque represents the third holiest site in Islam, while Christians revere the Church of the Holy Sepulchre and other sacred sites. Prioritizing one religious connection over others ignores the land’s historical role as a shared spiritual center that has enriched its cultural heritage across centuries.',
        },
      },
      jerusalem_holy_city: {
        title: 'Jerusalem as a Holy City',
        zionist_claim:
          "Israel claims Jerusalem as its 'eternal, undivided capital' based on its historical Jewish connection and biblical significance.",
        palestine_response: {
          description:
            'If a city is sacred to three religions, how can one claim exclusive sovereignty? Throughout Islamic rule, Muslims, Jews, and Christians worshiped freely in Jerusalem. Despite its profound significance in Islam, Muslim rulers never attempted to establish exclusive Islamic control over the city. For centuries, Jerusalem remained a city of coexistence, with a character of multicultural harmony respected under various rulers. This history reveals that Jerusalem’s strength lies in its shared significance and protection for all faiths.',
        },
        resources: [
          'https://www.youtube.com/watch?v=4ucq1R5Zt5o',
          'https://www.aljazeera.net/politics/2017/4/24/%D8%A7%D9%84%D9%82%D8%AF%D8%B3-%D8%A8%D9%88%D8%A7%D8%A8%D8%A9-%D8%A7%D9%84%D8%A3%D8%B1%D8%B6-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B3%D9%85%D8%A7%D8%A1#:~:text=%22%D8%B3%D9%8F%D8%A8%D9%92%D8%AD%D9%8E%D8%A7%D9%86%D9%8E%20%D8%A7%D9%84%D9%8E%D9%91%D8%B0%D9%90%D9%8A%20%D8%A3%D9%8E%D8%B3%D9%92%D8%B1%D9%8E%D9%89%20%D8%A8%D9%90%D8%B9%D9%8E%D8%A8%D9%92%D8%AF%D9%90%D9%87%D9%90%20%D9%84%D9%8E%D9%8A%D9%92%D9%84%D9%8B%D8%A7,%D8%A3%D9%86%D9%87%D8%A7%20%D8%A8%D9%88%D9%91%D8%A7%D8%A8%D8%A9%20%D8%A7%D9%84%D8%B3%D9%85%D8%A7%D8%A1%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%A3%D8%B1%D8%B6',
        ],
      },
      contemporary_challenges: {
        title: 'Contemporary Challenges to Historical Harmony',
        zionist_claim:
          'Zionist narratives often emphasize the need for a secure Jewish state, suggesting that exclusive control over holy sites and historic neighborhoods is necessary for preservation.',
        palestine_response: {
          description:
            'Can historical harmony be preserved through exclusion and control? Today, restrictions on Muslim and Christian access to sacred sites, the displacement of Palestinian residents, and demographic changes to Jerusalem’s historic neighborhoods challenge the spirit of coexistence. Altering the city’s character and redefining the status quo disrupts the mutual respect that has enabled multiple faiths to thrive together, undermining a centuries-old balance.',
        },
      },
      cultural_linguistic_ties: {
        title: 'Cultural and Linguistic Ties',
        zionist_claim:
          'Israel emphasizes the revival of Hebrew and Jewish cultural practices as evidence of an unbroken connection to the land, presenting it as a restoration of ancient traditions.',
        palestine_response: {
          description:
            'How does reviving an ancient language justify displacing a living culture? Palestinian cultural practices, traditions, and language have thrived in the region for over thirteen centuries, creating a continuous and evolving heritage. The destruction of Palestinian cultural heritage sites in recent conflicts represents an attempt to erase this living culture. Preserving the region’s cultural integrity means respecting the history and traditions that all communities have contributed over centuries.',
        },
      },
      archaeological_evidence: {
        title: 'Archaeological Evidence',
        zionist_claim:
          'Israel frequently cites archaeological discoveries as proof of ancient Jewish presence, using these findings to support territorial claims and historical narratives.',
        palestine_response: {
          description:
            'Why does archaeological evidence selectively appear during conflicts, with non-Jewish sites often targeted and destroyed? Gaza’s rich archaeological record reflects its role as a crossroads of civilizations, yet recent conflicts have seen the deliberate destruction of Islamic and Christian sites. The pattern of erasure not only affects artifacts but also attempts to eliminate the historical evidence that highlights a shared, multicultural heritage, undermining Palestinian cultural identity and continuity.',
        },
        resources: [
          'https://ar.shafaqna.com/AR/396313/',
          'https://www.almodon.com/society/2024/10/20/%D8%B3%D8%A8%D8%B9%D8%A9-%D9%85%D8%B3%D8%A7%D8%AC%D8%AF-%D9%88%D9%83%D9%86%D9%8A%D8%B3%D8%A9-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84-%D8%AA%D8%AF%D9%85%D8%B1-%D8%A2%D8%AB%D8%A7%D8%B1-%D9%84%D8%A8%D9%86%D8%A7%D9%86-%D9%88%D8%AA%D8%B1%D8%A7%D8%AB%D9%87',
        ],
      },
      exile_and_return: {
        title: 'Exile and Return',
        zionist_claim:
          'Israel presents the establishment of the state as a return from exile, framing it as the fulfillment of an ancient promise and the restoration of Jewish sovereignty.',
        palestine_response: {
          description:
            'If exile creates a right of return, why is this right denied to Palestinians who still hold deeds and keys to homes from which they were forcibly displaced? The Nakba of 1948 is not a distant memory but a living reality for over 750,000 Palestinians who were expelled, their villages destroyed, and properties confiscated. UN Resolution 194 affirms their right to return, yet today they are denied this right, even as the expansion of settlements encroaches on their lands.',
        },
        resources: ['https://www.youtube.com/watch?v=4ucq1R5Zt5os'],
      },
      zionism_origins_implications: {
        title: 'Modern Zionism: Origins and Implications',
        zionist_claim:
          'Zionism presents itself as a movement of Jewish national liberation, seeking to restore the Jewish people to their ancestral homeland.',
        palestine_response: {
          description:
            'If Zionism represented authentic Jewish interests, why was it founded by secular European leaders, and why did many Orthodox Jewish communities oppose it? The roots of Zionism align with European colonial ideals rather than Jewish traditions, as early leaders openly discussed population transfer plans. This historical evidence, along with forced displacement and settlement expansions, challenges the narrative that Zionism is merely a cultural restoration.',
        },
        resources: [
          'https://www.huckmag.com/article/zionism-is-not-judaism-myths-about-israel',
        ],
      },
      self_determination: {
        title: 'Right to Self-Determination: A Selective Application',
        zionist_claim:
          'Israel champions self-determination for Jewish people while actively denying the same right to Palestinians.',
        palestine_response: {
          description:
            'How can one group’s self-determination be justified by denying another’s? The right to self-determination should be universal, yet Palestinians face systematic restrictions on movement, resources, and land ownership. Israel’s demographic policies and land appropriation efforts are incompatible with genuine democratic values, undermining the basic principles of self-determination for all.',
        },
      },
      security_expansion: {
        title: 'Security vs. Expansion: The Paradox of Protection',
        zionist_claim:
          'Israel cites security concerns to justify its policies, including the separation wall, settlements, and military operations.',
        palestine_response: {
          description:
            'How does security justify continuous land appropriation and resource control? If the goal is truly defensive, why do these measures consistently expand Israeli control? The route of the wall, settlement placements, and military zones reveal a pattern prioritizing territorial expansion over protection, systematically displacing Palestinians under the guise of security.',
        },
      },
      land_without_people: {
        title: 'A Land Without a People',
        zionist_claim:
          'Israel historically promoted the idea that Palestine was largely empty, awaiting Jewish return.',
        palestine_response: {
          description:
            "If the land was empty, why were there reports on removing existing populations and villages? Ottoman and British records show thriving Palestinian societies with established trade, agriculture, and urban centers. This notion of an 'empty land' erases the reality of Palestinian society, a society that was systematically displaced to create an artificial narrative of entitlement.",
        },
        resources: [
          'https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%82%D8%A8%D9%84-%D8%A7%D9%84%D8%B4%D8%AA%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-%D8%A7%D9%84%D9%85%D8%B5%D9%88%D8%B1-%D9%84%D9%84%D8%B4%D8%B9%D8%A8-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A-1876-1948-%D9%88%D9%84%D9%8A%D8%AF-%D8%A7%D9%84%D8%AE%D8%A7%D9%84%D8%AF%D9%8A-pdf',
        ],
      },
      david_vs_goliath: {
        title: 'David vs. Goliath: The Myth of the Underdog',
        zionist_claim:
          'Israel portrays itself as a small nation defending against overwhelming Arab forces.',
        palestine_response: {
          description:
            'How can a nuclear-armed state with one of the world’s most advanced militaries claim to be David? Israel’s military aid, advanced weapons, and technological edge dwarf the resources available to Palestinians, who lack a formal army. This narrative of being the underdog disregards the reality of power imbalances and the devastation experienced by Palestinian civilians.',
        },
        resources: [
          'https://www.youtube.com/watch?v=kPE6vbKix6A',
          'https://www.sajr.co.za/david-and-goliath-reversed-in-the-middle-east/s',
          'https://yetkinreport.com/en/2023/10/11/hamas-israel-and-palestine-who-is-david-who-is-goliath/',
        ],
      },
      holocaust_legacy: {
        title: 'Holocaust Legacy and Palestinian Displacement',
        zionist_claim:
          'Israel cites the Holocaust as justification for establishing a Jewish state in Palestine.',
        palestine_response: {
          description:
            'Why should Palestinians pay the price for European anti-Semitism? The tragic legacy of the Holocaust does not justify creating new refugees. Palestinians were displaced to establish Israel, despite alternative territory offers, generating generational trauma and dispossession among Palestinian families. Today, they continue to face barriers to returning to their original homes, even as new settlements rise on their lands.',
        },
        resources: [
          'https://yplus.ps/wp-content/uploads/2021/01/Pappe-Ilan-The-Ethnic-Cleansing-of-Palestine.pdf',
        ],
      },
      alshifa_tunnel: {
        title: "Al-Shifa Hospital and Hamas's Alleged Command Center",
        zionist_claim:
          "Israel alleges that Al-Shifa Hospital serves as Hamas's military headquarters, complete with an underground command center and tunnel network. Their key 'evidence' included displaying a basic Arabic calendar, which they claimed was a 'guarding list where every terrorist writes his name and every terrorist has his own shift guarding the people that were here.'",
        palestine_response: {
          description:
            "The desperation of Israeli propaganda reaches new levels of absurdity in their theatrical presentation of 'evidence' at Al-Shifa Hospital. First, it's crucial to note that these tunnels were actually built by Israel itself in the 1980s, a fact admitted by former Israeli Prime Minister Ehud Barak in a stunning moment of candor on CNN: 'You know, decades ago we were running the place, so we helped them — it was decades, many decades ago, probably four decades ago that we helped them to build these bunkers in order to enable more space for the operation of the hospital.' After initially claiming Al-Shifa Hospital was effectively 'Hamas\\'s Pentagon' - a narrative eagerly amplified by the Biden administration - the IDF\\'s first round of 'evidence' amounted to little more than a few automatic rifles supposedly found behind an MRI machine and a conveniently placed combat vest with a Hamas logo. Even Israel\\'s most die-hard supporters struggled to reconcile this meager finding with the sweeping assertions they had made about Al-Shifa\\'s supposed military significance. The comedy of errors reached its peak when IDF spokesperson Rear Admiral Daniel Hagari presented an ordinary Arabic wall calendar as some sort of sinister 'terrorist guard rotation schedule.' This moment of profound ignorance - being unable to recognize a basic calendar in a region where Arabic is the primary language - reveals the manufactured nature of their entire propaganda campaign. The onus remains on both the Israeli government and its sponsors in the Biden administration to prove their sweeping claims about Hamas\\'s alleged use of Al-Shifa Hospital. This evidence should be strong enough to irrefutably justify all the suffering and death inflicted on the patients, doctors, and nurses at Al-Shifa. Such a conclusion is unfathomable when placed in the context of the civilian suffering caused by Israel\\'s siege on the hospital. According to the documentary evidence, when the UN humanitarian team led by the World Health Organization visited Al-Shifa on November 18, its staff described the hospital as a 'death zone,' reporting signs of shelling and gunfire, with a mass grave at the entrance containing more than 80 bodies. This reality stands in stark contrast to Israel\\'s carefully constructed narrative of surgical precision against militant targets. The pattern is clear: Israel makes sweeping allegations to justify military actions, presents questionable or absurd evidence, and then relies on the fog of war to obscure the devastating humanitarian consequences of their attacks on medical facilities. Their willingness to present a simple calendar as evidence of terrorist activity demonstrates not just the weakness of their claims, but their contempt for international intelligence and their desperation to justify what international law experts increasingly recognize as war crimes.",
        },
        resources: [
          'https://apnews.com/world-news/still-wrecked-from-past-israeli-raids-hospitals-in-northern-gaza-come-under-attack-again-00000192eebfd414a79fffbf88cc0000',
          'https://theintercept.com/2023/11/21/al-shifa-hospital-hamas-israel/',
          'https://www.youtube.com/watch?v=kPE6vbKix6A',
        ],
      },
      aid_theft: {
        title: 'Hamas and Humanitarian Aid Distribution',
        zionist_claim:
          "Israel and its Western allies allege that Hamas is stealing humanitarian aid from Palestinian civilians, hoarding resources for its fighters while leaving the population to starve. They claim this proves Hamas doesn't care about Palestinian civilians and is responsible for their suffering.",
        palestine_response: {
          description:
            "The bankruptcy of Israeli propaganda is starkly exposed by their own forensic evidence about Yahya Sinwar\\'s death. According to Israel\\'s own national forensic institute - not Palestinian sources, not Hamas allies, but Israel\\'s own medical examiners - Sinwar had not eaten for 72 hours before his death. This finding from their own autopsy delivers a devastating blow to their carefully crafted narrative about Hamas leaders living in luxury while Palestinians starve. Here was Hamas\\'s highest-ranking leader, the man Israel painted as living comfortably underground while hoarding resources, dying with an empty stomach alongside his people. The same leader they claimed was stealing aid was, in fact, sharing the hunger of Gaza\\'s civilians. This revelation doesn\\'t just contradict Israel\\'s propaganda - it completely shatters it. The truth becomes even more evident when we examine the continued support Hamas receives from Palestinians despite over a year of devastating warfare. If Israel\\'s narrative were true - if Hamas were indeed stealing aid from its own people - how do we explain this enduring support? The answer is simple: Palestinians on the ground can see through these lies because they witness the reality firsthand. Israel\\'s desperate attempts to paint Hamas as indifferent to Palestinian suffering serve a calculated purpose: to deflect attention from their own role in creating this humanitarian catastrophe. By manufacturing stories about aid theft, they attempt to justify their brutal siege that has pushed 2.3 million Palestinians to the brink of starvation. Yet their own evidence - their own forensic findings - expose these claims as propaganda designed to justify collective punishment. This pattern of fabrication follows Israel\\'s documented strategy of manufacturing narratives to justify its actions to Western audiences. Just as they invented stories about beheaded babies and systematic rape to justify their initial assault, they now invent tales of aid theft to justify their starvation siege. But just as those earlier claims collapsed under scrutiny, their claims about aid theft are being exposed - ironically, by their own evidence. The evidence from Israel\\'s own autopsy report stands as a powerful testament to the truth: Hamas\\'s leadership shares the fate of its people, directly contradicting Israel\\'s attempts to portray them as selfish exploiters. This reality explains why, despite Israel\\'s relentless propaganda campaign and military assault, Palestinians continue to support their resistance leadership - because they recognize who is truly responsible for their suffering.",
        },
        resources: [
          'https://www.middleeastmonitor.com/20241104-autopsy-reveals-yahya-sinwar-hadnt-eaten-for-3-days-before-assassination/',
          'https://independentpress.cc/autopsy-reveals-yahya-sinwar-hadnt-eaten-for-3-days-before-assassination/2024/11/04/',
          'https://www.pbs.org/newshour/world/u-s-envoy-says-israel-has-not-shown-evidence-that-hamas-is-diverting-un-aid-in-gaza',
        ],
      },
      targeting_hospitals: {
        title: "Hamas uses hospitals as military command centers.",
        zionist_claim:
          "Israel maintains that Hamas systematically uses hospitals as military command centers and weapons storage facilities, forcing Israel to target these medical facilities. As IDF spokesman Rear Admiral Daniel Hagari stated, 'If we intend to take down the military infrastructure in the north, we have to take down the philosophy of using the hospitals.' They claim this justifies their attacks on multiple medical facilities across Gaza.",
        palestine_response: {
          description:
            "The Israeli propaganda machine\\'s attempt to justify its unprecedented assault on Gaza\\'s healthcare system reveals a calculated strategy to normalize war crimes through manufactured narratives. When examining their claims against multiple hospitals - from Al-Shifa to the Indonesian Hospital, from Kamal Adwan to Al-Awda - a clear pattern emerges of making sweeping allegations followed by minimal or no evidence. Take the Indonesian Hospital, where Israel claimed an underground command-and-control center existed, releasing blurry satellite images of alleged tunnel entrances. After besieging and raiding the facility, the military presented no evidence of the underground facility they had so confidently claimed existed. When pressed specifically about finding these tunnels, the military spokesman\\'s office tellingly refused to respond. In the case of Al-Awda Hospital, the military has never made any claims of Hamas presence. When asked what intelligence led troops to besiege and raid the hospital, the military spokesman\\'s office again remained silent. Yet this didn\\'t prevent them from conducting a brutal siege that led to the deaths of medical staff, including Dr. Mahmoud Abu Nujaila and several nurses killed by sniper fire. This systematic targeting of healthcare infrastructure serves a dual purpose: First, it aims to make life unsustainable for Palestinians in Gaza by destroying their medical infrastructure. Second, it provides cover for the killing of journalists and medical workers who might document these war crimes. The unprecedented killing of 122 journalists in Gaza - the highest number in any conflict since World War II - follows the same pattern of alleging Hamas presence to justify targeting civilian infrastructure. The reality on the ground is stark: According to international medical workers who spent years in these facilities, there was never any evidence of military activity. As one European doctor stated about Al-Shifa, 'I\\'ve never seen a soldier inside the hospitals, I\\'ve never seen a command center anywhere. I have seen the signs on the doors saying \\'no arms in here\\' and I for one would never have worked there if these hospitals were military sites.' International humanitarian law is clear: even if there were any doubt about a hospital being used by a party to commit harmful acts, it remains a protected site. Even if a building loses its special protection, all people inside retain theirs. Yet Israel has consistently violated these principles, using unproven allegations to justify what the UN investigation commission has determined to be 'a concerted policy to destroy the healthcare system of Gaza.' This campaign has succeeded in creating what Dr. Zaher Sahloul, president of MedGlobal, describes as the destruction of the fundamental sense of safety that should surround hospitals. 'This war has become a scar in the minds of every doctor and nurse,' he notes, reflecting how Israel\\'s actions have transformed places of healing into 'places of death' in the minds of civilians. The systematic nature of these attacks, coupled with the consistent pattern of making allegations without proof, reveals not isolated military decisions but a deliberate strategy to destroy Gaza\\'s healthcare infrastructure while manufacturing consent for war crimes through propaganda. The world must see through these transparent attempts to justify the unjustifiable.",
        },
        resources: [
          'https://apnews.com/world-news/still-wrecked-from-past-israeli-raids-hospitals-in-northern-gaza-come-under-attack-again-00000192eebfd414a79fffbf88cc0000',
          'https://www.youtube.com/watch?v=kPE6vbKix6A',
        ],
      },
      human_shields: {
        title: 'The Human Shields Narrative',
        zionist_claim:
          'Hamas uses Palestinians as human shields, deliberately operating from civilian areas and hiding behind the population, which explains and justifies the high civilian death toll in Gaza. As Israeli officials repeatedly state, Hamas bears responsibility for civilian casualties because they operate from within civilian infrastructure.',
        palestine_response: {
          description:
            "The cynical Israeli accusation about Hamas using human shields serves as a calculated smokescreen to justify what has become one of history\\'s most devastating campaigns against civilians. This propaganda crumbles under the weight of three crucial realities. First, Israel\\'s own evidence contradicts their narrative. Yahya Sinwar\\'s final stand, captured on Israeli military cameras, shows Hamas\\'s highest leader fighting alone in Tel Al-Sultan, Rafah - an area deliberately evacuated of civilians for three months. If Hamas\\'s top commander chose to fight without using civilians as shields, this fundamentally undermines Israel\\'s core narrative about Hamas\\'s tactics. Second, despite possessing extensive surveillance capabilities and capturing countless hours of combat footage on October 7th, Israel has failed to produce a single piece of visual evidence showing Hamas using human shields. This glaring absence becomes even more telling when contrasted with the abundant documentation of Israeli forces using Palestinians as human shields - a practice so well-documented that even Israel\\'s own Supreme Court had to rule against it. International investigations, including Al Jazeera\\'s exclusive report supported by multiple media outlets, have exposed Israel as the actual perpetrator of using human shields. The evidence is overwhelming: Israeli soldiers forcing Palestinians into unexplored tunnels, dressing detainees in Israeli military uniforms to check for explosives, and using civilians to enter potentially booby-trapped buildings. As Professor Michael Link, former UN Special Rapporteur for human rights, notes, this practice violates the Geneva Conventions and constitutes a war crime. Third, the historical record exposes Israel\\'s projection of its own tactics onto Hamas. As documented by Israel\\'s leading human rights group B\\'Tselem, 'Since the beginning of the occupation in 1967, Israeli security forces have repeatedly used Palestinians in the West Bank and Gaza Strip as human shields.' This practice dates back even further, as independent journalist Anthony Lowenstein reveals, to British colonial tactics that early Zionist forces adopted and refined. The reality is that Israel\\'s accusation about human shields serves a cynical purpose: to justify the killing of over 50,000 Palestinians, 80% of whom are women and children. This propaganda technique follows a documented pattern: accuse the Palestinians of what Israel itself does, then use that accusation to justify collective punishment. We saw this with claims about beheaded babies (proven false), systematic rape (no evidence found), and now human shields. As Professor Link emphasizes, international humanitarian law\\'s core principle is to separate civilians from combatants. The evidence shows it is Israel, not Hamas, that systematically violates this principle - not only by using Palestinian civilians as human shields but by targeting civilian infrastructure with such intensity that UN officials now describe the IDF as 'one of the most criminal armies in the world.' The truth is clear: Israel\\'s human shields accusation is a projection of its own documented practices, designed to manufacture consent for what international law experts increasingly recognize as genocide. The absence of evidence for their claims, contrasted with abundant proof of their own use of human shields, exposes this propaganda for what it is - a cynical attempt to justify the unjustifiable.",
        },
        resources: [
          'https://youtu.be/TydoLmhMaDo',
          'https://www.youtube.com/watch?v=ZYzEi1UlpdE',
          'https://www.nytimes.com/2024/10/14/world/middleeast/israel-gaza-military-human-shields.html',
          'https://www.youtube.com/watch?v=gSbWuGSGOBo',
          'https://www.youtube.com/watch?v=DroLbOyy87I',
        ],
      },
      october_seventh_casualties: {
        title: 'The Truth About October 7th Casualties',
        zionist_claim:
          "Israel asserts that Hamas killed 1,400 people during October 7th attacks, attributing all deaths to Hamas fighters and using this number to justify their 'proportional response' in Gaza.",
        palestine_response: {
          description:
            "The reality of October 7th casualties reveals a far more complex and disturbing truth that Israel has tried to obscure. Their initial death toll of 1,400 has been quietly revised downward to 1,154 - a revision that exposes a darker reality about who actually caused many of these deaths. The Al Jazeera investigation\\'s forensic analysis reveals several crucial facts that shatter Israel\\'s narrative. Of the 1,154 total casualties, the breakdown tells a different story than Israel\\'s propaganda: - 256 were soldiers - 53 were police and security forces - 63 were civilian security guards - 782 were unarmed civilians More crucially, at least 18 victims were killed by Israeli ground troops themselves. Several others died beneath rubble in circumstances that remain unclear, raising serious questions about Israel\\'s 'shoot first' response during the chaos. The investigation reveals the brutal reality of Israel\\'s 'Hannibal Directive' - a military protocol where Israeli forces would rather kill their own civilians than allow them to be taken hostage. The evidence shows Israeli helicopter gunships fired indiscriminately at vehicles leaving Gaza, despite being unable to distinguish between Hamas fighters, Israeli civilians, or hostages. As one Israeli pilot admitted, they had to rely on WhatsApp groups to identify targets - a shocking admission of reckless disregard for civilian life. Perhaps most tellingly, Israel\\'s own military later admitted that many bodies initially counted as Israeli victims were actually Palestinians - so badly burned that they were mistakenly identified as Israelis. As an Israeli official stated: 'We originally said in the atrocious Hamas attack on our people on October 7th we had the number at 1,400 casualties and now we\\'ve revised that down to 1,200 because we understood that we had overestimated... there were actually bodies that were so badly burnt we thought they were ours, in the end apparently they were Hamas terrorists.' This admission raises disturbing questions: Who really burned these bodies? Why were Palestinians burned so badly they were unidentifiable? And most importantly, how many of the deaths Israel attributes to Hamas were actually caused by their own forces\\' indiscriminate response? The investigation reveals that in multiple kibbutzim, including Be\\'eri where 12 hostages died, Israeli police and military forces opened fire on houses containing both hostages and civilians. These incidents were largely ignored by Western media, despite being reported in Israeli press. This pattern of revelation suggests that Israel\\'s initial narrative about October 7th was crafted not to reveal truth but to justify the unprecedented military campaign that followed. Their own admissions, corrections, and the forensic evidence paint a picture of significant Israeli responsibility for civilian casualties - a reality they\\'ve tried to obscure by attributing all deaths to Hamas. The truth remains: while Hamas bears responsibility for its actions on October 7th, Israel\\'s response and its manipulation of casualty figures reveal a calculated effort to maximize the death toll for propaganda purposes, even if it meant killing their own citizens. This grim reality exposes the hollowness of their claims about a 'proportional response' to October 7th, as they continue to kill tens of thousands of Palestinian civilians in Gaza.",
        },
        resources: [
          'https://www.youtube.com/watch?v=bFEurGy05ps',
          'https://www.youtube.com/watch?v=_0atzea-mPY',
        ],
      },
    },
  },
  ar: {
    translation: {
      nav: {
        siteTitle: 'السردية الفلسطينية (الحقيقة التاريخية)',
      },
      hero: {
        tagline: 'كل قصة مهمة. كل صوت يُحتسب.',
        mainTitle: 'أرضنا. حقيقتنا. قصتنا.',
        subtitle: 'لأجيال، تم إسكات روايتنا، وإعادة كتابة تاريخنا، والتشكيك في وجودنا. اليوم، نستعيد صوتنا.',
        intro: {
          part1: 'تقف هذه المنصة شاهدة على ارتباطنا الدائم بفلسطين - أرض غرس فيها أجدادنا أشجار الزيتون التي ما زالت تثمر، حيث احتفظ أجدادنا بمفاتيح المنازل التي أُجبروا على الفرار منها، حيث يحلم أطفالنا بحرية لم يعرفوها قط.',
          part2: 'هنا، نواجه كل سردية استُخدمت لتبرير سلب ممتلكاتنا. نتحدى كل أسطورة استُخدمت لمحو وجودنا. نوثق كل محاولة لإعادة كتابة تاريخنا. من خلال السجلات التاريخية، والتجارب المعيشة، والحقائق التي لا يمكن إنكارها، نكشف السرديات المبنية بعناية التي استُخدمت لتبرير الاحتلال المستمر لأرضنا.',
          part3: 'من شوارع غزة إلى بساتين الزيتون في الضفة الغربية، من مخيمات اللاجئين في الشتات إلى القرى التي مُحيت من الخرائط لكنها تعيش في ذاكرتنا - هذه قصتنا. ليس كضحايا، بل كشعب يرفض أن يُمحى. وجودنا هو مقاومتنا، ذاكرتنا هي سلاحنا، حقيقتنا هي درعنا.'
        },
        quote: {
          text: "حاولوا دفننا، لم يعلموا أننا بذور.",
          attribution: 'مثل فلسطيني'
        },
        closing: {
          callToAction: 'انضموا إلينا في الحفاظ على روايتنا، وحماية تراثنا، وتعزيز حقيقتنا.',
          impact: 'لأن لكل منزل مهدوم قصة. ولكل شجرة زيتون مقتلعة تاريخ. ولكل عائلة مهجرة الحق في العودة.'
        }
      },
      amsterdam_incident: {
        title: "أحداث مباراة أمستردام والتلاعب الإعلامي",
        zionist_claim: `زعمت إسرائيل أن مواطنيها ومشجعي كرة القدم تعرضوا لهجوم وحشي في أمستردام فيما وصفه مبعوث الولايات المتحدة لمكافحة معاداة السامية بأنه 'يذكر بشكل مروع بالمذابح التقليدية'، حيث نقلت وسائل الإعلام الإسرائيلية عن هجمات غير مبررة من قبل 'مهاجرين من الشرق الأوسط يطاردون اليهود في شوارع أمستردام.' وادعت إسرائيل أنها بحاجة إلى إرسال فرق إنقاذ بعد ما وصفته بـ 'حادث عنيف للغاية' ضد مواطنيها.`,
        palestine_response: {
          description: `تكشف حقيقة حادثة أمستردام عن عملية دعائية إسرائيلية محسوبة تتبع نمطهم المعتاد: الاستفزاز، ثم الهجوم، ثم لعب دور الضحية، ثم التلاعب بالروايات الإعلامية. يكشف تسلسل الأحداث عن استراتيجية مدبرة بدأت حتى قبل المباراة.

نشرت جريدة جيروزاليم بوست مقالاً كاشفاً يعلن أن عملاء الموساد سيرافقون مشجعي مكابي تل أبيب إلى أمستردام - وهو إعلان غير مسبوق يشير إلى التحضير المسبق لما سيتبع. لم يكن هذا بروتوكول أمني قياسي، بل تحضير لاستفزاز مخطط له.

ظهرت النوايا الحقيقية للمشجعين الإسرائيليين في المباراة نفسها، حيث أظهروا استخفافاً صارخاً خلال دقيقة صمت لضحايا الفيضانات الإسبانية - وهي إهانة متعمدة لإسبانيا لاعترافها بفلسطين وموقفها من الإبادة الجماعية في غزة. لكن سلوكهم الأكثر صدمة جاء عندما هتفوا "لا توجد مدارس في غزة لأنه لم يتبق أطفال" - محتفلين بقتل جيشهم لأكثر من 12,000 طفل فلسطيني.

ثم بدأ المشجعون الإسرائيليون حملة عنف واستفزاز في جميع أنحاء أمستردام:
 مهاجمة منازل السكان المحليين
- الاعتداء على سائقي سيارات الأجرة العرب
- تخريب الأعمال التجارية المملوكة للعرب
- تمزيق الأعلام الفلسطينية
- الهتاف "الموت للعرب" وشعارات عنصرية أخرى
- الاعتداء الجسدي على المارة العرب

عندما نظم الشباب المحليون، وخاصة من الجالية المغربية، أنفسهم للدفاع عن مجتمعهم من هذه الهجمات، تم تفعيل آلة الدعاية الإسرائيلية على الفور. في غضون ساعات، بدأت نفس وسائل الإعلام التي تجاهلت الاستفزازات والهجمات الأولية في تصوير الأحداث على أنها "مذبحة" معادية للسامية.

ظهرت الحقيقة من خلال مصادر غير متوقعة. كشفت امرأة هولندية صورت أحد الحوادث الرئيسية كيف كانت وسائل الإعلام الإسرائيلية تسيء تمثيل لقطاتها، مؤكدة أنها أظهرت في الواقع مشجعي مكابي وهم يبدأون العنف ضد مواطن هولندي. حتى صحيفة الديلي ميل المؤيدة تقليدياً لإسرائيل خرجت عن الصف لنقل الحقيقة: أن المشاغبين الإسرائيليين كانوا هم المحرضين الذين مزقوا الأعلام الفلسطينية وهاجموا السكان المحليين.

هذه الحادثة تلخص بشكل مثالي استراتيجية الدعاية الإسرائيلية بعد 7 أكتوبر:
- بدء العنف والاستفزاز
- عند مواجهة المقاومة، ادعاء دور الضحية فوراً
- تعبئة وسائل الإعلام المتواطئة لدفع رواية كاذبة
- استخدام الحادث المفبرك لتبرير المزيد من العدوان
- قمع أو تشويه الأدلة على استفزازاتهم الأولية

تظهر حادثة أمستردام كيفية عمل الدعاية الإسرائيلية - استفزاز العنف، ثم التلاعب بالرواية لتصوير أنفسهم كضحايا، تماماً كما فعلوا مع 7 أكتوبر لتبرير إبادتهم الجماعية في غزة. ولكن تماماً كما ظهرت الحقيقة في أمستردام بفضل الشهود المحليين والصحافة الصادقة، لا يمكن إخفاء الحقيقة الأوسع عن أفعالهم في غزة إلى الأبد من خلال الدعاية.`,
        },
        resources: [
          'https://x.com/Megatron_ron/status/1854899703634153754',
          'https://www.jpost.com/israel-news/sports/article-827683',
          'https://www.dailymail.co.uk/sport/football/article-14053391/Israeli-football-hooligans-Palestine-flags-Ajax-Maccabi-Tel-Aviv.html',
          'https://x.com/Mehmetcanbekli1/status/1854880338427732127',
          'https://x.com/SenpaiTheories/status/1854701914354503721',
          'https://news.sky.com/story/israel-says-it-will-deploy-rescue-mission-after-violent-incident-targeting-israeli-citizens-in-amsterdam-13250370',
          'https://x.com/Megatron_ron/status/1854907447577600437',
          'https://x.com/Johnpatrick500/status/1854841403685142852'
        ]
      },
      sinwar_tunnel: {
        title: 'اختباء السنوار في الأنفاق',
        zionist_claim: 'يحيى السنوار يختبئ في الأنفاق، مستخدماً المدنيين والرهائن كدروع بشرية دون اعتبار لحياة الفلسطينيين، يعيش في مملكته تحت الأرض دون اهتمام بمعاناة الفلسطينيين من أجل قضيته، محيطاً نفسه بالرهائن للحماية.',
        palestine_response: {
          description: 'قبل التطرق إلى هذه الافتراءات، تجدر الإشارة إلى تقييم الرئيس بايدن ووزير الخارجية بلينكن لنتنياهو كشخص غير جدير بالثقة، مؤكدين أن 18 من أصل 19 من مسؤوليه غير صادقين بالمثل. هذا السياق ضروري عند تقييم أي ادعاءات عسكرية إسرائيلية. حقيقة الموقف الأخير لسنوار في تل السلطان برفح تحطم تماماً هذه الافتراءات الإسرائيلية. هنا كان أعلى قائد في حماس، يقاتل في منطقة تم إخلاؤها عمداً من المدنيين لمدة ثلاثة أشهر. لقطات الجيش الإسرائيلي نفسه - ربما أكثر أدلتهم موثوقية ضد روايتهم الخاصة - تظهر سنوار في لحظاته الأخيرة، يقاتل وحيداً في منطقة خالية من الوجود المدني. حتى بعد فقدانه يده اليسرى، واصل القتال بعزيمة لا تتزعزع. هذه الحقيقة الواحدة تدمر السردية الإسرائيلية بأكملها حول اختباء قادة حماس خلف الدروع المدنية. ما هو لافت للنظر بشكل خاص هو أن هذا الدليل يأتي من كاميرات الجيش الإسرائيلي نفسها. ظهرت اللقطات من خلال تسريبات الجنود، الذين ذُهلوا من وجود أنفسهم في قتال مباشر مع سنوار. عندما تتهم إسرائيل حماس بأي عمل، فغالباً ما يكون انعكاساً لتكتيكاتهم الخاصة - نمط متسق لدرجة أنه يعمل كمؤشر عكسي موثوق للحقيقة. أصبحت اتهاماتهم مرآة تعكس استراتيجياتهم الخاصة بدلاً من كشف أي حقيقة عن خصومهم.'
        }
      },
      sinwar_wife: {
        title: 'الحقيبة الفاخرة لزوجة يحيي السنوار',
        zionist_claim: 'تظهر لقطات زوجة السنوار وهي تحمل حقيبة هيرمس بيركين بقيمة 32,000 دولار في الأنفاق بينما يعاني الفلسطينيون من نقص الاحتياجات الأساسية، مما يدل على استغلال قيادة حماس لموارد غزة.',
        palestine_response: {
          description: 'إن يأس الدعاية الإسرائيلية بعد فشلها في تشويه الموقف البطولي الأخير ليحيى السنوار دفعهم لمهاجمة زوجته بلقطات معاد تدويرها من قبل 7 أكتوبر، مفبركين جدلاً حول حقيبة هيرمس بيركين المزعومة بقيمة 32,000 دولار. تتضح سخافة هذا الادعاء بمجرد الفحص السطحي. أي شخص يأخذ لحظة لمقارنة الحقيبتين المعنيتين يمكنه أن يرى بسهولة أنهما ليستا متطابقتين. لكن دعونا نتخيل خيالهم للحظة - تخيل إحضار حقيبة بيركين بقيمة 32,000 دولار إلى نفق تحت الأرض، على عمق 40 متراً، في بيئة تفتقر إلى الضروريات الأساسية. إنه أمر منطقي كركن يخت فاخر في الصحراء. الواقع يقف في تناقض صارخ مع هذه الافتراءات. زوجة السنوار معروفة في المجتمع الفلسطيني كمعلمة قرآن ومربية محترمة، معروفة بتواضعها وتفانيها في الوحدة الأسرية الفلسطينية. اللقطات نفسها تكشف خداع إسرائيل - ملابسها تشبه ملابس نساء فلسطينيات لا حصر لهن خلال الحرب، ملابس بسيطة وعملية متوفرة في أسواق غزة. كل عنصر في الصورة يناقض السردية الإسرائيلية. لباسها المتواضع، المتوافق مع ملابس النساء الفلسطينيات النموذجية، لا يوحي بأي شكل من الأشكال بشخص يحمل حقيبة تساوي عشرات الآلاف من الدولارات. علاوة على ذلك، الاستحالة العملية لاقتناء مثل هذا العنصر الفاخر في غزة المحاصرة - حيث لم تغادرها قط - يكشف سخافة هذه الادعاءات. هذه المحاولة اليائسة لتشويه سمعة عائلة السنوار بعد الفشل في تشويه إرثه تكشف إفلاس الدعاية الإسرائيلية. عندما لم يستطيعوا تشويه سمعة المحارب، حاولوا تشويه سمعة زوجته - وفشلوا في ذلك أيضاً، ونجحوا فقط في إبراز عدم صدقهم ويأسهم.'
        }
      },
      beheaded_babies: {
        title: 'سردية الأطفال المقطوعة رؤوسهم',
        zionist_claim: 'أفاد الجنود الإسرائيليون بالعثور على "40 طفلاً مقطوع الرأس" في كفار عزة، وهو ادعاء تم تضخيمه لدرجة أن الرئيس بايدن نفسه صرح "لم أتخيل أبداً أنني سأرى وأؤكد صوراً لإرهابيين يقطعون رؤوس الأطفال."',
        palestine_response: {
          description: 'يكشف تلفيق سردية "الأطفال المقطوعة رؤوسهم" عمق التلاعب بالدعاية الإسرائيلية. يكشف تحقيق الجزيرة الدقيق في القائمة الكاملة للضحايا حقيقة صارخة: فقط طفلان توفيا في 7 أكتوبر - واحد من رصاصة اخترقت باباً، والآخر خلال عملية قيصرية طارئة بعد إصابة الأم. لم يتم قطع رأس أي منهما، ولم يتم حرق أي منهما. تراجع البيت الأبيض اللاحق، معترفاً بأن بايدن لم ير أبداً مثل هذه الأدلة، يتحدث بوضوح عن كيفية صياغة هذه الكذبة المثيرة ونشرها. خدم هذا التلفيق غرضاً واضحاً: نزع الإنسانية عن الفلسطينيين وتبرير ما سيصبح واحدة من أكثر الحملات العسكرية وحشية ضد المدنيين في التاريخ. وقف ضباط عسكريون إسرائيليون كبار، أمام الكاميرات في مواقع مختلفة، يكررون هذه القصص للصحفيين الدوليين، عالمين أنها ستضخم عالمياً. ومع ذلك عندما طُلب تقديم الأدلة، لم يتمكنوا من تقديم أي شيء. يكشف هذا النمط من تصنيع قصص الرعب المزيد عن آلة الدعاية أكثر من أي حقيقة على الأرض. يتحدث تراجع البيت الأبيض بصوت عالٍ - ليس فقط عن هذا الادعاء المحدد، ولكن عن الحملة الأوسع للتضليل المصممة لتبرير ما سيصبح واحدة من أكثر الحملات العسكرية تدميراً ضد السكان المدنيين في التاريخ الحديث.'
        }
      },
      burned_children: {
        title: 'سردية أكوام الأطفال المحروقين',
        zionist_claim: 'ادعى يوسي لانداو من زاكا العثور على "كومتين من 10 أطفال كل منهما، مربوطين ومحروقين" في كيبوتس بئيري، وهي قصة انتشرت بسرعة عبر وسائل الإعلام الدولية واستُخدمت لتبرير العمل العسكري.',
        palestine_response: {
          description: 'تنهار رواية الحرق الجماعي المزعوم للأطفال تحت التدقيق التحقيقي. تكشف قائمة الضحايا الشاملة في الفيلم الوثائقي عن وفاة توأمين فقط يبلغان من العمر 12 عاماً في بئيري. عندما طُلبت الأدلة، بدأت قصة لانداو في التفكك - معترفاً أولاً بالارتباك حول الأعمار ("18 عاماً، 20 عاماً...")، ثم فشل في تقديم أي دليل تصويري على ادعاءاته. والأكثر دلالة على ذلك، أن العديد من الضحايا المحروقين الذين ادعي في البداية أنهم مدنيون إسرائيليون، اعترفت إسرائيل نفسها لاحقاً بأنهم فلسطينيون، مما يثير تساؤلات مقلقة حول من تسبب فعلياً في هذه الوفيات ولماذا تم حرق هذه الجثث. ادعت الحكومة الإسرائيلية في البداية وقوع 1,400 ضحية، ثم راجعت هذا الرقم لاحقاً إلى 1,200، معترفة بأنها أخطأت في اعتبار الجثث الفلسطينية المحروقة إسرائيلية. يثير هذا الاعتراف أسئلة خطيرة حول طبيعة هذه الوفيات ومن كان مسؤولاً عن حرق هذه الجثث. نمط الادعاءات المثيرة للمشاعر متبوعة بتراجعات هادئة يكشف عن جهد منهجي للتلاعب بالرأي العام وتبرير الأعمال العسكرية. تخدم هذه الفظائع المفبركة غرضاً محسوباً: كما يوضح محلل الإعلام مارك أوين جونز، "إذا استطعت تفعيل إحساس الناس بالاشمئزاز، فهم أكثر ميلاً لدعم الانتقام القاسي ضد الفلسطينيين." تم استخدام هذه السردية المصنعة لتبرير أهوال حقيقية تم إلحاقها بالمدنيين الفلسطينيين.'
        }
      },
      archaeological_evidence: {
        title: 'الأدلة الأثرية',
        zionist_claim: 'تستشهد إسرائيل كثيراً بالاكتشافات الأثرية كدليل على الوجود اليهودي القديم، مستخدمة هذه النتائج لدعم المطالبات الإقليمية والسرديات التاريخية.',
        palestine_response: {
          description: 'لماذا تظهر الأدلة الأثرية بشكل انتقائي خلال النزاعات، مع استهداف المواقع غير اليهودية وتدميرها غالباً؟ يعكس السجل الأثري الغني لغزة دورها كملتقى للحضارات، ومع ذلك شهدت النزاعات الأخيرة تدميراً متعمداً للمواقع الإسلامية والمسيحية. نمط المحو لا يؤثر فقط على القطع الأثرية ولكن يحاول أيضاً القضاء على الأدلة التاريخية التي تسلط الضوء على تراث مشترك متعدد الثقافات، مقوضاً الهوية الثقافية الفلسطينية واستمراريتها. تكشف عمليات الحفر الأثرية التي تجريها إسرائيل عن نمط مقلق من التحيز في التفسير والانتقائية في العرض. غالباً ما يتم تجاهل الطبقات الأثرية التي تعود للفترات الإسلامية والعربية أو إزالتها للوصول إلى الطبقات اليهودية القديمة، مما يؤدي إلى تشويه السجل التاريخي الكامل للمنطقة. هذا التدمير المنهجي للتراث الثقافي غير اليهودي يشكل محاولة متعمدة لمحو الأدلة المادية على التاريخ الفلسطيني المستمر. كما أن التوظيف السياسي للآثار، من خلال استخدامها لتبرير الاستيطان والتوسع، يتعارض مع المبادئ الأساسية لعلم الآثار كأداة للفهم التاريخي الموضوعي. التاريخ الأثري الحقيقي للمنطقة يكشف عن تعاقب غني للحضارات والثقافات، وليس قصة أحادية كما تحاول السردية الصهيونية تصويره.'
        }
      },
      tortured_family: {
        title: 'سردية العائلة المعذبة',
        zionist_claim: 'وصف الوزير بلينكن عائلة مكونة من أربعة أفراد تعرضت للتعذيب أثناء الإفطار - مدعياً أن عيني الأب قُلعت، وقُطع ثدي الأم، وبُترت أطراف الأطفال قبل إعدامهم، مقدماً هذا كدليل على وحشية حماس.',
        palestine_response: {
          description: 'هذه القصة المثيرة للمشاعر، مثل غيرها، تنهار عند مواجهتها بالأدلة الفعلية. لم يجد التحليل الشامل للفيلم الوثائقي أي ضحايا تتطابق مع هذه الأوصاف المروعة في أي قوائم للضحايا تم التحقق منها. يكشف هذا النمط من تصنيع القصص المروعة بشكل متزايد المزيد عن آلة الدعاية أكثر من أي حقيقة على الأرض. تتضح الطبيعة المنهجية لهذه الافتراءات عند دراسة كيفية انتشارها - من الادعاءات الأولية من قبل متطوعي زاكا، مضخمة من قبل المسؤولين الإسرائيليين، ثم بثها عالمياً من خلال القنوات الدبلوماسية. يظهر تكرار بلينكن لهذه الادعاءات غير المثبتة بصفة رسمية مدى تغلغل حملة التضليل هذه في الخطاب الدبلوماسي. غياب أي دليل يدعم هذه الادعاءات المحددة، رغم توثيق إسرائيل الدقيق لضحايا 7 أكتوبر الفعليين، يتحدث بصوت عالٍ. تخدم هذه الفظائع المفبركة غرضاً محسوباً: لتوليد الدعم العام لأعمال يصعب تبريرها بخلاف ذلك. تكشف الطبيعة المتصاعدة لهذه الادعاءات - كل منها أكثر فظاعة من سابقتها - عن استراتيجية متعمدة لإغراق المشاعر العامة وقمع التساؤل النقدي. تم استخدام هذه السردية المصنعة من قصص الرعب، التي ثبت لاحقاً أنها كاذبة، لتبرير أهوال حقيقية ألحقت بالمدنيين الفلسطينيين، مما أدى إلى مقتل أكثر من 31,000 فلسطيني، منهم 13,000 طفل.'
        }
      },
      pregnant_woman: {
        title: 'سردية المرأة الحامل المشوهة',
        zionist_claim: 'ادعى يوسي لانداو من زاكا أنه شاهد امرأة حاملاً "تم بقر بطنها" وطعن جنينها، مقدماً هذا كدليل على وحشية حماس.',
        palestine_response: {
          description: 'هذا الادعاء المثير يذوب تحت أدنى تدقيق. لم ينكر كيبوتس بئيري رسمياً هذه الرواية فحسب، بل عندما طُلب تقديم أدلة تصويرية، لم يستطع لانداو سوى تقديم صورة محروقة غير قابلة للتحديد. لا يظهر أي ضحية تطابق هذا الوصف المروع في القائمة الشاملة للضحايا. عندما تم تحديه لتقديم أدلة خلال المقابلة الوثائقية، كشف رد لانداو عن جوفاء ادعاءاته: "لن أضعها أمام الكاميرا،" متبوعاً بعرض صورة محروقة غير قابلة للتحديد لا تحتوي على أي دليل على ادعاءاته المروعة. يكشف هذا النمط من تصنيع قصص الفظائع، التي ثبت لاحقاً أنها كاذبة، عن محاولة منهجية لتبرير العنف غير المسبوق الذي أطلق على السكان المدنيين في غزة. يكشف الفيلم الوثائقي كيف تم نشر هذه الادعاءات غير المثبتة عمداً عبر قنوات الإعلام والشبكات الدبلوماسية، مما خلق سردية خدمت لنزع الإنسانية عن الفلسطينيين وتبرير العقاب الجماعي. حقيقة أن المسؤولين الإسرائيليين واصلوا الترويج لهذه القصص حتى بعد أن نفتها مجتمعاتهم نفسها تكشف عن الطبيعة المحسوبة لهذه الحملة الدعائية.'
        }
      },
      systematic_rape: {
        title: 'سردية الاغتصاب المنهجي',
        zionist_claim: 'ادعت إسرائيل حدوث اغتصاب واسع النطاق ومنهجي في 7 أكتوبر، وأطلقت حملة عالمية تنتقد الأمم المتحدة والمؤسسات الأخرى بسبب عدم التحرك المزعوم.',
        palestine_response: {
          description: 'يكشف التصنيع المنهجي لادعاءات الاغتصاب عن حملة دعائية محسوبة. بعد خمسة أشهر، ظهرت الحقيقة مختلفة تماماً عن الادعاءات الأولية. اضطرت الشرطة الإسرائيلية للاعتراف بعدم وجود "جثث محددة" تطابق ادعاءات الاغتصاب. لم يجد الممثل الخاص للأمم المتحدة أي دليل مرئي ملموس على الاغتصاب في مراجعتهم الشاملة. والأكثر دلالة هو رفض إسرائيل المستمر للسماح بتحقيقات مستقلة مع استمرارها في تضخيم ادعاءات غير مثبتة. كشفت محاولة النيويورك تايمز لإثبات هذه الادعاءات عن هشاشتها بشكل أكبر - عندما نشروا ادعاء اغتصاب مركزياً، تم تفنيده علناً من قبل عائلة الضحية نفسها، التي أكدت أنه كان مستحيلاً نظراً لاتصالهم مع الضحية قبل دقائق من وفاتها. كشف التحقيق عن وجود مسؤول استخبارات إسرائيلي سابق بين مؤلفي التقرير، كان قد أيد سابقاً منشورات وسائل التواصل الاجتماعي الداعية للإبادة الجماعية والتي تدعو إلى تحويل غزة إلى مسلخ. هذا التوظيف لادعاءات العنف الجنسي يتبع نمطاً موثقاً لتصنيع قصص الفظائع لتبرير الأعمال العسكرية. كما يوضح محلل الإعلام مارك أوين جونز، "إذا استطعت تفعيل إحساس الناس بالاشمئزاز، فهم أكثر ميلاً لدعم الانتقام القاسي ضد الفلسطينيين." منع التحقيقات المستقلة مع نشر ادعاءات غير مثبتة يتحدث بصوت عالٍ عن الطبيعة الحقيقية لهذه الاتهامات. تم استخدام هذه السردية المصنعة من قصص الرعب، التي ثبت لاحقاً أنها كاذبة، لتبرير أهوال حقيقية ألحقت بالمدنيين الفلسطينيين - حملة عسكرية قتلت أكثر من 31,000 فلسطيني، 44% منهم من الأطفال. النمط واضح: الادعاءات الأولية الصادمة تتلقى تغطية إعلامية واسعة، بينما التصحيحات أو التراجعات اللاحقة تمر دون أن يلاحظها أحد، مما يخدم الأجندة الأوسع لتبرير العنف غير المسبوق ضد السكان المدنيين.'
        }
      },
      only_democracy: {
        title: 'الديمقراطية الوحيدة: فحص الادعاءات الديمقراطية',
        zionist_claim: 'تقدم إسرائيل نفسها كالديمقراطية الوحيدة في الشرق الأوسط، ومنارة للقيم الغربية في المنطقة.',
        palestine_response: {
          description: 'هل يمكن أن تتعايش الديمقراطية مع الحكم العسكري على ملايين لا يمكنهم التصويت أو التمتع بحقوق متساوية؟ يستخدم النظام الإسرائيلي قوانين مختلفة لمجموعات عرقية مختلفة، مقيداً حركة الفلسطينيين وحقوق الأراضي ولم شمل الأسر. الديمقراطية الحقيقية لا ينبغي أن تتضمن طرقاً منفصلة أو محاكم عسكرية على أساس العرق. هذا التطبيق الانتقائي للمبادئ الديمقراطية يتناقض مع التعريف الحقيقي للقيم الديمقراطية. كيف يمكن لنظام يطبق قوانين مختلفة على أساس العرق أن يدعي أنه ديمقراطية؟ النظام الذي يحرم ملايين الناس من حقوقهم الأساسية ويفرض حكماً عسكرياً على أساس الهوية العرقية لا يمكن أن يكون ديمقراطياً بأي معنى حقيقي للكلمة.'
        }
      },
      historical_connection: {
        title: 'الارتباط التاريخي بالأرض',
        zionist_claim: 'تستند إسرائيل في مطالبتها بالأرض على ارتباط تاريخي وديني يعود إلى العصور التوراتية، معتبرة إياها الوطن التاريخي للشعب اليهودي كما هو موثق في النصوص الدينية والاكتشافات الأثرية.',
        palestine_response: {
          description: 'هل يمكن حقاً أن يستند المطلب التاريخي على الكتابات القديمة وحدها، مع تجاهل الحياة المستمرة ووجود الآخرين على الأرض؟ حافظ الفلسطينيون على رابط عميق ومستمر مع هذه الأرض عبر الأجيال، مع وجود عربي موثق يسبق العصر الحديث. هذا الارتباط أكثر من مجرد تاريخي - إنه يمثل إرثاً حياً وهوية متجذرة في قرون من السكن والتطور الثقافي والزراعة. بالنسبة للفلسطينيين، هذه الأرض ليست مجرد تراث؛ إنها وطن. مجتمعاتنا عاشت هنا باستمرار منذ القرن السابع، بانية علاقة مع الأرض روحية وعملية. هذا الارتباط المستمر والحي بالأرض لا يمكن تجاهله أو محوه بادعاءات مبنية على نصوص قديمة فقط.'
        }
      },
      alshifa_tunnel: {
        title: 'مستشفى الشفاء والمركز القيادي المزعوم لحماس',
        zionist_claim: 'تزعم إسرائيل أن مستشفى الشفاء يعمل كمقر عسكري لحماس، مع مركز قيادة وشبكة أنفاق تحت الأرض. تضمنت "أدلتهم" الرئيسية عرض تقويم عربي بسيط، زعموا أنه "قائمة حراسة حيث يكتب كل إرهابي اسمه ولكل إرهابي نوبة حراسة خاصة به لحراسة الأشخاص الموجودين هنا."',
        palestine_response: {
          description: 'يصل يأس الدعاية الإسرائيلية إلى مستويات جديدة من السخف في عرضهم المسرحي للـ "أدلة" في مستشفى الشفاء. أولاً، من المهم ملاحظة أن هذه الأنفاق بنتها إسرائيل نفسها في الثمانينيات، وهي حقيقة اعترف بها رئيس الوزراء الإسرائيلي السابق إيهود باراك في لحظة صراحة مذهلة على CNN: "تعلم، قبل عقود كنا ندير المكان، لذلك ساعدناهم - كان ذلك قبل عقود، ربما أربعة عقود مضت عندما ساعدناهم في بناء هذه الملاجئ لتوفير مساحة أكبر لتشغيل المستشفى." بعد ادعاء أن مستشفى الشفاء كان فعلياً "البنتاغون التابع لحماس" - وهي سردية ضخمها بحماس إدارة بايدن - أسفرت "الأدلة" الأولى للجيش الإسرائيلي عن لا شيء سوى بضعة بنادق آلية يُزعم العثور عليها خلف جهاز التصوير بالرنين المغناطيسي وسترة قتالية موضوعة بشكل مريب تحمل شعار حماس. حتى أشد مؤيدي إسرائيل تعصباً واجهوا صعوبة في التوفيق بين هذا الاكتشاف الضئيل والادعاءات الشاملة التي قدموها عن الأهمية العسكرية المزعومة للشفاء. وصلت كوميديا الأخطاء إلى ذروتها عندما قدم المتحدث باسم الجيش الإسرائيلي العميد البحري دانيال هغاري تقويماً عربياً عادياً على أنه نوع من "جدول مناوبات الحراسة الإرهابية". هذه اللحظة من الجهل العميق - عدم القدرة على التعرف على تقويم أساسي في منطقة تعتبر العربية فيها اللغة الرئيسية - تكشف عن الطبيعة المصطنعة لحملتهم الدعائية بأكملها. يقع العبء على كل من الحكومة الإسرائيلية ورعاتها في إدارة بايدن لإثبات ادعاءاتهم الشاملة حول الاستخدام المزعوم لحماس لمستشفى الشفاء. يجب أن تكون هذه الأدلة قوية بما يكفي لتبرير كل المعاناة والموت الذي ألحق بالمرضى والأطباء والممرضات في الشفاء بشكل لا يقبل الجدل. مثل هذا الاستنتاج غير معقول عندما يوضع في سياق معاناة المدنيين التي تسبب بها حصار إسرائيل على المستشفى. وفقاً للأدلة الوثائقية، عندما زار فريق المساعدات الإنسانية التابع للأمم المتحدة بقيادة منظمة الصحة العالمية مستشفى الشفاء في 18 نوفمبر، وصف موظفوه المستشفى بأنها "منطقة موت"، مشيرين إلى علامات القصف وإطلاق النار، مع وجود مقبرة جماعية عند المدخل تحتوي على أكثر من 80 جثة. هذا الواقع يتناقض بشكل صارخ مع سردية إسرائيل المبنية بعناية عن الدقة الجراحية ضد الأهداف العسكرية. النمط واضح: تقدم إسرائيل ادعاءات شاملة لتبرير الأعمال العسكرية، وتقدم أدلة مشكوك فيها أو سخيفة، ثم تعتمد على ضباب الحرب لإخفاء العواقب الإنسانية المدمرة لهجماتها على المنشآت الطبية. استعدادهم لتقديم تقويم بسيط كدليل على النشاط الإرهابي يظهر ليس فقط ضعف ادعاءاتهم، بل احتقارهم للذكاء الدولي ويأسهم لتبرير ما يعترف خبراء القانون الدولي بشكل متزايد بأنها جرائم حرب.'
        }
      },
      aid_theft: {
        title: 'حماس وتوزيع المساعدات الإنسانية',
        zionist_claim: 'تدعي إسرائيل وحلفاؤها الغربيون أن حماس تسرق المساعدات الإنسانية من المدنيين الفلسطينيين، مخزنة الموارد لمقاتليها بينما تترك السكان يتضورون جوعاً. يزعمون أن هذا يثبت أن حماس لا تهتم بالمدنيين الفلسطينيين وهي المسؤولة عن معاناتهم.',
        palestine_response: {
          description: 'يتم فضح إفلاس الدعاية الإسرائيلية بشكل صارخ من خلال أدلتهم الجنائية الخاصة حول وفاة يحيى السنوار. وفقاً لمعهد الطب الشرعي الإسرائيلي نفسه - وليس المصادر الفلسطينية أو حلفاء حماس، بل الفاحصين الطبيين الإسرائيليين - لم يكن السنوار قد تناول الطعام لمدة 72 ساعة قبل وفاته. هذا الاكتشاف من تشريحهم الخاص يوجه ضربة مدمرة لسرديتهم المصنوعة بعناية حول قادة حماس الذين يعيشون في رفاهية بينما يتضور الفلسطينيون جوعاً. ها هو أعلى قائد في حماس، الرجل الذي صورته إسرائيل على أنه يعيش مرتاحاً تحت الأرض مع تخزين الموارد، يموت ببطن فارغ إلى جانب شعبه. نفس القائد الذي زعموا أنه يسرق المساعدات كان في الواقع يشارك جوع سكان غزة. هذا الكشف لا يناقض دعاية إسرائيل فحسب - بل يحطمها تماماً. تصبح الحقيقة أكثر وضوحاً عندما نفحص الدعم المستمر الذي تتلقاه حماس من الفلسطينيين رغم أكثر من عام من الحرب المدمرة. إذا كانت سردية إسرائيل صحيحة - إذا كانت حماس تسرق فعلاً المساعدات من شعبها - كيف نفسر هذا الدعم المستمر؟ الإجابة بسيطة: الفلسطينيون على الأرض يستطيعون رؤية هذه الأكاذيب لأنهم يشهدون الواقع مباشرة. محاولات إسرائيل اليائسة لتصوير حماس على أنها غير مبالية بمعاناة الفلسطينيين تخدم غرضاً محسوباً: لتحويل الانتباه عن دورها في خلق هذه الكارثة الإنسانية. من خلال تصنيع قصص عن سرقة المساعدات، يحاولون تبرير حصارهم الوحشي الذي دفع 2.3 مليون فلسطيني إلى حافة المجاعة. ومع ذلك فإن أدلتهم الخاصة - نتائج تشريحهم الخاصة - تكشف هذه الادعاءات كدعاية مصممة لتبرير العقاب الجماعي. هذا النمط من التلفيق يتبع استراتيجية إسرائيل الموثقة في تصنيع السرديات لتبرير أفعالها للجماهير الغربية. تماماً كما اخترعوا قصصاً عن الأطفال المقطوعة رؤوسهم والاغتصاب المنهجي لتبرير هجومهم الأولي، يخترعون الآن حكايات عن سرقة المساعدات لتبرير حصار التجويع الخاص بهم. لكن تماماً كما انهارت تلك الادعاءات السابقة تحت التدقيق، يتم فضح ادعاءاتهم حول سرقة المساعدات - بشكل مثير للسخرية، من خلال أدلتهم الخاصة. يقف تقرير تشريح إسرائيل الخاص كشهادة قوية على الحقيقة: قيادة حماس تشارك مصير شعبها، متناقضة مباشرة مع محاولات إسرائيل تصويرهم كمستغلين أنانيين. هذا الواقع يفسر لماذا، رغم حملة إسرائيل الدعائية التي لا هوادة فيها وهجومها العسكري، يواصل الفلسطينيون دعم قيادة مقاومتهم - لأنهم يدركون من هو المسؤول حقاً عن معاناتهم.'
        }
      },
      targeting_hospitals: {
        title: 'تستخدم حماس المستشفيات كمراكز قيادة عسكرية',
        zionist_claim: 'تدعي إسرائيل أن حماس تستخدم المستشفيات بشكل منهجي كمراكز قيادة عسكرية ومرافق لتخزين الأسلحة، مما يجبر إسرائيل على استهداف هذه المنشآت الطبية. كما صرح المتحدث باسم الجيش الإسرائيلي العميد البحري دانيال هاغاري، "إذا كنا ننوي إسقاط البنية التحتية العسكرية في الشمال، علينا إسقاط فلسفة استخدام المستشفيات."',
        palestine_response: {
          description: 'تكشف محاولة آلة الدعاية الإسرائيلية تبرير هجومها غير المسبوق على النظام الصحي في غزة عن استراتيجية محسوبة لتطبيع جرائم الحرب من خلال سرديات مصنعة. عند فحص ادعاءاتهم ضد المستشفيات المتعددة - من الشفاء إلى المستشفى الإندونيسي، من كمال عدوان إلى العودة - يظهر نمط واضح من تقديم ادعاءات شاملة يتبعها أدلة ضئيلة أو معدومة. خذ المستشفى الإندونيسي، حيث ادعت إسرائيل وجود مركز قيادة وسيطرة تحت الأرض، ونشرت صوراً ضبابية بالأقمار الصناعية لمداخل أنفاق مزعومة. بعد حصار واقتحام المنشأة، لم يقدم الجيش أي دليل على المنشأة تحت الأرض التي ادعوا بثقة وجودها. عندما سُئلوا تحديداً عن العثور على هذه الأنفاق، رفض مكتب المتحدث العسكري الرد بشكل لافت للنظر. في حالة مستشفى العودة، لم يقدم الجيش أبداً أي ادعاءات بوجود حماس. عندما سُئلوا عن المعلومات الاستخباراتية التي أدت إلى حصار واقتحام المستشفى، بقي مكتب المتحدث العسكري صامتاً مرة أخرى. ومع ذلك، لم يمنعهم هذا من تنفيذ حصار وحشي أدى إلى مقتل طاقم طبي، بما في ذلك الدكتور محمود أبو نجيلة وعدة ممرضات قُتلوا برصاص القناصة. هذا الاستهداف المنهجي للبنية التحتية الصحية يخدم هدفاً مزدوجاً: أولاً، يهدف إلى جعل الحياة غير مستدامة للفلسطينيين في غزة من خلال تدمير بنيتهم التحتية الطبية. ثانياً، يوفر غطاءً لقتل الصحفيين والعاملين الطبيين الذين قد يوثقون جرائم الحرب هذه. القتل غير المسبوق لـ 122 صحفياً في غزة - وهو أعلى عدد في أي نزاع منذ الحرب العالمية الثانية - يتبع نفس النمط من ادعاء وجود حماس لتبرير استهداف البنية التحتية المدنية. الواقع على الأرض صارخ: وفقاً للعاملين الطبيين الدوليين الذين قضوا سنوات في هذه المرافق، لم يكن هناك أبداً أي دليل على نشاط عسكري. كما قال أحد الأطباء الأوروبيين عن مستشفى الشفاء، "لم أر أبداً جندياً داخل المستشفيات، لم أر أبداً مركز قيادة في أي مكان. لقد رأيت اللافتات على الأبواب تقول \'لا أسلحة هنا\' وأنا شخصياً لم أكن لأعمل هناك أبداً لو كانت هذه المستشفيات مواقع عسكرية." القانون الإنساني الدولي واضح: حتى لو كان هناك أي شك في استخدام مستشفى من قبل طرف لارتكاب أعمال ضارة، فإنه يظل موقعاً محمياً. حتى لو فقد المبنى حمايته الخاصة، يحتفظ جميع الأشخاص بداخله بحمايتهم. ومع ذلك، انتهكت إسرائيل باستمرار هذه المبادئ، مستخدمة ادعاءات غير مثبتة لتبرير ما حددته لجنة التحقيق التابعة للأمم المتحدة على أنه "سياسة متضافرة لتدمير النظام الصحي في غزة." نجحت هذه الحملة في خلق ما يصفه الدكتور زاهر سحلول، رئيس MedGlobal، بأنه تدمير للإحساس الأساسي بالأمان الذي يجب أن يحيط بالمستشفيات. "لقد أصبحت هذه الحرب ندبة في أذهان كل طبيب وممرضة،" كما يلاحظ، عاكساً كيف حولت أفعال إسرائيل أماكن الشفاء إلى "أماكن للموت" في أذهان المدنيين.'
        }
      },
      human_shields: {
        title: 'سردية الدروع البشرية',
        zionist_claim: 'تستخدم حماس الفلسطينيين كدروع بشرية، وتعمل عمداً من المناطق المدنية وتختبئ خلف السكان، مما يفسر ويبرر ارتفاع عدد الضحايا المدنيين في غزة. كما يكرر المسؤولون الإسرائيليون، تتحمل حماس المسؤولية عن الضحايا المدنيين لأنها تعمل من داخل البنية التحتية المدنية.',
        palestine_response: {
          description: 'يخدم الاتهام الإسرائيلي الساخر حول استخدام حماس للدروع البشرية كستار دخان محسوب لتبرير ما أصبح واحدة من أكثر الحملات تدميراً للمدنيين في التاريخ. تنهار هذه الدعاية تحت وزن ثلاث حقائق حاسمة. أولاً، تناقض أدلة إسرائيل نفسها سرديتها. الموقف الأخير ليحيى السنوار، الذي التقطته كاميرات الجيش الإسرائيلي، يُظهر أعلى قائد في حماس يقاتل وحيداً في تل السلطان برفح - منطقة تم إخلاؤها عمداً من المدنيين لمدة ثلاثة أشهر. إذا كان القائد الأعلى لحماس اختار القتال دون استخدام المدنيين كدروع، فإن هذا يقوض بشكل أساسي سردية إسرائيل الأساسية حول تكتيكات حماس. ثانياً، على الرغم من امتلاك قدرات مراقبة واسعة والتقاط ساعات لا تحصى من لقطات القتال في 7 أكتوبر، فشلت إسرائيل في تقديم قطعة واحدة من الأدلة المرئية تظهر حماس تستخدم دروعاً بشرية. يصبح هذا الغياب الصارخ أكثر وضوحاً عندما يقارن بالتوثيق الوفير لاستخدام القوات الإسرائيلية للفلسطينيين كدروع بشرية - ممارسة موثقة جيداً لدرجة أن المحكمة العليا الإسرائيلية نفسها اضطرت للحكم ضدها. كشفت التحقيقات الدولية، بما في ذلك تقرير الجزيرة الحصري المدعوم من قبل العديد من وسائل الإعلام، عن إسرائيل كمرتكب فعلي لاستخدام الدروع البشرية. الأدلة ساحقة: جنود إسرائيليون يجبرون الفلسطينيين على دخول الأنفاق غير المستكشفة، ويلبسون المعتقلين زي الجيش الإسرائيلي للتحقق من وجود متفجرات، ويستخدمون المدنيين لدخول المباني التي يحتمل أن تكون مفخخة. كما يلاحظ البروفيسور مايكل لينك، المقرر الخاص السابق للأمم المتحدة لحقوق الإنسان، تنتهك هذه الممارسة اتفاقيات جنيف وتشكل جريمة حرب. ثالثاً، يكشف السجل التاريخي إسقاط إسرائيل لتكتيكاتها الخاصة على حماس. كما وثقت مجموعة حقوق الإنسان الإسرائيلية الرائدة بتسيلم، "منذ بداية الاحتلال في عام 1967، استخدمت قوات الأمن الإسرائيلية مراراً وتكراراً الفلسطينيين في الضفة الغربية وقطاع غزة كدروع بشرية." تعود هذه الممارسة إلى أبعد من ذلك، كما يكشف الصحفي المستقل أنتوني لوينشتاين، إلى التكتيكات الاستعمارية البريطانية التي تبنتها القوات الصهيونية المبكرة وطورتها. الحقيقة هي أن اتهام إسرائيل حول الدروع البشرية يخدم غرضاً نفعياً: لتبرير قتل أكثر من 50,000 فلسطيني، 80% منهم من النساء والأطفال. هذه التقنية الدعائية تتبع نمطاً موثقاً: اتهام الفلسطينيين بما تفعله إسرائيل نفسها، ثم استخدام ذلك الاتهام لتبرير العقاب الجماعي. رأينا هذا مع ادعاءات عن الأطفال المقطوعة رؤوسهم (ثبت أنها كاذبة)، والاغتصاب المنهجي (لم يتم العثور على أدلة)، والآن الدروع البشرية. كما يؤكد البروفيسور لينك، المبدأ الأساسي للقانون الإنساني الدولي هو فصل المدنيين عن المقاتلين. تظهر الأدلة أن إسرائيل، وليس حماس، هي التي تنتهك هذا المبدأ بشكل منهجي - ليس فقط باستخدام المدنيين الفلسطينيين كدروع بشرية ولكن أيضاً باستهداف البنية التحتية المدنية بكثافة لدرجة أن مسؤولي الأمم المتحدة يصفون الآن الجيش الإسرائيلي بأنه "واحد من أكثر الجيوش إجراماً في العالم." الحقيقة واضحة: اتهام إسرائيل بالدروع البشرية هو إسقاط لممارساتها الموثقة الخاصة، مصمم لتصنيع الموافقة على ما يعترف خبراء القانون الدولي بشكل متزايد بأنه إبادة جماعية. غياب الأدلة على ادعاءاتهم، مقارنة بالأدلة الوفيرة على استخدامهم هم للدروع البشرية، يفضح هذه الدعاية لما هي عليه - محاولة نفعية لتبرير ما لا يمكن تبريره.'
        }
      },
      land_without_people: {
        title: 'أرض بلا شعب',
        zionist_claim: 'روجت إسرائيل تاريخياً لفكرة أن فلسطين كانت فارغة إلى حد كبير، في انتظار العودة اليهودية.',
        palestine_response: {
          description: 'إذا كانت الأرض فارغة، فلماذا كانت هناك تقارير عن إزالة السكان والقرى الموجودة؟ تظهر السجلات العثمانية والبريطانية مجتمعات فلسطينية مزدهرة مع تجارة وزراعة ومراكز حضرية راسخة. هذا المفهوم عن "أرض فارغة" يمحو واقع المجتمع الفلسطيني، مجتمع تم تهجيره بشكل منهجي لخلق سردية مصطنعة عن الاستحقاق. الوثائق التاريخية والصور الفوتوغرافية وشهادات المعاصرين تؤكد جميعها وجود مجتمع فلسطيني نابض بالحياة ومتطور، مع اقتصاد زراعي مزدهر وثقافة غنية وحياة حضرية نشطة قبل إنشاء دولة إسرائيل. محاولة محو هذا التاريخ هي جزء من استراتيجية أوسع لنزع الشرعية عن الوجود الفلسطيني وحقوق الفلسطينيين في أرضهم التاريخية.'
        }
      },
      exile_and_return: {
        title: 'المنفى والعودة',
        zionist_claim: 'تقدم إسرائيل تأسيس الدولة كعودة من المنفى، مصورة إياه كتحقيق لوعد قديم واستعادة للسيادة اليهودية.',
        palestine_response: {
          description: 'إذا كان المنفى يخلق حق العودة، فلماذا يُحرم هذا الحق من الفلسطينيين الذين ما زالوا يحتفظون بصكوك ومفاتيح منازلهم التي أُجبروا على النزوح منها؟ نكبة عام 1948 ليست ذكرى بعيدة بل واقع حي لأكثر من 750,000 فلسطيني تم طردهم، وتدمير قراهم، ومصادرة ممتلكاتهم. يؤكد قرار الأمم المتحدة 194 حقهم في العودة، ومع ذلك يُحرمون اليوم من هذا الحق، حتى مع استمرار توسع المستوطنات على أراضيهم. هذا التناقض في تطبيق "حق العودة" يكشف الطبيعة الانتقائية والعنصرية للسياسات الإسرائيلية. في حين يُمنح المهاجرون الجدد من جميع أنحاء العالم حق الاستيطان الفوري في إسرائيل لمجرد كونهم يهوداً، يُحرم الفلسطينيون الذين يملكون وثائق ملكية قانونية من العودة إلى منازلهم وأراضيهم.'
        }
      },
      october_seventh_casualties: {
        title: 'الحقيقة حول ضحايا السابع من أكتوبر',
        zionist_claim: 'تؤكد إسرائيل أن حماس قتلت 1,400 شخص خلال هجمات 7 أكتوبر، منسوبة جميع الوفيات إلى مقاتلي حماس ومستخدمة هذا الرقم لتبرير "ردها المتناسب" في غزة.',
        palestine_response: {
          description: 'يكشف واقع ضحايا 7 أكتوبر حقيقة أكثر تعقيداً وإزعاجاً حاولت إسرائيل إخفاءها. تمت مراجعة عدد القتلى الأولي البالغ 1,400 بهدوء إلى 1,154 - مراجعة تكشف حقيقة أكثر قتامة حول من تسبب فعلياً في العديد من هذه الوفيات. يكشف التحليل الجنائي للتحقيق الذي أجرته الجزيرة عن عدة حقائق حاسمة تحطم سردية إسرائيل. من إجمالي 1,154 ضحية، يكشف التقسيم قصة مختلفة عن دعاية إسرائيل: - 256 كانوا جنوداً - 53 من الشرطة وقوات الأمن - 63 من حراس الأمن المدنيين - 782 من المدنيين غير المسلحين. والأهم من ذلك، قُتل ما لا يقل عن 18 ضحية على يد القوات البرية الإسرائيلية نفسها. توفي العديد من الآخرين تحت الأنقاض في ظروف لا تزال غير واضحة، مما يثير أسئلة خطيرة حول استجابة إسرائيل "أطلق النار أولاً" خلال الفوضى. يكشف التحقيق عن الحقيقة الوحشية لـ "توجيه هانيبال" الإسرائيلي - بروتوكول عسكري حيث تفضل القوات الإسرائيلية قتل مدنييها على السماح بأخذهم كرهائن. تظهر الأدلة أن طائرات الهليكوبتر الإسرائيلية أطلقت النار بشكل عشوائي على المركبات المغادرة غزة، رغم عدم قدرتها على التمييز بين مقاتلي حماس والمدنيين الإسرائيليين أو الرهائن. كما اعترف أحد الطيارين الإسرائيليين، كان عليهم الاعتماد على مجموعات واتساب لتحديد الأهداف - اعتراف صادم بالتجاهل المتهور لحياة المدنيين. ربما الأكثر دلالة، اعترف الجيش الإسرائيلي نفسه لاحقاً بأن العديد من الجثث التي تم عدها في البداية كضحايا إسرائيلية كانت في الواقع فلسطينية - محروقة لدرجة أنه تم تحديد هويتها خطأً على أنها إسرائيلية. كما صرح مسؤول إسرائيلي: "قلنا في البداية في هجوم حماس الوحشي على شعبنا في 7 أكتوبر أن العدد كان عند 1,400 ضحية والآن راجعنا هذا الرقم إلى 1,200 لأننا فهمنا أننا بالغنا في التقدير... كانت هناك جثث محروقة بشدة لدرجة أننا اعتقدنا أنها لنا، في النهاية يبدو أنها كانت لإرهابيي حماس." يثير هذا الاعتراف أسئلة مقلقة: من الذي حرق هذه الجثث في الواقع؟ لماذا تم حرق الفلسطينيين بشدة لدرجة أنهم لا يمكن التعرف عليهم؟ والأهم من ذلك، كم من الوفيات التي تنسبها إسرائيل إلى حماس تسببت بها في الواقع قواتها الخاصة في ردها العشوائي؟ يكشف التحقيق أنه في العديد من الكيبوتسات، بما في ذلك بئيري حيث مات 12 رهينة، فتحت قوات الشرطة والجيش الإسرائيلية النار على المنازل التي تحتوي على رهائن ومدنيين. تم تجاهل هذه الحوادث إلى حد كبير من قبل وسائل الإعلام الغربية، رغم الإبلاغ عنها في الصحافة الإسرائيلية. يشير هذا النمط من الكشف إلى أن سردية إسرائيل الأولية عن 7 أكتوبر تم تصميمها ليس للكشف عن الحقيقة ولكن لتبرير الحملة العسكرية غير المسبوقة التي تلت ذلك. اعترافاتهم الخاصة، وتصحيحاتهم، والأدلة الجنائية ترسم صورة لمسؤولية إسرائيلية كبيرة عن الضحايا المدنيين - حقيقة حاولوا إخفاءها من خلال نسب جميع الوفيات إلى حماس. الحقيقة تبقى: في حين أن حماس تتحمل المسؤولية عن أفعالها في 7 أكتوبر، فإن استجابة إسرائيل وتلاعبها بأرقام الضحايا يكشفان عن جهد محسوب لتعظيم عدد القتلى لأغراض دعائية، حتى لو كان ذلك يعني قتل مواطنيهم أنفسهم.'
        }
      },
      holocaust_legacy: {
        title: 'إرث الهولوكوست والتهجير الفلسطيني',
        zionist_claim: 'تستشهد إسرائيل بالهولوكوست كمبرر لإقامة دولة يهودية في فلسطين.',
        palestine_response: {
          description: 'لماذا يجب أن يدفع الفلسطينيون ثمن معاداة السامية الأوروبية؟ الإرث المأساوي للهولوكوست لا يبرر خلق لاجئين جدد. تم تهجير الفلسطينيين لإقامة إسرائيل، رغم عروض الأراضي البديلة، مما خلق صدمة وتجريد من الممتلكات عبر الأجيال بين العائلات الفلسطينية. اليوم، ما زالوا يواجهون عوائق في العودة إلى منازلهم الأصلية، حتى مع ارتفاع المستوطنات الجديدة على أراضيهم. استخدام مأساة الهولوكوست لتبرير الظلم المستمر ضد الشعب الفلسطيني يمثل إساءة استخدام للذاكرة التاريخية وتحويل الضحايا إلى جلادين. لا يمكن أن يكون الرد على الظلم التاريخي هو خلق ظلم جديد ومستمر ضد شعب آخر.'
        }
      },
      security_expansion: {
        title: 'الأمن مقابل التوسع: مفارقة الحماية',
        zionist_claim: 'تستشهد إسرائيل بالمخاوف الأمنية لتبرير سياساتها، بما في ذلك جدار الفصل والمستوطنات والعمليات العسكرية.',
        palestine_response: {
          description: 'كيف يبرر الأمن الاستيلاء المستمر على الأراضي والسيطرة على الموارد؟ إذا كان الهدف دفاعياً حقاً، فلماذا تتوسع هذه الإجراءات باستمرار في السيطرة الإسرائيلية؟ يكشف مسار الجدار، ومواقع المستوطنات، والمناطق العسكرية عن نمط يعطي الأولوية للتوسع الإقليمي على الحماية، مهجراً الفلسطينيين بشكل منهجي تحت ستار الأمن. نمط التوسع المستمر هذا لا يخدم الأمن بل يخلق دورة لا نهائية من العنف والمقاومة. التوسع الاستيطاني والسيطرة على الموارد تحت غطاء الأمن يكشف عن الطبيعة الاستعمارية الحقيقية لهذه السياسات.'
        }
      },
      self_determination: {
        title: 'حق تقرير المصير: تطبيق انتقائي',
        zionist_claim: 'تدافع إسرائيل عن حق تقرير المصير للشعب اليهودي مع حرمان الفلسطينيين من نفس الحق بشكل نشط.',
        palestine_response: {
          description: 'كيف يمكن تبرير حق تقرير المصير لمجموعة واحدة من خلال إنكاره على الأخرى؟ ينبغي أن يكون حق تقرير المصير عالمياً، ومع ذلك يواجه الفلسطينيون قيوداً منهجية على الحركة والموارد وملكية الأراضي. سياسات إسرائيل الديموغرافية وجهود الاستيلاء على الأراضي تتعارض مع القيم الديمقراطية الحقيقية، مقوضة المبادئ الأساسية لتقرير المصير للجميع. هذا التناقض في تطبيق المبادئ الأساسية لحقوق الإنسان يكشف عن النفاق في ادعاءات إسرائيل الديمقراطية. كيف يمكن لدولة تدعي الديمقراطية أن تحرم ملايين الناس من حقوقهم الأساسية فقط بسبب هويتهم العرقية؟ هذا النظام من التمييز المنهجي والحرمان من الحقوق الأساسية يتناقض مع المبادئ الأساسية لتقرير المصير والديمقراطية.'
        }
      },
      zionism_origins_implications: {
        title: 'الصهيونية الحديثة: الأصول والآثار',
        zionist_claim: 'تقدم الصهيونية نفسها كحركة تحرر وطني يهودي، تسعى لإعادة الشعب اليهودي إلى وطنه التاريخي.',
        palestine_response: {
          description: 'إذا كانت الصهيونية تمثل المصالح اليهودية الأصيلة، فلماذا أسسها قادة علمانيون أوروبيون، ولماذا عارضتها العديد من المجتمعات اليهودية الأرثوذكسية؟ تتوافق جذور الصهيونية مع المُثل الاستعمارية الأوروبية أكثر من التقاليد اليهودية، حيث ناقش القادة الأوائل علناً خطط نقل السكان. تتحدى هذه الأدلة التاريخية، إلى جانب التهجير القسري وتوسعات المستوطنات، السردية القائلة بأن الصهيونية مجرد استعادة ثقافية. الطبيعة الاستعمارية للمشروع الصهيوني واضحة في كتابات وخطط قادته الأوائل، الذين تصوروا صراحة إنشاء مستعمرة استيطانية أوروبية في فلسطين. هذا يفسر معارضة العديد من اليهود المتدينين التقليديين للصهيونية، حيث رأوا فيها انحرافاً عن التعاليم اليهودية التقليدية وتبنياً للقومية الأوروبية العلمانية.'
        }
      },
      cultural_linguistic_ties: {
        title: 'الروابط الثقافية واللغوية',
        zionist_claim: 'تؤكد إسرائيل على إحياء اللغة العبرية والممارسات الثقافية اليهودية كدليل على ارتباط غير منقطع بالأرض، مقدمة إياه كاستعادة للتقاليد القديمة.',
        palestine_response: {
          description: 'كيف يبرر إحياء لغة قديمة تهجير ثقافة حية؟ ازدهرت الممارسات الثقافية والتقاليد واللغة الفلسطينية في المنطقة لأكثر من ثلاثة عشر قرناً، مما خلق تراثاً مستمراً ومتطوراً. يمثل تدمير المواقع التراثية الثقافية الفلسطينية في النزاعات الأخيرة محاولة لمحو هذه الثقافة الحية. الحفاظ على سلامة المنطقة الثقافية يعني احترام التاريخ والتقاليد التي ساهمت بها جميع المجتمعات على مدى القرون. استخدام إحياء اللغة العبرية كأداة سياسية يتجاهل الواقع المعقد للمنطقة، حيث تعايشت لغات وثقافات متعددة لقرون. تدمير التراث الثقافي الفلسطيني وإنكار استمراريته يكشف عن محاولة منهجية لمحو الهوية الفلسطينية وليس مجرد إحياء التراث اليهودي.'
        }
      },
      jerusalem_holy_city: {
        title: 'القدس كمدينة مقدسة',
        zionist_claim: 'تدعي إسرائيل القدس "عاصمتها الأبدية غير المقسمة" استناداً إلى ارتباطها اليهودي التاريخي وأهميتها التوراتية.',
        palestine_response: {
          description: 'إذا كانت المدينة مقدسة لثلاثة أديان، كيف يمكن لطرف واحد المطالبة بالسيادة الحصرية؟ طوال فترة الحكم الإسلامي، كان المسلمون واليهود والمسيحيون يتعبدون بحرية في القدس. على الرغم من أهميتها العميقة في الإسلام، لم يحاول الحكام المسلمون أبداً إقامة سيطرة إسلامية حصرية على المدينة. على مدى قرون، ظلت القدس مدينة للتعايش، بطابع من الانسجام متعدد الثقافات محترم تحت حكام مختلفين. يكشف هذا التاريخ أن قوة القدس تكمن في أهميتها المشتركة وحمايتها لجميع الأديان. التاريخ يثبت أن القدس ازدهرت حقاً فقط عندما كانت مفتوحة للجميع، وأن محاولات فرض السيطرة الأحادية عليها غالباً ما تؤدي إلى الصراع والمعاناة. نموذج التعايش التاريخي في القدس يقدم درساً مهماً عن كيفية إدارة المدن المقدسة بشكل عادل ومستدام. محاولات إسرائيل لفرض سيادة حصرية على المدينة تتعارض مع هذا التراث التاريخي من التعددية والتعايش.'
        }
      },
      religious_significance: {
        title: 'الأهمية الدينية',
        zionist_claim: 'تؤكد إسرائيل على الأهمية الدينية اليهودية العميقة للأرض، وخاصة القدس، مستشهدة بالروابط التوراتية والنصوص الدينية التي تؤسسها كأرض موعودة للشعب اليهودي.',
        palestine_response: {
          description: 'لماذا ينبغي أن تترجم الأهمية الدينية إلى سيطرة سياسية حصرية، خاصة في مكان مقدس لعدة أديان؟ الأرض تحمل أهمية دينية عميقة ليس فقط لليهود ولكن أيضاً للمسلمين والمسيحيين. بالنسبة للمسلمين، يمثل المسجد الأقصى ثالث أقدس موقع في الإسلام، بينما يقدس المسيحيون كنيسة القيامة والمواقع المقدسة الأخرى. إعطاء الأولوية لارتباط ديني واحد على الآخرين يتجاهل دور الأرض التاريخي كمركز روحي مشترك أثرى تراثها الثقافي عبر القرون. الادعاء بأن الأهمية الدينية لديانة واحدة تمنح حقوقاً سياسية حصرية يتناقض مع مبادئ التعددية الدينية والتعايش السلمي. على مر التاريخ، كانت الأرض المقدسة في أفضل حالاتها عندما احترمت جميع تقاليدها الدينية وسمحت بممارستها بحرية. استخدام الدين لتبرير السيطرة السياسية الحصرية يشوه الطبيعة الروحية الحقيقية لهذه الأرض المقدسة.'
        }
      },
      ancient_jewish_kingdoms: {
        title: 'الممالك اليهودية القديمة',
        zionist_claim: 'تستشهد إسرائيل بوجود ممالك يهودية قديمة كدليل على السيادة التاريخية والمطالبة المشروعة بالأرض، مشيرة إلى الاكتشافات الأثرية والروايات التوراتية لممالك إسرائيل ويهوذا.',
        palestine_response: {
          description: 'كيف يترجم التحكم السياسي القديم إلى حقوق إقليمية معاصرة؟ إذا كانت الممالك القديمة تحدد حدود اليوم، ألن تحتاج خرائط كل دولة إلى إعادة رسم؟ يمثل وجود الممالك اليهودية القديمة فصلاً واحداً فقط في سرد تاريخي أطول يشمل حضارات وشعوباً عديدة. حكمت هذه الممالك لفترة قصيرة نسبياً ضمن التاريخ الطويل للمنطقة، متجاهلة أجيالاً لا تحصى من الفلسطينيين الذين زرعوا وطوروا ارتباطاً عميقاً بهذه الأرض. لو طبقنا منطق المطالبة بالأرض على أساس الوجود التاريخي القديم، لكان لدى العديد من الشعوب والحضارات الأخرى التي حكمت المنطقة مطالبات مماثلة. التاريخ القديم يجب أن يُفهم في سياقه، وليس كأداة لتبرير السيطرة السياسية المعاصرة. الوجود المستمر للفلسطينيين على هذه الأرض، وتطورهم لثقافتهم وتقاليدهم فيها، يمثل رابطاً حياً أقوى من أي مطالبة تاريخية قديمة.'
        }
      },
      david_vs_goliath: {
        title: 'داود مقابل جالوت: أسطورة الضعيف',
        zionist_claim: 'تصور إسرائيل نفسها كدولة صغيرة تدافع عن نفسها ضد قوى عربية ساحقة.',
        palestine_response: {
          description: 'كيف يمكن لدولة نووية تمتلك واحداً من أكثر الجيوش تقدماً في العالم أن تدعي أنها داود؟ المساعدات العسكرية لإسرائيل، وأسلحتها المتطورة، وتفوقها التكنولوجي تفوق بكثير الموارد المتاحة للفلسطينيين، الذين يفتقرون إلى جيش رسمي. هذه السردية عن كونها الطرف الأضعف تتجاهل واقع اختلالات القوى والدمار الذي يتعرض له المدنيون الفلسطينيون. إسرائيل، بترسانتها النووية وقواتها المسلحة المتطورة وتحالفاتها العسكرية العالمية ودعمها الأمريكي غير المشروط، هي بوضوح القوة المهيمنة في المنطقة. الجيش الإسرائيلي، المصنف باستمرار كواحد من أقوى الجيوش في العالم، يتلقى مليارات الدولارات سنوياً من المساعدات العسكرية الأمريكية. في المقابل، يفتقر الفلسطينيون حتى إلى أبسط وسائل الدفاع عن أنفسهم، ويواجهون واحداً من أكثر الجيوش تقدماً في العالم بموارد محدودة للغاية. سردية "داود ضد جالوت" هذه هي انقلاب كامل للحقيقة، مصممة لتصوير القوة المحتلة كضحية وتبرير استخدامها غير المتناسب للقوة ضد السكان المدنيين.'
        }
      },
      contemporary_challenges: {
        title: 'التحديات المعاصرة للانسجام التاريخي',
        zionist_claim: 'تؤكد السرديات الصهيونية غالباً على الحاجة إلى دولة يهودية آمنة، مقترحة أن السيطرة الحصرية على المواقع المقدسة والأحياء التاريخية ضرورية للحفاظ عليها.',
        palestine_response: {
          description: 'هل يمكن الحفاظ على الانسجام التاريخي من خلال الإقصاء والسيطرة؟ اليوم، القيود المفروضة على وصول المسلمين والمسيحيين إلى الأماكن المقدسة، وتهجير السكان الفلسطينيين، والتغييرات الديموغرافية في الأحياء التاريخية للقدس تتحدى روح التعايش. تغيير طابع المدينة وإعادة تعريف الوضع الراهن يعطل الاحترام المتبادل الذي مكّن الأديان المتعددة من الازدهار معاً، مقوضاً توازناً استمر لقرون. الممارسات الحالية لتقييد الوصول إلى الأماكن المقدسة على أساس الهوية الدينية والعرقية تتناقض مع التاريخ الغني للمدينة كمركز للتعايش الديني. السياسات الإسرائيلية الحالية في القدس، من بناء المستوطنات إلى هدم المنازل الفلسطينية وفرض قيود على العبادة، تهدد بتدمير النسيج الاجتماعي والثقافي الفريد للمدينة. الحفاظ الحقيقي على التراث التاريخي يتطلب نهجاً شاملاً يحترم ويحمي جميع الروابط الدينية والثقافية بالمدينة.'
        }
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
