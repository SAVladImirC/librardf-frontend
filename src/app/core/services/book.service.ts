import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: any[] = [
    {
      "isbn": "ab123",
      "author": {
        "id": 1,
        "name": "Chinua",
        "surname": "Achebe",
        "genres": [
          "Fiction",
          "Non-Fiction"
        ],
        "dob": "1930-11-16",
        "dod": "2013-03-21",
        "nationality": "Nigerian",
        "imageUrl": "https://www.theparisreview.org/il/e4b8f842fe/medium/Chinua-Achebe.jpg",
        "biography": "Chinua Achebe was a Nigerian novelist, poet, professor, and critic, best known for his first novel, 'Things Fall Apart' (1958), which is considered a classic of African literature and has been translated into more than 50 languages. His works explore the themes of colonialism and its impact on African identity and culture."
      },
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "shortDescription": "A novel about Okonkwo, a Nigerian man, whose life is upended by colonialism and the arrival of Christian missionaries.",
      "fullDescription": "Things Fall Apart is set in pre-colonial Nigeria and tells the story of Okonkwo, a powerful and influential man in the Igbo society of Umuofia. As European missionaries and colonial administrators start influencing the community, Okonkwo struggles to maintain his position and beliefs. Achebe's narrative highlights the complexities of African traditions and the devastating effects of colonialism. The novel explores themes of masculinity, pride, change, and identity, creating a powerful commentary on cultural clash and transformation.",
      "publisher": "Heinemann",
      "genres": [
        "Historical Fiction"
      ],
      "year": 1958
    },
    {
      "isbn": "ab1231",
      "author": {
        "id": 2,
        "name": "Hans Christian",
        "surname": "Andersen",
        "genres": [
          "Fairy Tales",
          "Children's Literature"
        ],
        "dob": "1805-04-02",
        "dod": "1875-08-04",
        "nationality": "Danish",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0925/3888/files/Hans_Christian_Andersen.jpg?v=1478790035",
        "biography": "Hans Christian Andersen was a Danish author renowned for his fairy tales, including 'The Little Mermaid,' 'The Ugly Duckling,' and 'The Princess and the Pea.' His stories often convey moral lessons and reflect his deep empathy for the underprivileged and marginalized."
      },
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "shortDescription": "A collection of magical stories for children, filled with moral lessons and emotional depth.",
      "fullDescription": "Hans Christian Andersen's Fairy Tales have transcended generations and geographical boundaries, captivating both children and adults. Stories like The Little Mermaid, The Ugly Duckling, and The Snow Queen contain elements of wonder, magic, and heartbreak, offering lessons about human nature, love, and societal values. Andersen’s tales often feature protagonists who overcome great adversity or experience personal transformation, which mirror the author's own life struggles. Though aimed at children, these stories engage with universal truths about sacrifice, beauty, and the pursuit of happiness.",
      "publisher": "Various",
      "genres": [
        "Children's Literature",
        "Fantasy"
      ],
      "year": 1836
    },
    {
      "isbn": "ab12311",
      "author": {
        "id": 3,
        "name": "Dante",
        "surname": "Alighieri",
        "genres": [
          "Epic Poetry",
          "Philosophy"
        ],
        "dob": "1265-06-01",
        "dod": "1321-09-14",
        "nationality": "Italian",
        "imageUrl": "https://www.europassitalian.com/wp-content/uploads/2020/06/thumbnail_large-1-5.jpg",
        "biography": "Dante Alighieri was an Italian poet, writer, and philosopher, best known for his epic poem 'The Divine Comedy,' which is widely considered one of the greatest works of world literature. His writings explore themes of love, morality, and the nature of existence."
      },
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "shortDescription": "An epic poem chronicling Dante’s journey through Hell, Purgatory, and Heaven.",
      "fullDescription": "The Divine Comedy is Dante Alighieri's magnum opus, divided into three parts: Inferno, Purgatorio, and Paradiso. Written in the early 14th century, it presents a deeply allegorical journey of the soul through sin, repentance, and redemption. Dante, guided by the poet Virgil and later his idealized love Beatrice, travels through the circles of Hell, the terraces of Purgatory, and the spheres of Heaven. Along the way, he meets historical and mythological figures who represent various virtues and vices. The poem explores themes of divine justice, love, and salvation while also serving as a commentary on 14th-century Florentine politics and human morality.",
      "publisher": "Various",
      "genres": [
        "Epic Poetry"
      ],
      "year": 1315
    },
    {
      "isbn": "ab1233",
      "author": null,
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "shortDescription": "An ancient Mesopotamian epic that explores the themes of friendship, heroism, and the search for immortality.",
      "fullDescription": "The Epic of Gilgamesh is one of the oldest surviving works of literature, originating from ancient Mesopotamia. It tells the story of Gilgamesh, the king of Uruk, and his deep friendship with the wild man Enkidu. After Enkidu's death, Gilgamesh embarks on a quest for immortality, meeting gods, spirits, and mythological figures along the way. The epic is notable for its exploration of human mortality, the fear of death, and the desire to leave a lasting legacy. It also presents a nuanced portrayal of friendship, grief, and the search for meaning in life.",
      "publisher": "Various",
      "genres": [
        "Epic Poetry"
      ],
      "year": -1700
    },
    {
      "isbn": "ab1234",
      "author": null,
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "shortDescription": "A biblical story about suffering, faith, and the nature of God's justice.",
      "fullDescription": "The Book of Job is one of the wisdom books of the Bible, focusing on the profound suffering of Job, a righteous man whose faith is tested by extreme adversity. Job loses his wealth, family, and health, yet refuses to curse God. Through dialogues with his friends and God, the story examines the nature of suffering, divine justice, and the human condition. Job’s lament and his eventual confrontation with God challenge traditional beliefs about morality and retribution, making the book a deeply philosophical work that addresses the mysteries of divine justice and human suffering.",
      "publisher": "Various (Ancient Hebrew text)",
      "genres": [
        "Religious Text"
      ],
      "year": -600
    },
    {
      "isbn": "ab125",
      "author": null,
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "images/one-thousand-and-one-nights.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "shortDescription": "A collection of Middle Eastern folk tales narrated by Scheherazade to delay her execution.",
      "fullDescription": "One Thousand and One Nights, also known as Arabian Nights, is a renowned collection of Middle Eastern and South Asian folk tales. The stories are framed within the narrative of Scheherazade, who tells tales each night to her husband, King Shahryar, to postpone her execution. The collection includes tales of adventure, love, magic, and betrayal, featuring famous stories like \"Aladdin's Wonderful Lamp\" and \"The Seven Voyages of Sinbad the Sailor\". This rich tapestry of narratives reflects the diverse cultures of the Islamic Golden Age and has influenced literature and storytelling across the world.",
      "publisher": "Various",
      "genres": [
        "Folklore",
        "Fantasy"
      ],
      "year": 1200
    },
    {
      "isbn": "ab126",
      "author": null,
      "country": "Iceland",
      "imageLink": "images/njals-saga.jpg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Njál's Saga",
      "shortDescription": "An Icelandic saga detailing the life of Njál and the complexities of honor and revenge in Viking society.",
      "fullDescription": "Njál's Saga is a classic Icelandic saga written in the 13th century, recounting the life of Njál Thorgeirsson and his family. Set in the Viking Age, the saga explores themes of honor, revenge, and the social dynamics of Icelandic society. Njál, known for his wisdom and foresight, navigates the intricate web of conflicts and feuds that arise among his friends and enemies. The narrative highlights the harsh realities of life during this period and offers insight into Norse culture, law, and values. Its rich character development and intricate plot make it one of the most significant sagas in Icelandic literature.",
      "publisher": "Various",
      "genres": [
        "Historical Fiction"
      ],
      "year": 1350
    },
    {
      "isbn": "ab1237",
      "author": {
        "id": 5,
        "name": "Jane",
        "surname": "Austen",
        "genres": [
          "Romance",
          "Social Commentary"
        ],
        "dob": "1775-12-16",
        "dod": "1817-07-18",
        "nationality": "British",
        "imageUrl": "https://example.com/images/austen.jpg",
        "biography": "Jane Austen was an English novelist known for her six major novels, including 'Pride and Prejudice,' 'Sense and Sensibility,' and 'Emma.' Her works critique the British landed gentry at the end of the 18th century and provide a keen insight into the lives and morals of her time."
      },
      "country": "United Kingdom",
      "imageLink": "images/pride-and-prejudice.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "shortDescription": "A romantic novel that critiques societal expectations through the love story of Elizabeth Bennet and Mr. Darcy.",
      "fullDescription": "Pride and Prejudice follows the life of Elizabeth Bennet, the intelligent and spirited second daughter of the Bennet family, as she navigates issues of class, marriage, and morality in early 19th-century England. The novel begins with the arrival of Mr. Bingley, a wealthy bachelor, and his enigmatic friend Mr. Darcy. While Elizabeth initially finds Mr. Darcy prideful and insufferable, the story evolves to reveal deeper themes of love, respect, and personal growth. Austen's sharp wit and keen observations of societal norms create a timeless critique of class and gender, making it one of the most beloved works in English literature.",
      "publisher": "T. Egerton, Whitehall",
      "genres": [
        "Classic Romance"
      ],
      "year": 1813
    },
    {
      "isbn": "ab128",
      "author": {
        "id": 6,
        "name": "Honoré",
        "surname": "de Balzac",
        "genres": [
          "Realism",
          "Novel"
        ],
        "dob": "1799-05-20",
        "dod": "1850-08-18",
        "nationality": "French",
        "imageUrl": "https://example.com/images/balzac.jpg",
        "biography": "Honoré de Balzac was a French novelist and playwright, recognized for his series of interlinked novels and stories known as 'La Comédie Humaine,' which provides a detailed and vivid panorama of French society in the first half of the 19th century."
      },
      "country": "France",
      "imageLink": "images/le-pere-goriot.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le Père Goriot",
      "shortDescription": "A novel depicting the struggles of a retired merchant and the corrupting power of wealth in Paris.",
      "fullDescription": "Le Père Goriot is a seminal work in Balzac's series La Comédie Humaine, illustrating the life of Goriot, an aging father living in a boarding house in Paris, who sacrifices everything for his daughters’ social advancement. The novel offers a vivid portrayal of early 19th-century Parisian society, exploring themes of ambition, love, and social climbing. Through the eyes of Eugène de Rastignac, a young law student, Balzac delves into the complexities of human relationships and the moral decay induced by wealth and class ambition. The interplay of familial loyalty and societal aspirations makes this work a critical examination of the human condition.",
      "publisher": "Michel Lévy Frères",
      "genres": [
        "Literary Fiction"
      ],
      "year": 1835
    },
    {
      "isbn": "ab1239",
      "author": {
        "id": 7,
        "name": "Samuel",
        "surname": "Beckett",
        "genres": [
          "Play",
          "Novel",
          "Poetry"
        ],
        "dob": "1906-04-13",
        "dod": "1989-12-22",
        "nationality": "Irish",
        "imageUrl": "https://example.com/images/becket.jpg",
        "biography": "Samuel Beckett was an Irish playwright, novelist, and poet, best known for his play 'Waiting for Godot.' His work is often characterized by existential themes, minimalist style, and dark humor, reflecting the absurdity of human existence."
      },
      "country": "Republic of Ireland",
      "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "shortDescription": "A trilogy exploring themes of identity, existence, and the nature of storytelling.",
      "fullDescription": "Samuel Beckett’s trilogy—Molloy, Malone Dies, and The Unnamable—is a profound exploration of the human experience through the lens of absurdism. Each novel features a distinct narrative voice, grappling with themes of identity, consciousness, and the search for meaning in a chaotic world. Molloy follows a man’s fragmented journey as he searches for his mother, while Malone Dies chronicles a dying man’s reflections on life, storytelling, and mortality. Finally, The Unnamable presents a stream-of-consciousness monologue that questions the very nature of existence. Beckett's innovative style and existential themes challenge traditional narrative forms, solidifying his place as a cornerstone of modern literature.",
      "publisher": "Les Éditions de Minuit",
      "genres": [
        "Absurdist Fiction"
      ],
      "year": 1952
    },
    {
      "isbn": "ab12310",
      "author": {
        "id": 8,
        "name": "Giovanni",
        "surname": "Boccaccio",
        "genres": [
          "Narrative Poetry",
          "Prose"
        ],
        "dob": "1313-06-16",
        "dod": "1375-12-21",
        "nationality": "Italian",
        "imageUrl": "https://example.com/images/boccaccio.jpg",
        "biography": "Giovanni Boccaccio was an Italian writer, poet, and important Renaissance humanist, known for his work 'The Decameron,' a collection of novellas that reflect the societal norms and morals of the 14th century."
      },
      "country": "Italy",
      "imageLink": "images/the-decameron.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "The Decameron",
      "shortDescription": "A collection of 100 tales told by a group of young people escaping the Black Death.",
      "fullDescription": "The Decameron is a landmark work of Italian literature composed by Giovanni Boccaccio in the 14th century. The narrative is framed around ten young people—seven women and three men—who flee Florence to a secluded villa to escape the plague. To pass the time, they each tell stories over ten days, resulting in a rich tapestry of tales that explore themes of love, lust, wit, and morality. Boccaccio’s work not only reflects the social and cultural mores of his time but also presents a critical view of society, showcasing human resilience in the face of calamity. The tales range from comedic to tragic, making it a compelling and diverse collection that has influenced countless writers throughout history.",
      "publisher": "Giunti",
      "genres": [
        "Frame Story",
        "Classic Literature"
      ],
      "year": 1351
    },
    {
      "isbn": "ab12311",
      "author": {
        "id": 9,
        "name": "Jorge Luis",
        "surname": "Borges",
        "genres": [
          "Fiction",
          "Essay"
        ],
        "dob": "1899-08-24",
        "dod": "1986-06-14",
        "nationality": "Argentinian",
        "imageUrl": "https://example.com/images/borges.jpg",
        "biography": "Jorge Luis Borges was an Argentine short-story writer, essayist, and poet, known for his complex narratives and exploration of philosophical themes in works like 'The Aleph' and 'Ficciones.' His writings often blur the line between reality and fiction."
      },
      "country": "Argentina",
      "imageLink": "images/ficciones.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Ficciones\n",
      "pages": 224,
      "title": "Ficciones",
      "shortDescription": "A collection of philosophical short stories that blur the lines between reality and fiction.",
      "fullDescription": "Ficciones is a celebrated collection of short stories by Argentine writer Jorge Luis Borges, first published in 1944. The stories explore intricate themes such as infinity, labyrinths, identity, and the nature of reality. Borges masterfully intertwines philosophical concepts with fantastical narratives, creating a unique reading experience that challenges conventional storytelling. Notable stories include \"Tlön, Uqbar, Orbis Tertius\", which introduces an imaginary world, and \"The Garden of Forking Paths\", which presents the idea of multiple realities. Borges’ innovative approach to literature has had a profound impact on modern fiction, inspiring writers and thinkers across the globe.",
      "publisher": "Editorial Sur",
      "genres": [
        "Short Stories",
        "Fantasy"
      ],
      "year": 1965
    },
    {
      "isbn": "ab12334",
      "author": {
        "id": 10,
        "name": "Emily",
        "surname": "Brontë",
        "genres": [
          "Poetry",
          "Fiction"
        ],
        "dob": "1818-07-30",
        "dod": "1848-12-19",
        "nationality": "British",
        "imageUrl": "https://example.com/images/bronte.jpg",
        "biography": "Emily Brontë was an English novelist and poet, best known for her only novel, 'Wuthering Heights,' which has become a classic of English literature. Her work is noted for its psychological depth and exploration of themes such as passion and revenge."
      },
      "country": "United Kingdom",
      "imageLink": "images/wuthering-heights.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
      "pages": 342,
      "title": "Wuthering Heights",
      "shortDescription": "A dark and passionate tale of love and revenge set on the Yorkshire moors.",
      "fullDescription": "Wuthering Heights is Emily Brontë’s only novel, a compelling and turbulent story of the intense and destructive love between Heathcliff and Catherine Earnshaw. Set against the wild and desolate landscape of the Yorkshire moors, the novel unfolds through multiple narrators, revealing the complexities of love, vengeance, and social class. Heathcliff, an orphan adopted by the Earnshaw family, grows to become both a tragic hero and an anti-hero, consumed by his love for Catherine and driven to revenge against those who wrong him. Brontë’s exploration of emotional depth, nature, and the supernatural has established the novel as a classic of English literature, celebrated for its psychological insight and powerful imagery.",
      "publisher": "Thomas Cautley Newby",
      "genres": [
        "Gothic Fiction",
        "Romance"
      ],
      "year": 1847
    },
    {
      "isbn": "ab12355",
      "author": {
        "id": 11,
        "name": "Albert",
        "surname": "Camus",
        "genres": [
          "Philosophy",
          "Fiction"
        ],
        "dob": "1913-11-07",
        "dod": "1960-01-04",
        "nationality": "Algerian-French",
        "imageUrl": "https://example.com/images/camus.jpg",
        "biography": "Albert Camus was a French philosopher, author, and journalist known for his contributions to existentialism and absurdism. His works, including 'The Stranger' and 'The Myth of Sisyphus,' explore themes of absurdity, freedom, and rebellion against meaninglessness."
      },
      "country": "Algeria, French Empire",
      "imageLink": "images/l-etranger.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
      "pages": 185,
      "title": "The Stranger",
      "shortDescription": "A philosophical novel examining absurdism through the life of Meursault, an emotionally detached man.",
      "fullDescription": "The Stranger follows Meursault, an Algerian man whose indifferent response to his mother’s death and subsequent actions lead him into a moral crisis. Camus explores themes of absurdism and existentialism, illustrating the protagonist's alienation from society and conventional values. As Meursault navigates a series of events that culminate in a murder trial, his existential detachment raises questions about morality, meaning, and the human condition. The novel is a powerful critique of societal norms and an exploration of the absurdity of existence, cementing Camus' status as a leading figure in 20th-century literature.",
      "publisher": "Gallimard",
      "genres": [
        "Existential Fiction"
      ],
      "year": 1942
    },
    {
      "isbn": "ab12378",
      "author": {
        "id": 12,
        "name": "Paul",
        "surname": "Celan",
        "genres": [
          "Poetry"
        ],
        "dob": "1920-11-23",
        "dod": "1970-04-20",
        "nationality": "Romanian-French",
        "imageUrl": "https://example.com/images/celan.jpg",
        "biography": "Paul Celan was a Romanian-born poet who wrote in German, known for his profound and often enigmatic poetry that deals with themes of loss, trauma, and the Holocaust. His most famous poem, 'Death Fugue,' exemplifies his unique style and the depth of his experience."
      },
      "country": "Romania, France",
      "imageLink": "images/poems-paul-celan.jpg",
      "language": "German",
      "link": "\n",
      "pages": 320,
      "title": "Poems",
      "shortDescription": "A collection of poems marked by a haunting and fractured lyricism, exploring trauma, memory, and the Holocaust.",
      "fullDescription": " Paul Celan's Poems offer a profound and challenging body of work, often shaped by the traumas of the Holocaust and the aftermath of World War II. His poetry delves into themes of loss, exile, and the fragmented nature of language itself. Written in German, Celan's poems employ dense and innovative metaphors, pushing the boundaries of linguistic expression. His most famous poem, \"Death Fugue\", reflects on the horrors of concentration camps, but his later works move towards greater abstraction and linguistic experimentation. Celan's poetry is known for its stark, minimalist style, and its ability to evoke powerful emotions through sparse, enigmatic lines, often revealing deep layers of philosophical and existential inquiry.",
      "publisher": "Various, including Suhrkamp Verlag",
      "genres": [
        "Poetry"
      ],
      "year": 1952
    },
    {
      "isbn": "1ab123",
      "author": {
        "id": 13,
        "name": "Louis-Ferdinand",
        "surname": "Céline",
        "genres": [
          "Novel",
          "Essay"
        ],
        "dob": "1894-05-27",
        "dod": "1961-07-01",
        "nationality": "French",
        "imageUrl": "https://example.com/images/celine.jpg",
        "biography": "Louis-Ferdinand Céline was a French novelist and doctor, known for his controversial and innovative writing style. His most famous novel, 'Journey to the End of the Night,' is noted for its dark humor and critique of society."
      },
      "country": "France",
      "imageLink": "images/voyage-au-bout-de-la-nuit.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
      "pages": 505,
      "title": "Journey to the End of the Night",
      "shortDescription": "A semi-autobiographical novel exploring the absurdities of life through the experiences of Ferdinand Bardamu.",
      "fullDescription": "Journey to the End of the Night is a groundbreaking novel by French author Louis-Ferdinand Céline, known for its innovative use of language and stream-of-consciousness style. The narrative follows Ferdinand Bardamu, a disillusioned soldier, as he navigates the horrors of World War I, the complexities of modern life, and the human condition. Céline’s sharp, cynical wit exposes the absurdity and brutality of existence, blending autobiography with fiction. The novel challenges societal norms and morality, presenting a raw and honest portrayal of humanity’s struggles. Its influence on modern literature is profound, paving the way for existential and absurdist writers.",
      "publisher": "Denoël",
      "genres": [
        "Novel",
        "Modernist"
      ],
      "year": 1932
    },
    {
      "isbn": "3ab123",
      "author": {
        "id": 14,
        "name": "Miguel",
        "surname": "de Cervantes",
        "genres": [
          "Novel",
          "Drama"
        ],
        "dob": "1547-09-29",
        "dod": "1616-04-22",
        "nationality": "Spanish",
        "imageUrl": "https://example.com/images/cervantes.jpg",
        "biography": "Miguel de Cervantes was a Spanish writer, best known for his novel 'Don Quixote,' considered one of the first modern novels. His work has had a profound impact on Western literature and is celebrated for its inventive narrative style and exploration of reality and illusion."
      },
      "country": "Spain",
      "imageLink": "images/don-quijote-de-la-mancha.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
      "pages": 1056,
      "title": "Don Quijote De La Mancha",
      "shortDescription": "A humorous and poignant tale of an aging nobleman who becomes a self-styled knight-errant.",
      "fullDescription": "Don Quijote de la Mancha is considered one of the greatest works of literature, chronicling the adventures of Alonso Quixano, an aging nobleman who, inspired by chivalric romances, sets out to revive knighthood as Don Quijote. Accompanied by his loyal squire, Sancho Panza, he embarks on a series of misadventures, mistaking windmills for giants and common peasants for noble damsels. Cervantes’ novel explores themes of reality versus illusion, the nature of identity, and the complexities of human behavior. Its rich characterizations and profound social commentary have made it a foundational text in Western literature, influencing countless authors and artistic movements.",
      "publisher": "Francisco de Robles",
      "genres": [
        "Novel",
        "Classic Literature"
      ],
      "year": 1610
    },
    {
      "isbn": "ab123fds",
      "author": {
        "id": 15,
        "name": "Geoffrey",
        "surname": "Chaucer",
        "genres": [
          "Poetry",
          "Satire"
        ],
        "dob": "1343-01-01",
        "dod": "1400-10-25",
        "nationality": "English",
        "imageUrl": "https://example.com/images/chaucer.jpg",
        "biography": "Geoffrey Chaucer was an English poet, known as the 'Father of English literature.' His most famous work, 'The Canterbury Tales,' is a collection of stories that provide insight into medieval society and explore themes of love, morality, and human nature."
      },
      "country": "England",
      "imageLink": "images/the-canterbury-tales.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
      "pages": 544,
      "title": "The Canterbury Tales",
      "shortDescription": "A collection of stories told by pilgrims traveling to Canterbury, reflecting various social classes and themes.",
      "fullDescription": "The Canterbury Tales is a landmark work of English literature, comprising a collection of stories narrated by a diverse group of pilgrims on their journey to the shrine of Saint Thomas Becket in Canterbury. Written in the late 14th century by Geoffrey Chaucer, the tales encompass a wide range of genres, including romance, comedy, and morality tales, reflecting the social and cultural dynamics of the time. Each character, from the Knight to the Wife of Bath, embodies different aspects of medieval society, providing insight into the era’s values, conflicts, and humor. Chaucer’s use of vernacular English and his vivid characterizations have established this work as a foundational text in English literature.",
      "publisher": "William Caxton",
      "genres": [
        "Frame Narrative",
        "Classic Literature"
      ],
      "year": 1450
    },
    {
      "isbn": "ab123ew",
      "author": {
        "id": 16,
        "name": "Anton",
        "surname": "Chekhov",
        "genres": [
          "Drama",
          "Short Story"
        ],
        "dob": "1860-01-29",
        "dod": "1904-07-15",
        "nationality": "Russian",
        "imageUrl": "https://example.com/images/chekhov.jpg",
        "biography": "Anton Chekhov was a Russian playwright and short story writer, considered one of the greatest writers in the history of literature. His works, including plays like 'The Cherry Orchard' and 'The Seagull,' are celebrated for their depth and the portrayal of human emotions."
      },
      "country": "Russia",
      "imageLink": "images/stories-of-anton-chekhov.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
      "pages": 194,
      "title": "Stories",
      "shortDescription": "A collection of Chekhov's short stories, known for their psychological depth and keen observations of Russian society.",
      "fullDescription": "Anton Chekhov’s Stories comprise some of the finest short fiction in world literature, capturing the essence of everyday life in late 19th-century Russia. His stories are renowned for their brevity, subtlety, and keen insight into human nature, often focusing on the moral struggles, frustrations, and quiet despair of ordinary people. Through simple yet powerful prose, Chekhov explores themes such as loneliness, social injustice, love, and the clash between tradition and modernity. His writing style, devoid of sentimentality and moralizing, creates rich, layered narratives that leave much to the reader’s interpretation. Stories like \"The Lady with the Dog\", \"The Seagull\" and \"Ward No. 6\" are among Chekhov’s most celebrated works, exemplifying his genius in the art of the short story.",
      "publisher": "Various, including Penguin Classics",
      "genres": [
        "Short Stories",
        "Fiction"
      ],
      "year": 1886
    },
    {
      "isbn": "ab123we",
      "author": {
        "id": 17,
        "name": "Joseph",
        "surname": "Conrad",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1857-12-03",
        "dod": "1924-08-03",
        "nationality": "Polish-British",
        "imageUrl": "https://example.com/images/conrad.jpg",
        "biography": "Joseph Conrad was a Polish-British novelist and short story writer, known for his works exploring themes of imperialism and human nature. His notable works include 'Heart of Darkness' and 'Lord Jim,' which reflect his experiences as a sailor and his views on colonialism."
      },
      "country": "United Kingdom",
      "imageLink": "images/nostromo.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nostromo\n",
      "pages": 320,
      "title": "Nostromo",
      "shortDescription": "A novel set in a fictional South American country, exploring imperialism and human greed through the discovery of silver.",
      "fullDescription": "Nostromo is a complex novel by Joseph Conrad, set in the fictional South American country of Costaguana during the late 19th century. The story revolves around the discovery of a rich silver mine and the ensuing political and social upheaval it causes. The titular character, Nostromo, is an Italian expatriate and the mine's trusted foreman, who becomes embroiled in the conflicts between imperialist interests and local desires for independence. Conrad examines themes of imperialism, capitalism, and human ambition, revealing the moral ambiguities inherent in colonial exploitation. His intricate narrative style and rich characterizations create a compelling exploration of the consequences of greed and the impact of foreign intervention on local cultures.",
      "publisher": "William Blackwood and Sons",
      "genres": [
        "Novel",
        "Political Fiction"
      ],
      "year": 1904
    },
    {
      "isbn": "ab1sd23",
      "author": {
        "id": 18,
        "name": "Charles",
        "surname": "Dickens",
        "genres": [
          "Novel",
          "Social Critique"
        ],
        "dob": "1812-02-07",
        "dod": "1870-06-09",
        "nationality": "British",
        "imageUrl": "https://example.com/images/dickens.jpg",
        "biography": "Charles Dickens was an English writer and social critic, widely regarded as the greatest novelist of the Victorian era. His works, including 'A Christmas Carol,' 'Great Expectations,' and 'Oliver Twist,' often address social issues and highlight the struggles of the poor."
      },
      "country": "United Kingdom",
      "imageLink": "images/great-expectations.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
      "pages": 194,
      "title": "Great Expectations",
      "shortDescription": "A coming-of-age story following the life of Pip, an orphan who seeks to improve his social status.",
      "fullDescription": "Great Expectations is a novel by Charles Dickens that tells the story of Pip, an orphan raised by his sister and her husband, Joe Gargery. After a chance encounter with the escaped convict Magwitch and later the mysterious benefactor Miss Havisham, Pip dreams of becoming a gentleman and winning the love of Estella, Miss Havisham’s beautiful but cold ward. Throughout his journey, Pip faces various challenges and moral dilemmas that ultimately lead him to confront the true meaning of wealth, loyalty, and identity. Dickens’ vivid characters and rich social commentary illuminate the class disparities and injustices of Victorian England, making this novel a timeless exploration of ambition and personal growth.",
      "publisher": "Chapman & Hall",
      "genres": [
        "Novel",
        "Victorian Literature"
      ],
      "year": 1861
    },
    {
      "isbn": "ab12ww3",
      "author": {
        "id": 19,
        "name": "Denis",
        "surname": "Diderot",
        "genres": [
          "Philosophy",
          "Literary Criticism"
        ],
        "dob": "1713-10-05",
        "dod": "1784-07-31",
        "nationality": "French",
        "imageUrl": "https://example.com/images/diderot.jpg",
        "biography": "Denis Diderot was a French philosopher, art critic, and writer, best known for co-founding the Encyclopédie, a monumental reference work that aimed to summarize human knowledge. His contributions to literature and philosophy were instrumental during the Enlightenment."
      },
      "country": "France",
      "imageLink": "images/jacques-the-fatalist.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
      "pages": 596,
      "title": "Jacques the Fatalist",
      "shortDescription": "A novel that blends fiction and philosophy, questioning free will and determinism through the adventures of Jacques.",
      "fullDescription": "Jacques the Fatalist is a philosophical novel by Denis Diderot that features Jacques, a servant, and his master as they travel and share tales of love, fate, and free will. The narrative employs a conversational style, with Diderot directly engaging the reader and challenging conventional storytelling. Throughout their journey, Jacques expresses a belief in fatalism—the idea that events are predetermined—while his master represents a contrasting viewpoint. The novel explores existential themes, the nature of human relationships, and the interplay between fate and personal agency, making it a significant work in the history of philosophy and literature.",
      "publisher": "Various",
      "genres": [
        "Philosophical Novel"
      ],
      "year": 1796
    },
    {
      "isbn": "ab123qq",
      "author": {
        "id": 20,
        "name": "Alfred",
        "surname": "Döblin",
        "genres": [
          "Novel",
          "Expressionism"
        ],
        "dob": "1878-08-10",
        "dod": "1957-06-26",
        "nationality": "German",
        "imageUrl": "https://example.com/images/doblin.jpg",
        "biography": "Alfred Döblin was a German novelist and expressionist writer, known for his groundbreaking novel 'Berlin Alexanderplatz,' which explores the life of a working-class man in post-World War I Berlin. His innovative narrative style has had a lasting impact on modern literature."
      },
      "country": "Germany",
      "imageLink": "images/berlin-alexanderplatz.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
      "pages": 600,
      "title": "Berlin Alexanderplatz",
      "shortDescription": "A modernist novel depicting the life of Franz Biberkopf, a man attempting to reintegrate into society after prison.",
      "fullDescription": "Berlin Alexanderplatz is a seminal modernist novel by Alfred Döblin, chronicling the life of Franz Biberkopf, who is released from prison and tries to rebuild his life in the bustling, chaotic environment of 1920s Berlin. The novel employs innovative narrative techniques, including stream-of-consciousness and fragmented dialogue, reflecting the tumultuous and disorienting nature of urban life. As Franz navigates the challenges of poverty, crime, and personal relationships, he embodies the struggles of the modern individual against societal forces. Döblin’s vivid portrayal of Berlin, infused with historical and cultural references, captures the essence of the Weimar Republic era, making the novel a pivotal work in 20th-century literature.",
      "publisher": "Various",
      "genres": [
        "Modernist Novel"
      ],
      "year": 1929
    },
    {
      "isbn": "ab12fds3",
      "author": {
        "id": 21,
        "name": "Fyodor",
        "surname": "Dostoevsky",
        "genres": [
          "Novel",
          "Philosophy"
        ],
        "dob": "1821-11-11",
        "dod": "1881-02-09",
        "nationality": "Russian",
        "imageUrl": "https://example.com/images/dostoevsky.jpg",
        "biography": "Fyodor Dostoevsky was a Russian novelist and philosopher, renowned for his exploration of psychology and morality in works such as 'Crime and Punishment,' 'The Brothers Karamazov,' and 'The Idiot.' His writings delve into the complexities of human existence and the struggle between faith and doubt."
      },
      "country": "Russia",
      "imageLink": "images/crime-and-punishment.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
      "pages": 551,
      "title": "Crime and Punishment",
      "shortDescription": "A psychological drama exploring the moral dilemmas of Raskolnikov, a student who commits murder.",
      "fullDescription": "Crime and Punishment is a profound exploration of morality, guilt, and redemption, following the troubled protagonist, Raskolnikov, a former student living in St. Petersburg. Raskolnikov develops a theory that certain extraordinary individuals are above the law and believes he can justify the murder of a pawnbroker for a greater good. However, after committing the crime, he is plagued by guilt and paranoia, leading to a psychological unraveling. Dostoevsky delves into themes of morality, justice, and the consequences of alienation, ultimately exploring the possibility of redemption through suffering. The novel's intricate character development and philosophical depth have established it as a cornerstone of world literature.",
      "publisher": "The Russian Messenger",
      "genres": [
        "Psychological Fiction"
      ],
      "year": 1866
    },
    {
      "isbn": "abasd123",
      "author": {
        "id": 21,
        "name": "Fyodor",
        "surname": "Dostoevsky",
        "genres": [
          "Novel",
          "Philosophy"
        ],
        "dob": "1821-11-11",
        "dod": "1881-02-09",
        "nationality": "Russian",
        "imageUrl": "https://example.com/images/dostoevsky.jpg",
        "biography": "Fyodor Dostoevsky was a Russian novelist and philosopher, renowned for his exploration of psychology and morality in works such as 'Crime and Punishment,' 'The Brothers Karamazov,' and 'The Idiot.' His writings delve into the complexities of human existence and the struggle between faith and doubt."
      },
      "country": "Russia",
      "imageLink": "images/the-idiot.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
      "pages": 656,
      "title": "The Idiot",
      "shortDescription": "A psychological drama exploring the moral dilemmas of Raskolnikov, a student who commits murder.",
      "fullDescription": "Crime and Punishment is a profound exploration of morality, guilt, and redemption, following the troubled protagonist, Raskolnikov, a former student living in St. Petersburg. Raskolnikov develops a theory that certain extraordinary individuals are above the law and believes he can justify the murder of a pawnbroker for a greater good. However, after committing the crime, he is plagued by guilt and paranoia, leading to a psychological unraveling. Dostoevsky delves into themes of morality, justice, and the consequences of alienation, ultimately exploring the possibility of redemption through suffering. The novel's intricate character development and philosophical depth have established it as a cornerstone of world literature.",
      "publisher": "The Russian Messenger",
      "genres": [
        "Psychological Fiction"
      ],
      "year": 1869
    },
    {
      "isbn": "ab123asd",
      "author": {
        "id": 21,
        "name": "Fyodor",
        "surname": "Dostoevsky",
        "genres": [
          "Novel",
          "Philosophy"
        ],
        "dob": "1821-11-11",
        "dod": "1881-02-09",
        "nationality": "Russian",
        "imageUrl": "https://example.com/images/dostoevsky.jpg",
        "biography": "Fyodor Dostoevsky was a Russian novelist and philosopher, renowned for his exploration of psychology and morality in works such as 'Crime and Punishment,' 'The Brothers Karamazov,' and 'The Idiot.' His writings delve into the complexities of human existence and the struggle between faith and doubt."
      },
      "country": "Russia",
      "imageLink": "images/the-possessed.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
      "pages": 768,
      "title": "The Possessed",
      "shortDescription": "A novel depicting the moral and political chaos in Russia, driven by radical intellectuals.",
      "fullDescription": "The Possessed (also known as Demons or The Devils) is one of Fyodor Dostoevsky's major novels, examining the political unrest in 19th-century Russia through the lens of a small provincial town. The story revolves around the manipulative Pyotr Verkhovensky and the idealistic Nikolai Stavrogin, who represent two opposing forces of revolutionary zeal and moral nihilism. As the town descends into chaos and violence, Dostoevsky explores the destructive consequences of radical ideologies and the inherent dangers of abandoning moral and religious principles. The novel is a powerful reflection on the rise of political extremism, making it a deeply philosophical and psychologically intense work.",
      "publisher": "The Russian Messenger",
      "genres": [
        "Political Novel",
        "Psychological Fiction"
      ],
      "year": 1872
    },
    {
      "isbn": "ab123dsfds",
      "author": {
        "id": 21,
        "name": "Fyodor",
        "surname": "Dostoevsky",
        "genres": [
          "Novel",
          "Philosophy"
        ],
        "dob": "1821-11-11",
        "dod": "1881-02-09",
        "nationality": "Russian",
        "imageUrl": "https://example.com/images/dostoevsky.jpg",
        "biography": "Fyodor Dostoevsky was a Russian novelist and philosopher, renowned for his exploration of psychology and morality in works such as 'Crime and Punishment,' 'The Brothers Karamazov,' and 'The Idiot.' His writings delve into the complexities of human existence and the struggle between faith and doubt."
      },
      "country": "Russia",
      "imageLink": "images/the-brothers-karamazov.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
      "pages": 824,
      "title": "The Brothers Karamazov",
      "shortDescription": "A philosophical novel focusing on the moral dilemmas of the Karamazov brothers, particularly their relationship with their father.",
      "fullDescription": "The Brothers Karamazov is Dostoevsky’s final novel, an epic exploration of faith, free will, and moral struggle. The novel centers on the lives of the Karamazov family—Fyodor, the dissolute father, and his three sons: Dmitri, the passionate eldest; Ivan, the intellectual skeptic; and Alyosha, the spiritual and compassionate youngest. When Fyodor is murdered, the brothers grapple with their roles in his death, leading to intense psychological and philosophical inquiry. Themes of God’s existence, morality, and the nature of human suffering permeate the novel, which is widely regarded as one of the most profound achievements in world literature.",
      "publisher": "The Russian Messenger",
      "genres": [
        "Philosophical Novel",
        "Psychological Fiction"
      ],
      "year": 1880
    },
    {
      "isbn": "ab123ddd",
      "author": {
        "id": 22,
        "name": "George",
        "surname": "Eliot",
        "genres": [
          "Novel",
          "Social Critique"
        ],
        "dob": "1819-11-22",
        "dod": "1880-12-22",
        "nationality": "British",
        "imageUrl": "https://example.com/images/eliot.jpg",
        "biography": "George Eliot was the pen name of Mary Ann Evans, an English novelist and one of the leading writers of the Victorian era. Her notable works, including 'Middlemarch' and 'Silas Marner,' are known for their psychological depth and exploration of social issues."
      },
      "country": "United Kingdom",
      "imageLink": "images/middlemarch.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
      "pages": 800,
      "title": "Middlemarch",
      "shortDescription": "A comprehensive portrayal of provincial life in 19th-century England, focusing on social reform and personal ambition.",
      "fullDescription": "Middlemarch is considered one of the greatest novels in the English language, offering a richly detailed portrait of life in a provincial English town during the early 19th century. The novel’s vast cast of characters includes Dorothea Brooke, an idealistic young woman, and Tertius Lydgate, a progressive doctor, both of whom struggle to reconcile their dreams with societal limitations. George Eliot (the pen name of Mary Ann Evans) explores themes of political reform, marriage, and the nature of ambition, presenting a critique of the constraints placed on women and the complexity of human motivations. Through its intricate social commentary and psychological depth, Middlemarch offers a timeless reflection on individual and collective morality.",
      "publisher": "Blackwood’s Magazine",
      "genres": [
        "Novel",
        "Victorian Literature"
      ],
      "year": 1871
    },
    {
      "isbn": "ab12asdas3",
      "author": {
        "id": 23,
        "name": "Ralph",
        "surname": "Ellison",
        "genres": [
          "Novel",
          "Essay"
        ],
        "dob": "1914-03-01",
        "dod": "1994-04-16",
        "nationality": "American",
        "imageUrl": "https://example.com/images/ellison.jpg",
        "biography": "Ralph Ellison was an American novelist, essayist, and literary critic, best known for his novel 'Invisible Man,' which addresses the social and intellectual issues faced by African Americans in the early 20th century. His work explores themes of identity and race."
      },
      "country": "United States",
      "imageLink": "images/invisible-man.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
      "pages": 581,
      "title": "Invisible Man",
      "shortDescription": "A novel about an unnamed Black man’s journey through racial invisibility and identity in mid-20th-century America.",
      "fullDescription": "Invisible Man is a groundbreaking novel that explores the experiences of a young Black man who struggles to find his identity and visibility in a racially divided America. The protagonist, who remains unnamed, narrates his journey from the rural South to Harlem, encountering racism, exploitation, and disillusionment along the way. Ralph Ellison’s novel blends elements of existentialism, social commentary, and surrealism, as the protagonist grapples with the complexities of identity, power, and individuality in a society that refuses to see him. The novel is both a powerful critique of racial oppression and a profound exploration of personal and societal invisibility, making it a cornerstone of African American literature.",
      "publisher": "Random House",
      "genres": [
        "Novel",
        "Modernist Fiction"
      ],
      "year": 1952
    },
    {
      "isbn": "ab123saa",
      "author": {
        "id": 24,
        "name": "Euripides",
        "surname": "",
        "genres": [
          "Tragedy",
          "Drama"
        ],
        "dob": "480 BC",
        "dod": "406 BC",
        "nationality": "Greek",
        "imageUrl": "https://example.com/images/euripides.jpg",
        "biography": "Euripides was an ancient Greek tragedian and one of the three ancient Greek tragedians whose works have survived. His plays, including 'Medea' and 'The Bacchae,' often explore complex themes of human emotion and challenge societal norms."
      },
      "country": "Greece",
      "imageLink": "images/medea.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
      "pages": 104,
      "title": "Medea",
      "shortDescription": "A tragedy about Medea’s revenge against her unfaithful husband, Jason.",
      "fullDescription": "Medea is one of the most powerful and enduring tragedies from ancient Greek literature, written by the playwright Euripides. The play tells the story of Medea, a sorceress who seeks revenge on her husband, Jason, after he abandons her and their children to marry another woman. Euripides presents Medea as a complex figure—both a victim of betrayal and a figure of intense rage and vengeance. The play explores themes of love, betrayal, revenge, and the position of women in a patriarchal society. Medea is notable for its psychological depth and its challenge to traditional gender roles, making it one of the most compelling works in the classical canon.",
      "publisher": "Various",
      "genres": [
        "Tragedy",
        "Ancient Greek Drama"
      ],
      "year": -431
    },
    {
      "isbn": "ab123sdaasd",
      "author": {
        "id": 25,
        "name": "William",
        "surname": "Faulkner",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1897-09-25",
        "dod": "1962-07-06",
        "nationality": "American",
        "imageUrl": "https://example.com/images/faulkner.jpg",
        "biography": "William Faulkner was an American writer known for his complex narratives and innovative writing style. His works, including 'The Sound and the Fury' and 'As I Lay Dying,' explore the complexities of the Southern United States and the human condition."
      },
      "country": "United States",
      "imageLink": "images/absalom-absalom.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
      "pages": 313,
      "title": "Absalom, Absalom!",
      "shortDescription": "A novel about the rise and fall of Thomas Sutpen, a plantation owner in the American South, and his family’s tragic legacy.",
      "fullDescription": "Absalom, Absalom! is considered one of William Faulkner’s most ambitious and challenging novels. The book recounts the story of Thomas Sutpen, a self-made plantation owner, whose pursuit of wealth and power in the antebellum South leads to his family’s eventual ruin. Through a complex, non-linear narrative structure and multiple perspectives, Faulkner explores themes of race, history, and the South’s haunted past. The novel delves into the destructive consequences of ambition, pride, and the legacy of slavery, using Faulkner’s signature stream-of-consciousness style to weave a rich and tragic tapestry of Southern life. Its intricate narrative and psychological complexity have earned it a place as a cornerstone of American modernist literature.",
      "publisher": "Random House",
      "genres": [
        "Southern Gothic",
        "Modernist"
      ],
      "year": 1936
    },
    {
      "isbn": "amjyb123",
      "author": {
        "id": 25,
        "name": "William",
        "surname": "Faulkner",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1897-09-25",
        "dod": "1962-07-06",
        "nationality": "American",
        "imageUrl": "https://example.com/images/faulkner.jpg",
        "biography": "William Faulkner was an American writer known for his complex narratives and innovative writing style. His works, including 'The Sound and the Fury' and 'As I Lay Dying,' explore the complexities of the Southern United States and the human condition."
      },
      "country": "United States",
      "imageLink": "images/the-sound-and-the-fury.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
      "pages": 326,
      "title": "The Sound and the Fury",
      "shortDescription": "A novel that tells the tragic downfall of the Compson family through multiple, fragmented perspectives.",
      "fullDescription": "The Sound and the Fury is one of Faulkner’s most celebrated novels, known for its innovative use of narrative and its exploration of time, memory, and family disintegration. The story revolves around the Compson family, once a proud Southern dynasty, now in decline. The novel is divided into four sections, each told from a different perspective, including Benjy, the mentally disabled son, and Quentin, the troubled eldest brother. Faulkner’s complex, fragmented structure captures the chaos and decay of the Compson family and the broader collapse of Southern aristocratic values. The novel’s experimental narrative techniques and psychological depth have made it a classic of modernist literature.",
      "publisher": "Jonathan Cape and Harrison Smith",
      "genres": [
        "Southern Gothic",
        "Modernist"
      ],
      "year": 1929
    },
    {
      "isbn": "ab1uyk23",
      "author": {
        "id": 26,
        "name": "Gustave",
        "surname": "Flaubert",
        "genres": [
          "Novel",
          "Realism"
        ],
        "dob": "1821-12-12",
        "dod": "1880-05-08",
        "nationality": "French",
        "imageUrl": "https://example.com/images/flaubert.jpg",
        "biography": "Gustave Flaubert was a French novelist and is considered one of the most influential literary figures of the 19th century. His most famous work, 'Madame Bovary,' is a pioneering example of literary realism and explores the themes of desire and disillusionment."
      },
      "country": "France",
      "imageLink": "images/madame-bovary.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
      "pages": 528,
      "title": "Madame Bovary",
      "shortDescription": "A novel about Emma Bovary, a provincial woman whose dissatisfaction with her life leads to infidelity and financial ruin.",
      "fullDescription": "Madame Bovary is considered one of the greatest realist novels of all time, and a masterpiece of French literature. The novel tells the story of Emma Bovary, an unhappily married woman who longs for romance, wealth, and excitement. Trapped in a mundane provincial life with her dull husband, Charles, Emma embarks on a series of love affairs and extravagant spending, ultimately leading to her emotional and financial downfall. Flaubert’s meticulous attention to detail and his exploration of Emma’s inner life provide a devastating critique of bourgeois society and the romantic ideals that lead to Emma’s destruction. The novel’s themes of desire, disillusionment, and social hypocrisy remain relevant to this day.",
      "publisher": "Revue de Paris",
      "genres": [
        "Realist Novel"
      ],
      "year": 1857
    },
    {
      "isbn": "ab1uky23",
      "author": {
        "id": 26,
        "name": "Gustave",
        "surname": "Flaubert",
        "genres": [
          "Novel",
          "Realism"
        ],
        "dob": "1821-12-12",
        "dod": "1880-05-08",
        "nationality": "French",
        "imageUrl": "https://example.com/images/flaubert.jpg",
        "biography": "Gustave Flaubert was a French novelist and is considered one of the most influential literary figures of the 19th century. His most famous work, 'Madame Bovary,' is a pioneering example of literary realism and explores the themes of desire and disillusionment."
      },
      "country": "France",
      "imageLink": "images/l-education-sentimentale.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Sentimental_Education\n",
      "pages": 606,
      "title": "Sentimental Education",
      "shortDescription": "A novel following the romantic and political education of a young man during the French Revolution of 1848.",
      "fullDescription": "Sentimental Education is a realist novel by Gustave Flaubert that chronicles the life of Frédéric Moreau, a young man who moves to Paris during the French Revolution of 1848. The novel explores Frédéric’s relationships, his unrequited love for Madame Arnoux, and his attempts to navigate the political and social upheavals of the time. Flaubert offers a detailed and critical portrait of the French bourgeoisie, highlighting the disillusionment and failure of both personal and political aspirations. The novel’s depiction of youthful idealism, romantic disappointment, and the futility of ambition has made it one of the most influential works of French literature, marking it as a timeless commentary on human nature and society.",
      "publisher": "Michel Lévy Frères",
      "genres": [
        "Realist Novel"
      ],
      "year": 1869
    },
    {
      "isbn": "abrth123",
      "author": {
        "id": 27,
        "name": "Federico",
        "surname": "García Lorca",
        "genres": [
          "Poetry",
          "Drama"
        ],
        "dob": "1898-06-05",
        "dod": "1936-08-19",
        "nationality": "Spanish",
        "imageUrl": "https://example.com/images/lorca.jpg",
        "biography": "Federico García Lorca was a Spanish poet, playwright, and director, known for his deeply emotional and passionate works. His notable pieces, including 'Romancero Gitano' and 'The House of Bernarda Alba,' reflect the culture and struggles of Andalusian life."
      },
      "country": "Spain",
      "imageLink": "images/gypsy-ballads.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
      "pages": 218,
      "title": "Gypsy Ballads",
      "shortDescription": "A collection of poems drawing on Andalusian folklore, blending surrealism with traditional ballad forms.",
      "fullDescription": "Gypsy Ballads (Romancero gitano) is a collection of poems by the Spanish poet Federico García Lorca, blending elements of traditional Andalusian folk ballads with surrealist imagery. The poems explore themes of love, death, and the gypsy identity, using vivid, dreamlike language to evoke the landscape and culture of Andalusia. Lorca’s lyrical style captures the tension between the modern world and the ancient, marginalized culture of the gypsies, creating a haunting and evocative portrayal of a people caught between freedom and fate. The collection remains one of the most celebrated works of Spanish poetry, known for its emotional intensity and rich symbolism.",
      "publisher": "Ediciones del Sur",
      "genres": [
        "Poetry"
      ],
      "year": 1928
    },
    {
      "isbn": "ab123qoki",
      "author": {
        "id": 28,
        "name": "Gabriel",
        "surname": "García Márquez",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1927-03-06",
        "dod": "2014-04-17",
        "nationality": "Colombian",
        "imageUrl": "https://example.com/images/marquez.jpg",
        "biography": "Gabriel García Márquez was a Colombian novelist and Nobel Prize winner, renowned for his magical realism. His most famous work, 'One Hundred Years of Solitude,' explores themes of love, solitude, and the cyclical nature of history."
      },
      "country": "Colombia",
      "imageLink": "images/one-hundred-years-of-solitude.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
      "pages": 417,
      "title": "One Hundred Years of Solitude",
      "shortDescription": "The multi-generational story of the Buendía family in the fictional town of Macondo.",
      "fullDescription": "One Hundred Years of Solitude is a landmark novel of magical realism, chronicling the rise and fall of the Buendía family in the isolated town of Macondo. Gabriel García Márquez blends the extraordinary with the everyday, crafting a world where reality and fantasy coexist. Themes of love, power, war, and fate intertwine with the novel’s cyclical sense of time, and Márquez explores the universal forces of history, memory, and myth. The novel’s lush, poetic language and intricate narrative structure make it one of the most acclaimed works of world literature, offering profound reflections on Latin American history and culture.",
      "publisher": "Editorial Sudamericana",
      "genres": [
        "Magic Realism"
      ],
      "year": 1967
    },
    {
      "isbn": "ab123qe",
      "author": {
        "id": 28,
        "name": "Gabriel",
        "surname": "García Márquez",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1927-03-06",
        "dod": "2014-04-17",
        "nationality": "Colombian",
        "imageUrl": "https://example.com/images/marquez.jpg",
        "biography": "Gabriel García Márquez was a Colombian novelist and Nobel Prize winner, renowned for his magical realism. His most famous work, 'One Hundred Years of Solitude,' explores themes of love, solitude, and the cyclical nature of history."
      },
      "country": "Colombia",
      "imageLink": "images/love-in-the-time-of-cholera.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
      "pages": 368,
      "title": "Love in the Time of Cholera",
      "shortDescription": "A love story spanning more than fifty years between Fermina Daza and Florentino Ariza.",
      "fullDescription": "Love in the Time of Cholera tells the story of Florentino Ariza and Fermina Daza, whose love endures for over half a century despite obstacles, separations, and Fermina’s marriage to another man. Set in a Caribbean port town, the novel explores the power of love, desire, and memory, juxtaposing romantic ideals with the harsh realities of aging and loss. García Márquez infuses the narrative with his signature magical realism, where the line between passion and obsession blurs, creating a profound exploration of human emotions. The novel is both a tribute to enduring love and a meditation on the complexities of life and time.",
      "publisher": "Alfred A. Knopf",
      "genres": [
        "Magic Realism",
        "Love Story"
      ],
      "year": 1985
    },
    {
      "isbn": "aagn",
      "author": {
        "id": 29,
        "name": "Johann Wolfgang",
        "surname": "von Goethe",
        "genres": [
          "Drama",
          "Poetry",
          "Novel"
        ],
        "dob": "1749-08-28",
        "dod": "1832-03-22",
        "nationality": "German",
        "imageUrl": "https://example.com/images/goethe.jpg",
        "biography": "Johann Wolfgang von Goethe was a German writer and statesman, regarded as one of the greatest figures in Western literature. His works, including 'Faust' and 'The Sorrows of Young Werther,' span various genres and explore themes of love, ambition, and existentialism."
      },
      "country": "Saxe-Weimar",
      "imageLink": "images/faust.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
      "pages": 158,
      "title": "Faust",
      "shortDescription": "A scholar makes a pact with the devil in exchange for unlimited knowledge and worldly pleasures.",
      "fullDescription": "Faust is Goethe’s magnum opus, a two-part tragedy that follows the life of Dr. Faust, a scholar who, dissatisfied with his intellectual pursuits, makes a pact with Mephistopheles (the devil) to experience all that life has to offer. Part I focuses on Faust’s pursuit of worldly pleasures and love, particularly his tragic relationship with Gretchen. In Part II, Faust’s journey expands into political and philosophical realms as he seeks ultimate meaning and redemption. Goethe’s work explores themes of ambition, temptation, knowledge, and salvation, blending Christian theology, classical myth, and humanist philosophy in a sweeping, poetic masterpiece.",
      "publisher": "Cotta",
      "genres": [
        "Tragedy",
        "Drama"
      ],
      "year": 1832
    },
    {
      "isbn": "aathgn",
      "author": {
        "id": 30,
        "name": "Nikolai",
        "surname": "Gogol",
        "genres": [
          "Comedy",
          "Tragedy"
        ],
        "dob": "1809-03-31",
        "dod": "1852-03-04",
        "nationality": "Ukrainian-Russian",
        "imageUrl": "https://example.com/images/gogol.jpg",
        "biography": "Nikolai Gogol was a Ukrainian-born Russian writer known for his unique blend of comedy and tragedy. His works, including 'Dead Souls' and 'The Overcoat,' critique society and human nature through satire and surrealism."
      },
      "country": "Russia",
      "imageLink": "images/dead-souls.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Dead_Souls\n",
      "pages": 432,
      "title": "Dead Souls",
      "shortDescription": "A satire about a man who buys deceased serfs’ names from landowners to exploit bureaucratic loopholes.",
      "fullDescription": "Dead Souls is a biting satire of Russian society, following the adventures of Pavel Ivanovich Chichikov, a middle-class man with a grand, deceitful scheme: he travels through the countryside, purchasing the ownership of \"dead souls\"—serfs who have died but are still listed as living on official records. Chichikov plans to use these phantom serfs as collateral for loans, exploiting the bureaucratic inefficiencies of the Russian feudal system. Gogol’s novel skewers the greed, corruption, and moral decay of the Russian aristocracy and landowners, blending dark humor with a tragic view of the human condition. Dead Souls remains one of the most important works of Russian literature, offering a satirical critique of societal ills.",
      "publisher": "Russian Messenger",
      "genres": [
        "Satirical Novel"
      ],
      "year": 1842
    },
    {
      "isbn": "aagngre",
      "author": {
        "id": 31,
        "name": "Günter",
        "surname": "Grass",
        "genres": [
          "Novel",
          "Poetry"
        ],
        "dob": "1927-10-16",
        "dod": "2015-04-13",
        "nationality": "German",
        "imageUrl": "https://example.com/images/grass.jpg",
        "biography": "Günter Grass was a German novelist, poet, and playwright, awarded the Nobel Prize in Literature in 1999. His most famous work, 'The Tin Drum,' combines magical realism with a poignant critique of German society and history."
      },
      "country": "Germany",
      "imageLink": "images/the-tin-drum.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
      "pages": 600,
      "title": "The Tin Drum",
      "shortDescription": "A surreal, allegorical tale of Oskar Matzerath, a boy who refuses to grow up in Nazi-era Germany.",
      "fullDescription": "The Tin Drum is the first book in Günter Grass’s Danzig Trilogy and one of the most significant works of postwar German literature. The novel follows the life of Oskar Matzerath, a child prodigy who, at the age of three, decides to stop growing and remains a permanent observer of the world around him. His tin drum becomes his way of expressing his protest against the horrors of life, especially during the rise of Nazism and World War II. Grass uses Oskar’s grotesque and surreal experiences as an allegory for the moral collapse of Germany during the 20th century. The novel's rich, multi-layered narrative and blending of the absurd with historical reality make it a landmark of modernist literature.",
      "publisher": "Luchterhand",
      "genres": [
        "Magic Realism",
        "Modernist Fiction"
      ],
      "year": 1959
    },
    {
      "isbn": "123aagn",
      "author": {
        "id": 32,
        "name": "João",
        "surname": "Guimarães Rosa",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1908-06-06",
        "dod": "1967-11-19",
        "nationality": "Brazilian",
        "imageUrl": "https://example.com/images/guimaraes.jpg",
        "biography": "João Guimarães Rosa was a Brazilian novelist and short story writer, celebrated for his unique narrative style and the use of regional dialects. His major work, 'The Devil to Pay in the Backlands,' explores Brazilian culture and identity."
      },
      "country": "Brazil",
      "imageLink": "images/the-devil-to-pay-in-the-backlands.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
      "pages": 494,
      "title": "The Devil to Pay in the Backlands",
      "shortDescription": "A Brazilian epic exploring the life of Riobaldo, a jagunço (bandit) in the backlands of Brazil.",
      "fullDescription": "The Devil to Pay in the Backlands (Grande Sertão: Veredas) is a Brazilian classic that tells the story of Riobaldo, a former bandit, as he reflects on his violent past in the harsh and desolate sertão (backlands) of Brazil. The novel, narrated in a stream-of-consciousness style, explores themes of fate, love, and the struggle between good and evil. Riobaldo’s quest for understanding leads him to make a pact with the devil, but the novel blurs the line between the real and the supernatural, creating a deep, philosophical inquiry into the nature of existence. Guimarães Rosa’s poetic language and innovative narrative structure have made the novel a cornerstone of Brazilian literature, revered for its complexity and profound exploration of human nature.",
      "publisher": "José Olympio",
      "genres": [
        "Modernist Novel",
        "Regionalism"
      ],
      "year": 1956
    },
    {
      "isbn": "aa546gn",
      "author": {
        "id": 33,
        "name": "Knut",
        "surname": "Hamsun",
        "genres": [
          "Novel",
          "Philosophy"
        ],
        "dob": "1859-08-04",
        "dod": "1952-02-19",
        "nationality": "Norwegian",
        "imageUrl": "https://example.com/images/hamsun.jpg",
        "biography": "Knut Hamsun was a Norwegian novelist and Nobel Prize winner known for his psychological insights and exploration of human nature. His seminal work, 'Hunger,' delves into the mind of a starving writer, showcasing his unique style."
      },
      "country": "Norway",
      "imageLink": "images/hunger.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
      "pages": 176,
      "title": "Hunger",
      "shortDescription": "A psychological exploration of a starving writer’s descent into madness and desperation.",
      "fullDescription": "Hunger is Knut Hamsun’s groundbreaking novel that tells the story of an unnamed writer struggling with poverty and hunger in the streets of Oslo. The novel is one of the earliest examples of psychological fiction, focusing on the protagonist’s internal monologue as he descends into delusion and desperation. Hamsun’s vivid portrayal of the protagonist’s physical and mental deterioration creates a harrowing portrait of isolation, alienation, and the fragility of the human condition. The novel’s influence can be seen in later works of existential literature, and its stark, uncompromising depiction of the human psyche has earned it a lasting place in world literature.",
      "publisher": "P.G. Philipsens Forlag",
      "genres": [
        "Psychological Fiction"
      ],
      "year": 1890
    },
    {
      "isbn": "aag76n",
      "author": {
        "id": 34,
        "name": "Ernest",
        "surname": "Hemingway",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1899-07-21",
        "dod": "1961-07-02",
        "nationality": "American",
        "imageUrl": "https://example.com/images/hemingway.jpg",
        "biography": "Ernest Hemingway was an American novelist and short story writer, known for his terse and economical prose style. His major works, including 'The Old Man and the Sea' and 'A Farewell to Arms,' explore themes of love, loss, and the human experience."
      },
      "country": "United States",
      "imageLink": "images/the-old-man-and-the-sea.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
      "pages": 128,
      "title": "The Old Man and the Sea",
      "shortDescription": "An old Cuban fisherman’s struggle to catch a giant marlin in the Gulf Stream.",
      "fullDescription": "The Old Man and the Sea is one of Hemingway’s most famous works, telling the simple yet profound story of Santiago, an aging Cuban fisherman who embarks on an epic battle to catch a giant marlin. Despite his age and weakness, Santiago is determined to prove his worth and skill, engaging in a grueling fight with the marlin over several days. The novella explores themes of perseverance, pride, defeat, and the human condition, with Hemingway’s trademark spare, direct prose. The novel won the Pulitzer Prize in 1953 and is considered one of the most powerful narratives of man’s struggle against nature, life, and himself.",
      "publisher": "Charles Scribner's Sons",
      "genres": [
        "Novella",
        "Adventure Fiction"
      ],
      "year": 1952
    },
    {
      "isbn": "aag42n",
      "author": {
        "id": 35,
        "name": "Homer",
        "surname": "",
        "genres": [
          "Epic Poetry",
          "Tragedy"
        ],
        "dob": "c. 8th century BC",
        "dod": "c. 8th century BC",
        "nationality": "Greek",
        "imageUrl": "https://example.com/images/homer.jpg",
        "biography": "Homer is traditionally said to be the ancient Greek poet who composed the epic poems 'The Iliad' and 'The Odyssey.' His works are foundational texts of Western literature, exploring themes of heroism, fate, and the human condition."
      },
      "country": "Greece",
      "imageLink": "images/the-iliad-of-homer.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Iliad\n",
      "pages": 608,
      "title": "Iliad",
      "shortDescription": "The epic poem of the Trojan War, focusing on the wrath of Achilles.",
      "fullDescription": "The Iliad is one of the foundational works of Western literature, an epic poem that tells the story of the final weeks of the Trojan War. The poem focuses on the hero Achilles and his wrath after being dishonored by Agamemnon, the Greek leader. Homer’s depiction of the gods, warriors, and battles offers a rich, multi-dimensional portrait of heroism, honor, and the human cost of war. The themes of fate, mortality, and the nature of conflict resonate throughout the narrative, which has influenced countless works of literature, art, and philosophy since its creation. The Iliad remains a timeless exploration of the human condition in the face of violence and tragedy.",
      "publisher": "Various",
      "genres": [
        "Epic Poetry"
      ],
      "year": -735
    },
    {
      "isbn": "aag2342n",
      "author": {
        "id": 35,
        "name": "Homer",
        "surname": "",
        "genres": [
          "Epic Poetry",
          "Tragedy"
        ],
        "dob": "c. 8th century BC",
        "dod": "c. 8th century BC",
        "nationality": "Greek",
        "imageUrl": "https://example.com/images/homer.jpg",
        "biography": "Homer is traditionally said to be the ancient Greek poet who composed the epic poems 'The Iliad' and 'The Odyssey.' His works are foundational texts of Western literature, exploring themes of heroism, fate, and the human condition."
      },
      "country": "Greece",
      "imageLink": "images/the-odyssey-of-homer.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Odyssey\n",
      "pages": 374,
      "title": "Odyssey",
      "shortDescription": "The epic journey of Odysseus as he returns home after the Trojan War.",
      "fullDescription": "The Odyssey follows the Greek hero Odysseus as he embarks on a ten-year journey home to Ithaca after the fall of Troy. Along the way, he encounters mythical creatures, vengeful gods, and tests of both his intellect and strength. The epic explores themes of perseverance, loyalty, cunning, and the longing for home, while also providing insight into the nature of heroism and the complex relationships between mortals and the gods. Homer’s Odyssey has had an immense influence on Western storytelling, establishing the archetypal “hero’s journey” that has become a timeless narrative form.",
      "publisher": "Various",
      "genres": [
        "Epic Poetry"
      ],
      "year": -800
    },
    {
      "isbn": "aagn234",
      "author": {
        "id": 36,
        "name": "Henrik",
        "surname": "Ibsen",
        "genres": [
          "Drama",
          "Poetry"
        ],
        "dob": "1828-03-20",
        "dod": "1906-05-23",
        "nationality": "Norwegian",
        "imageUrl": "https://example.com/images/ibsen.jpg",
        "biography": "Henrik Ibsen was a Norwegian playwright and poet, often referred to as the 'father of modern drama.' His plays, including 'A Doll's House' and 'Hedda Gabler,' challenge social norms and explore complex psychological themes."
      },
      "country": "Norway",
      "imageLink": "images/a-Dolls-house.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
      "pages": 68,
      "title": "A Doll's House",
      "shortDescription": "A woman’s realization of her restricted role in marriage and her decision to assert her independence.",
      "fullDescription": "A Doll’s House is a groundbreaking play by Henrik Ibsen that centers on Nora Helmer, a seemingly happy housewife, who begins to question her subservient role within her marriage and society. Set in a patriarchal society, Nora’s realization that her life has been like that of a doll in a dollhouse leads to her ultimate decision to leave her husband and children in search of personal freedom and identity. The play caused a sensation upon its release for its portrayal of the struggles of women and has since become one of the defining works of feminist literature, addressing themes of autonomy, marriage, and societal expectations.",
      "publisher": "Gyldendal",
      "genres": [
        "Drama",
        "Realism"
      ],
      "year": 1879
    },
    {
      "isbn": "113aagn",
      "author": {
        "id": 37,
        "name": "James",
        "surname": "Joyce",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1882-02-02",
        "dod": "1941-01-13",
        "nationality": "Irish",
        "imageUrl": "https://example.com/images/joyce.jpg",
        "biography": "James Joyce was an Irish novelist and modernist, known for his innovative narrative techniques. His landmark work, 'Ulysses,' is a retelling of Homer's 'Odyssey' set in Dublin, exploring themes of identity and the human experience."
      },
      "country": "Irish Free State",
      "imageLink": "images/ulysses.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
      "pages": 228,
      "title": "Ulysses",
      "shortDescription": "The life of Leopold Bloom over the course of a single day, written in a stream-of-consciousness style.",
      "fullDescription": "Ulysses is a modernist masterpiece that parallels Homer’s Odyssey, recounting the events of a single day (June 16, 1904) in the life of Leopold Bloom as he navigates Dublin. Through his interactions with others, including his wife Molly and the writer Stephen Dedalus, the novel explores the minutiae of daily life, as well as profound themes of identity, consciousness, love, and human existence. Joyce’s innovative use of stream-of-consciousness, fragmented narrative, and shifting literary styles have made Ulysses one of the most complex and influential works in modern literature, challenging traditional forms of storytelling and narrative.",
      "publisher": "Sylvia Beach",
      "genres": [
        "Modernist Novel"
      ],
      "year": 1922
    },
    {
      "isbn": "aagn545",
      "author": {
        "id": 38,
        "name": "Franz",
        "surname": "Kafka",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1883-07-03",
        "dod": "1924-06-03",
        "nationality": "Czech",
        "imageUrl": "https://example.com/images/kafka.jpg",
        "biography": "Franz Kafka was a Czech writer known for his surreal and existential works. His notable pieces, including 'The Metamorphosis' and 'The Trial,' explore themes of alienation, guilt, and the absurdity of life."
      },
      "country": "Czechoslovakia",
      "imageLink": "images/stories-of-franz-kafka.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
      "pages": 488,
      "title": "Stories",
      "shortDescription": "A collection of Kafka's short stories, highlighting themes of alienation, existential anxiety, and the absurdity of modern life.",
      "fullDescription": "Franz Kafka’s Stories encompass a range of works that delve into the complexities of human existence, often characterized by surreal and nightmarish elements. Kafka's writing explores themes of alienation, guilt, and the absurdity of bureaucratic systems, reflecting his own struggles with identity and societal expectations. Notable stories include \"The Metamorphosis\", where a man wakes to find himself transformed into a giant insect, and \"The Judgment\", which addresses familial conflict and existential dread. Kafka’s prose is marked by a sense of inevitability and anxiety, often leaving readers with unresolved questions. His unique blend of reality and the fantastical has solidified his status as one of the most significant literary figures of the 20th century, with profound influences on existentialism and modern literature.",
      "publisher": "Various, including Schocken Books",
      "genres": [
        "Short Stories",
        "Existential Fiction"
      ],
      "year": 1924
    },
    {
      "isbn": "a23agn",
      "author": {
        "id": 38,
        "name": "Franz",
        "surname": "Kafka",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1883-07-03",
        "dod": "1924-06-03",
        "nationality": "Czech",
        "imageUrl": "https://example.com/images/kafka.jpg",
        "biography": "Franz Kafka was a Czech writer known for his surreal and existential works. His notable pieces, including 'The Metamorphosis' and 'The Trial,' explore themes of alienation, guilt, and the absurdity of life."
      },
      "country": "Czechoslovakia",
      "imageLink": "images/the-trial.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Trial\n",
      "pages": 160,
      "title": "The Trial",
      "shortDescription": "A man is arrested and prosecuted by a mysterious, oppressive bureaucracy without ever learning his crime.",
      "fullDescription": "The Trial is a haunting novel that follows the story of Josef K., a bank clerk who is arrested by an unknown authority for an unspecified crime. As K. attempts to navigate a labyrinthine legal system, he is met with increasingly absurd and opaque bureaucratic obstacles, symbolizing the existential anxiety of modern life. Kafka’s novel is a powerful exploration of themes such as guilt, powerlessness, and the search for meaning in an indifferent universe. The nightmarish quality of The Trial reflects the disorienting and dehumanizing forces of institutional authority, making it one of the most influential works of 20th-century existential literature.",
      "publisher": "Verlag Die Schmiede",
      "genres": [
        "Existential Fiction",
        "Absurdist Fiction"
      ],
      "year": 1925
    },
    {
      "isbn": "aag343n",
      "author": {
        "id": 38,
        "name": "Franz",
        "surname": "Kafka",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1883-07-03",
        "dod": "1924-06-03",
        "nationality": "Czech",
        "imageUrl": "https://example.com/images/kafka.jpg",
        "biography": "Franz Kafka was a Czech writer known for his surreal and existential works. His notable pieces, including 'The Metamorphosis' and 'The Trial,' explore themes of alienation, guilt, and the absurdity of life."
      },
      "country": "Czechoslovakia",
      "imageLink": "images/the-castle.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
      "pages": 352,
      "title": "The Castle",
      "shortDescription": "A man’s futile attempts to gain access to a mysterious authority in a village controlled by a distant castle.",
      "fullDescription": "The Castle is an unfinished novel by Franz Kafka that tells the story of K., a land surveyor who arrives in a village under the control of a looming, inaccessible castle. Despite his efforts, K. is repeatedly thwarted in his attempts to gain entry to the castle or understand the bureaucratic forces that govern the village. The novel explores themes of alienation, the absurdity of bureaucracy, and the individual’s futile search for purpose and control in an incomprehensible world. Kafka’s allegorical narrative style captures the existential struggles of modern life, where systems of power and authority remain distant and unapproachable, creating a pervasive sense of disempowerment.",
      "publisher": "Kurt Wolff Verlag",
      "genres": [
        "Existential Fiction",
        "Absurdist Fiction"
      ],
      "year": 1926
    },
    {
      "isbn": "a2agn1",
      "author": {
        "id": 39,
        "name": "Kālidāsa",
        "surname": "",
        "genres": [
          "Poetry",
          "Drama"
        ],
        "dob": "c. 4th century",
        "dod": "c. 4th century",
        "nationality": "Indian",
        "imageUrl": "https://example.com/images/kalidasa.jpg",
        "biography": "Kālidāsa is one of the most celebrated poets and dramatists in classical Sanskrit literature. His works, such as 'Shakuntala' and 'Meghaduta,' are renowned for their lyrical beauty and exploration of love, nature, and human emotion."
      },
      "country": "India",
      "imageLink": "images/the-recognition-of-shakuntala.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
      "pages": 147,
      "title": "The recognition of Shakuntala",
      "shortDescription": "A classical Indian play about love, separation, and divine intervention between a king and a nymph.",
      "fullDescription": "The Recognition of Shakuntala is a classical Sanskrit drama by the poet Kalidasa. The play tells the story of King Dushyanta, who falls in love with the nymph Shakuntala but forgets her after a sage’s curse. Shakuntala’s love for the king, their subsequent separation, and eventual reunion through divine intervention are central to the plot. Kalidasa’s work is celebrated for its lyrical beauty, rich imagery, and delicate portrayal of human emotions, blending romantic and mythological elements. The Recognition of Shakuntala remains one of the most important works in Indian literature, admired for its depth of feeling and spiritual themes.",
      "publisher": "Various",
      "genres": [
        "Sanskrit Drama"
      ],
      "year": 150
    },
    {
      "isbn": "aafew4gn",
      "author": {
        "id": 40,
        "name": "Yasunari",
        "surname": "Kawabata",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1899-06-14",
        "dod": "1972-04-16",
        "nationality": "Japanese",
        "imageUrl": "https://example.com/images/kawabata.jpg",
        "biography": "Yasunari Kawabata was a Japanese novelist and the first Asian to win the Nobel Prize in Literature. His works, including 'Snow Country' and 'The Sound of the Mountain,' beautifully depict the Japanese landscape and explore themes of beauty, loneliness, and memory."
      },
      "country": "Japan",
      "imageLink": "images/the-sound-of-the-mountain.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
      "pages": 288,
      "title": "The Sound of the Mountain",
      "shortDescription": "A man in post-war Japan contemplates life, family, and mortality as he grows older.",
      "fullDescription": "The Sound of the Mountain is a quiet, introspective novel by Yasunari Kawabata that captures the inner life of Shingo Ogata, an aging businessman living in post-World War II Japan. As he grapples with the passage of time, the disintegration of his family, and his own sense of mortality, Shingo becomes more attuned to the natural world and the fleeting beauty of life. Kawabata’s sensitive portrayal of a man facing the existential questions of aging and death is rendered in a poetic and minimalist style, reflecting the themes of transience and introspection that permeate much of modern Japanese literature.",
      "publisher": "Shinchosha",
      "genres": [
        "Psychological Fiction",
        "Modern Japanese Literature"
      ],
      "year": 1954
    },
    {
      "isbn": "aafwe43gn",
      "author": {
        "id": 41,
        "name": "Nikos",
        "surname": "Kazantzakis",
        "genres": [
          "Novel",
          "Philosophy"
        ],
        "dob": "1883-02-18",
        "dod": "1957-10-26",
        "nationality": "Greek",
        "imageUrl": "https://example.com/images/kazantzakis.jpg",
        "biography": "Nikos Kazantzakis was a Greek writer and philosopher, best known for his novel 'Zorba the Greek' and the controversial 'The Last Temptation of Christ.' His works explore the human condition, faith, and the struggle for meaning."
      },
      "country": "Greece",
      "imageLink": "images/zorba-the-greek.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
      "pages": 368,
      "title": "Zorba the Greek",
      "shortDescription": "The story of an intellectual who seeks to live more freely under the influence of his lively and uninhibited companion, Zorba.",
      "fullDescription": "Zorba the Greek is a philosophical novel that follows the friendship between a scholarly, introspective narrator and his larger-than-life companion, Alexis Zorba. Through their interactions, the narrator learns to embrace life more fully, moving beyond intellectual detachment and embracing the spontaneity, passion, and chaos of human existence. Zorba’s exuberant personality and philosophy of life stand in contrast to the narrator’s restrained approach, highlighting themes of freedom, fate, and the search for meaning in an unpredictable world. Nikos Kazantzakis’s novel is celebrated for its exploration of the human condition and its celebration of the joy and struggle of living.",
      "publisher": "A. Karatzas & Co.",
      "genres": [
        "Philosophical Novel"
      ],
      "year": 1946
    },
    {
      "isbn": "aasg1gn",
      "author": {
        "id": 42,
        "name": "D. H.",
        "surname": "Lawrence",
        "genres": [
          "Novel",
          "Poetry"
        ],
        "dob": "1885-09-11",
        "dod": "1930-03-02",
        "nationality": "English",
        "imageUrl": "https://example.com/images/lawrence.jpg",
        "biography": "D. H. Lawrence was an English novelist, poet, and essayist known for his exploration of human relationships and sexuality. His notable works, including 'Women in Love' and 'Sons and Lovers,' challenge societal norms and delve into the complexities of human emotions."
      },
      "country": "United Kingdom",
      "imageLink": "images/sons-and-lovers.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
      "pages": 432,
      "title": "Sons and Lovers",
      "shortDescription": "A young man torn between his love for his mother and his romantic relationships.",
      "fullDescription": "Sons and Lovers is a semi-autobiographical novel by D. H. Lawrence, depicting the life of Paul Morel, a young man growing up in a working-class family in the English Midlands. Paul's deep emotional bond with his mother, Gertrude, interferes with his ability to form healthy romantic relationships, leading to intense inner conflict and psychological struggle. The novel explores themes of family, class, and sexual repression, as well as the psychological complexities of a son's attachment to his mother. Lawrence’s raw portrayal of the tensions within familial relationships broke new ground in English literature, contributing to his reputation as one of the 20th century's most significant writers.",
      "publisher": "Duckworth",
      "genres": [
        "Psychological Fiction"
      ],
      "year": 1913
    },
    {
      "isbn": "asdf89agn",
      "author": {
        "id": 43,
        "name": "Halldór",
        "surname": "Laxness",
        "genres": [
          "Novel",
          "Poetry"
        ],
        "dob": "1902-04-23",
        "dod": "1998-02-08",
        "nationality": "Icelandic",
        "imageUrl": "https://example.com/images/laxness.jpg",
        "biography": "Halldór Laxness was an Icelandic writer and the recipient of the Nobel Prize in Literature. His works, including 'Independent People' and 'The Fish Can Sing,' explore Icelandic identity, culture, and social issues."
      },
      "country": "Iceland",
      "imageLink": "images/independent-people.jpg",
      "language": "Icelandic",
      "link": "https://en.wikipedia.org/wiki/Independent_People\n",
      "pages": 470,
      "title": "Independent People",
      "shortDescription": "A tale of a stubborn Icelandic farmer’s fight for independence amidst hardship.",
      "fullDescription": "Independent People is a stark, epic novel about the life of Bjartur of Summerhouses, an Icelandic sheep farmer who is fiercely determined to live as an independent man. Set in rural Iceland in the early 20th century, the novel chronicles Bjartur’s relentless struggle to maintain his autonomy, even at the cost of his relationships with his family and his own well-being. Halldór Laxness uses Bjartur’s story as a lens to examine broader themes of human resilience, the harshness of nature, and the price of independence in an unforgiving world. The novel is considered a classic of Icelandic literature and earned Laxness the Nobel Prize in Literature in 1955.",
      "publisher": "Vaka-Helgafell",
      "genres": [
        "Social Realism"
      ],
      "year": 1934
    },
    {
      "isbn": "aagfd78gn",
      "author": {
        "id": 81,
        "name": "Giacomo",
        "surname": "Leopardi",
        "genres": ["Poetry", "Philosophy"],
        "dob": "1798-06-29",
        "dod": "1837-06-14",
        "nationality": "Italian",
        "imageUrl": "https://example.com/images/leopardi.jpg",
        "biography": "Giacomo Leopardi was an Italian poet, philosopher, and essayist, recognized as one of the most important figures in Italian literature. His work reflects profound themes of melancholy, the human condition, and the tension between idealism and reality. His most famous works include the poem 'L'Infinito' and the philosophical essays collected in 'Zibaldone.'"
      },
      "country": "Italy",
      "imageLink": "images/poems-giacomo-leopardi.jpg",
      "language": "Italian",
      "link": "\n",
      "pages": 184,
      "title": "Poems",
      "shortDescription": "A collection of Leopardi's lyrical poems, exploring themes of nature, love, and existential melancholy.",
      "fullDescription": "Giacomo Leopardi’s Poems reflect the deep philosophical and emotional currents that define his work, showcasing his brilliance as one of Italy's greatest poets. Written during the early 19th century, his poetry grapples with themes of human suffering, the transience of beauty, and the existential despair of modern life. Leopardi often expresses a profound sense of solitude and longing, capturing the tension between idealism and the harsh realities of existence. His most famous poems, such as \"L'infinito\" and \"A Silvia\", illustrate his masterful use of imagery and lyrical language, conveying a sense of both awe and sorrow. Through his contemplative exploration of nature, love, and the human condition, Leopardi's poetry resonates with readers, offering insights into the struggles of the human soul.",
      "publisher": "Various, including Penguin Classics",
      "genres": [
        "Poetry"
      ],
      "year": 1818
    },
    {
      "isbn": "adfs987agn",
      "author": {
        "id": 82,
        "name": "Doris",
        "surname": "Lessing",
        "genres": ["Novel", "Essay", "Memoir"],
        "dob": "1919-10-22",
        "dod": "2013-11-17",
        "nationality": "British",
        "imageUrl": "https://example.com/images/lessing.jpg",
        "biography": "Doris Lessing was a British novelist, poet, and playwright, awarded the Nobel Prize in Literature in 2007. Her works often explore themes of feminism, social injustice, and personal freedom. Lessing's notable books include 'The Golden Notebook,' which reflects her views on gender and society, and the 'Canopus in Argos' series, which delves into science fiction and metaphysical themes."
      },
      "country": "United Kingdom",
      "imageLink": "images/the-golden-notebook.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
      "pages": 688,
      "title": "The Golden Notebook",
      "shortDescription": "A woman writer’s fragmented mental state reflected in her multiple notebooks.",
      "fullDescription": "The Golden Notebook is a groundbreaking novel by Doris Lessing, focusing on the life of Anna Wulf, a writer who struggles with mental fragmentation and emotional turmoil. Anna records her experiences in four separate notebooks, each representing different aspects of her life, from politics to love. These narratives are ultimately brought together in the \"golden notebook\" in a bid for coherence and unity. Lessing’s novel is a complex exploration of identity, mental breakdown, and the limitations of traditional narrative structures. The book is also a key work of feminist literature, addressing issues such as the role of women in society, personal freedom, and political commitment.",
      "publisher": "Michael Joseph",
      "genres": [
        "Feminist Fiction",
        "Modernist Novel"
      ],
      "year": 1962
    },
    {
      "isbn": "aagfdb34n",
      "author": {
        "id": 83,
        "name": "Astrid",
        "surname": "Lindgren",
        "genres": ["Children's Literature", "Fantasy"],
        "dob": "1907-11-14",
        "dod": "2002-01-28",
        "nationality": "Swedish",
        "imageUrl": "https://example.com/images/lindgren.jpg",
        "biography": "Astrid Lindgren was a Swedish author and screenwriter, best known for her beloved children's books featuring memorable characters like Pippi Longstocking, Emil of Lönneberga, and the Brothers Lionheart. Her stories often convey themes of adventure, independence, and the importance of imagination. Lindgren's works have been translated into numerous languages, making her one of the most translated authors in the world."
      },
      "country": "Sweden",
      "imageLink": "images/pippi-longstocking.jpg",
      "language": "Swedish",
      "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
      "pages": 160,
      "title": "Pippi Longstocking",
      "shortDescription": "The adventures of a strong, unconventional young girl living without parents.",
      "fullDescription": "Pippi Longstocking is the first in a series of children’s books by Astrid Lindgren, featuring the independent and mischievous Pippi, a nine-year-old girl with superhuman strength. Living alone in Villa Villekulla with her monkey and horse, Pippi rejects conventional norms and delights in adventures that subvert authority and challenge societal expectations. Lindgren’s creation of Pippi, with her unrestrained imagination, rebellious spirit, and unorthodox way of life, has made her an enduring figure in children’s literature, inspiring generations of readers with her sense of freedom and empowerment.",
      "publisher": "Rabén & Sjögren",
      "genres": [
        "Children’s Fiction"
      ],
      "year": 1945
    },
    {
      "isbn": "aaasd98gn",
      "author": {
        "id": 84,
        "name": "Lu",
        "surname": "Xun",
        "genres": ["Novel", "Short Story", "Essay"],
        "dob": "1881-09-25",
        "dod": "1936-10-19",
        "nationality": "Chinese",
        "imageUrl": "https://example.com/images/luxun.jpg",
        "biography": "Lu Xun was a prominent Chinese writer, essayist, and literary critic, often regarded as the father of modern Chinese literature. His works, including 'A Madman's Diary' and 'The True Story of Ah Q,' criticize social injustices and explore the struggles of the Chinese people during a time of great change. Lu Xun's writing is noted for its sharp satire and deep psychological insight, making him a significant figure in Chinese literature and a key voice in the May Fourth Movement."
      },
      "country": "China",
      "imageLink": "images/diary-of-a-madman.jpg",
      "language": "Chinese",
      "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
      "pages": 389,
      "title": "Diary of a Madman",
      "shortDescription": "A man’s descent into madness, revealing the social and political corruption around him.",
      "fullDescription": "Diary of a Madman is a seminal work in modern Chinese literature, written by Lu Xun, often hailed as the father of modern Chinese fiction. The story is presented as the diary of a man who becomes increasingly paranoid, convinced that those around him are cannibals. His madness is a metaphor for the moral and social corruption he sees in society. Through this harrowing tale, Lu Xun critiques the feudal traditions and oppressive social structures of early 20th-century China. The story's exploration of madness as a form of protest against injustice made it a powerful and influential work in the May Fourth Movement, a cultural revolution that sought to modernize China.",
      "publisher": "New Youth",
      "genres": [
        "Short Story",
        "Modern Chinese Literature"
      ],
      "year": 1918
    },
    {
      "isbn": "aaas10gn",
      "author": {
        "id": 58,
        "name": "Naguib",
        "surname": "Mahfouz",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1911-12-11",
        "dod": "2006-08-30",
        "nationality": "Egyptian",
        "imageUrl": "https://example.com/images/mahfouz.jpg",
        "biography": "Naguib Mahfouz was an Egyptian writer and Nobel Prize laureate known for his influential novels exploring Egyptian society. His notable works include 'The Cairo Trilogy' and 'Children of the Alley,' addressing themes of social change and moral dilemmas."
      },
      "country": "Egypt",
      "imageLink": "images/children-of-gebelawi.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
      "pages": 355,
      "title": "Children of Gebelawi",
      "shortDescription": "An allegorical novel tracing humanity’s spiritual journey through five generations.",
      "fullDescription": "Children of Gebelawi (also known as Children of the Alley) is one of Naguib Mahfouz’s most controversial works, presenting an allegorical history of humanity through the lives of five generations living in an Egyptian alley. The novel’s characters and their stories symbolize key figures and narratives from the Abrahamic religions, including Adam, Moses, Jesus, and Muhammad. Mahfouz uses these allegories to explore issues of faith, power, justice, and human progress. Banned in many countries for its perceived religious implications, Children of Gebelawi remains a landmark in Arabic literature, showcasing Mahfouz’s ability to intertwine political, spiritual, and social commentary in his fiction.",
      "publisher": "Al-Ahram",
      "genres": [
        "Allegorical Fiction",
        "Modern Arabic Literature"
      ],
      "year": 1959
    },
    {
      "isbn": "aagfedw1n",
      "author": {
        "id": 85,
        "name": "Thomas",
        "surname": "Mann",
        "genres": ["Novel", "Essay"],
        "dob": "1875-06-06",
        "dod": "1955-08-12",
        "nationality": "German",
        "imageUrl": "https://example.com/images/mann.jpg",
        "biography": "Thomas Mann was a German novelist and essayist, widely regarded as one of the most important literary figures of the 20th century. His works often explore themes of morality, politics, and the human condition. Mann's notable novels include 'Buddenbrooks,' which won him the Nobel Prize in Literature in 1929, and 'The Magic Mountain,' a profound exploration of illness and existentialism set in a Swiss sanatorium."
      },
      "country": "Germany",
      "imageLink": "images/buddenbrooks.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Buddenbrooks\n",
      "pages": 736,
      "title": "Buddenbrooks",
      "shortDescription": "The decline of a wealthy German merchant family over four generations.",
      "fullDescription": "Buddenbrooks is a sweeping family saga that traces the rise and fall of a wealthy German merchant family over the course of four generations. Thomas Mann’s novel chronicles the shifting fortunes of the Buddenbrooks, from their height of prosperity to their eventual decline, focusing on the conflicts between individual desires and family duty. Through detailed character portraits and keen social observation, Mann examines the psychological and moral struggles faced by the family members as they confront societal change, financial hardship, and personal crises. Buddenbrooks is celebrated for its richly drawn characters and its exploration of the tensions between tradition and modernity in 19th-century European society.",
      "publisher": "Fischer Verlag",
      "genres": [
        "Family Saga"
      ],
      "year": 1901
    },
    {
      "isbn": "aagfew567n",
      "author": {
        "id": 85,
        "name": "Thomas",
        "surname": "Mann",
        "genres": ["Novel", "Essay"],
        "dob": "1875-06-06",
        "dod": "1955-08-12",
        "nationality": "German",
        "imageUrl": "https://example.com/images/mann.jpg",
        "biography": "Thomas Mann was a German novelist and essayist, widely regarded as one of the most important literary figures of the 20th century. His works often explore themes of morality, politics, and the human condition. Mann's notable novels include 'Buddenbrooks,' which won him the Nobel Prize in Literature in 1929, and 'The Magic Mountain,' a profound exploration of illness and existentialism set in a Swiss sanatorium."
      },
      "country": "Germany",
      "imageLink": "images/the-magic-mountain.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
      "pages": 720,
      "title": "The Magic Mountain",
      "shortDescription": "A young man’s extended stay in a tuberculosis sanatorium leads to philosophical introspection.",
      "fullDescription": "The Magic Mountain is a monumental novel that follows Hans Castorp, a young engineer, as he visits a tuberculosis sanatorium in the Swiss Alps and ends up staying for seven years. The novel uses the isolated sanatorium as a microcosm for pre-World War I Europe, exploring themes of time, illness, death, and the search for meaning in life. Castorp’s interactions with various patients and doctors lead to deep philosophical reflections on the nature of existence, love, and the clash between opposing ideologies, such as humanism and radicalism. Thomas Mann’s work is widely regarded as one of the defining novels of the 20th century for its intellectual depth and modernist narrative style.",
      "publisher": "S. Fischer Verlag",
      "genres": [
        "Philosophical Novel",
        "Modernist Fiction"
      ],
      "year": 1924
    },
    {
      "isbn": "aafew098gn",
      "author": {
        "id": 67,
        "name": "Herman",
        "surname": "Melville",
        "genres": [
          "Novel",
          "Poetry"
        ],
        "dob": "1819-08-01",
        "dod": "1891-09-28",
        "nationality": "American",
        "imageUrl": "https://example.com/images/melville.jpg",
        "biography": "Herman Melville was an American novelist and poet, best known for his whaling novel 'Moby-Dick.' His works often explore themes of obsession, identity, and the nature of existence."
      },
      "country": "United States",
      "imageLink": "images/moby-dick.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Moby-Dick\n",
      "pages": 378,
      "title": "Moby Dick",
      "shortDescription": "The obsessive quest of Captain Ahab to hunt the elusive white whale, Moby Dick.",
      "fullDescription": "Moby-Dick is a classic of American literature, telling the story of Ishmael, a sailor aboard the whaling ship Pequod, captained by the vengeful Ahab. Ahab's singular obsession is to kill the white whale, Moby Dick, who had previously maimed him by biting off his leg. The novel explores complex themes such as revenge, fate, human ambition, and the power of nature, weaving in philosophical musings and detailed descriptions of whaling life. Herman Melville's masterpiece has been lauded for its symbolic richness and its reflections on the human condition, though it was underappreciated during his lifetime.",
      "publisher": "Richard Bentley",
      "genres": [
        "Philosophical Fiction",
        "Adventure"
      ],
      "year": 1851
    },
    {
      "isbn": "aagnsad908",
      "author": {
        "id": 86,
        "name": "Michel",
        "surname": "de Montaigne",
        "genres": ["Essay", "Philosophy"],
        "dob": "1533-02-28",
        "dod": "1592-09-13",
        "nationality": "French",
        "imageUrl": "https://example.com/images/montaigne.jpg",
        "biography": "Michel de Montaigne was a French philosopher and essayist, best known for popularizing the essay as a literary form. His influential work, 'Essais,' reflects on a wide range of topics, including human nature, education, and personal introspection. Montaigne's writing is characterized by its skepticism, inquiry, and exploration of the self, making him a key figure in the development of modern thought and literature."
      },
      "country": "France",
      "imageLink": "images/essais.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
      "pages": 404,
      "title": "Essays",
      "shortDescription": "A collection of personal reflections on life, society, and human nature.",
      "fullDescription": "Michel de Montaigne’s Essays is one of the foundational texts of the modern essay form. Written in a candid and personal style, Montaigne reflects on a wide range of topics, including friendship, education, death, and the human condition. The essays are deeply introspective, blending philosophical thought with personal anecdote, and often challenge established conventions. Montaigne’s skepticism and emphasis on self-reflection influenced subsequent generations of writers and philosophers, making his Essays a timeless work that continues to resonate with readers for its exploration of what it means to be human.",
      "publisher": "Simon Millanges",
      "genres": [
        "Philosophy",
        "Personal Essays"
      ],
      "year": 1595
    },
    {
      "isbn": "asad324agn",
      "author": {
        "id": 87,
        "name": "Elsa",
        "surname": "Morante",
        "genres": ["Novel", "Short Story"],
        "dob": "1912-08-18",
        "dod": "1985-02-25",
        "nationality": "Italian",
        "imageUrl": "https://example.com/images/morante.jpg",
        "biography": "Elsa Morante was an Italian novelist and poet, celebrated for her profound exploration of the human experience through her literature. Her most renowned work, 'History,' depicts the impact of World War II on individuals and society, blending personal narratives with historical events. Morante's writing is noted for its emotional depth, poetic language, and the blending of fantasy with reality, securing her place as a significant voice in 20th-century Italian literature."
      },
      "country": "Italy",
      "imageLink": "images/history.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/History_(novel)\n",
      "pages": 600,
      "title": "History",
      "shortDescription": "A sweeping historical novel that intertwines personal and political narratives set against the backdrop of World War II in Italy.",
      "fullDescription": "History, by Elsa Morante, is an ambitious and poignant novel that captures the tumultuous events of World War II and its aftermath through the lives of its characters. The story follows the life of a woman named Ida and her family, exploring themes of love, loss, and the impact of history on individual lives. As Morante delves into the emotional landscapes of her characters, she also paints a vivid picture of the sociopolitical realities of Italy during this period. The novel intertwines the personal and the historical, examining how the war shapes relationships and identities. Morante’s lyrical prose and deep empathy for her characters create a powerful narrative that resonates with readers, inviting them to reflect on the broader human experience amidst the chaos of history. History is considered one of Morante's masterpieces and an essential work of Italian literature.",
      "publisher": "Various, including Harcourt Brace Jovanovich",
      "genres": [
        "Historical Fiction"
      ],
      "year": 1974
    },
    {
      "isbn": "aa32478gn",
      "author": {
        "id": 45,
        "name": "Toni",
        "surname": "Morrison",
        "genres": [
          "Novel",
          "Essay"
        ],
        "dob": "1931-02-18",
        "dod": "2019-08-05",
        "nationality": "American",
        "imageUrl": "https://example.com/images/morrison.jpg",
        "biography": "Toni Morrison was an American novelist, editor, and professor, known for her powerful and poetic exploration of African American life. Her works, including 'Beloved' and 'Song of Solomon,' address themes of identity, community, and the legacy of slavery."
      },
      "country": "United States",
      "imageLink": "images/beloved.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
      "pages": 321,
      "title": "Beloved",
      "shortDescription": "A former slave is haunted by the ghost of her dead daughter.",
      "fullDescription": "Beloved is a powerful novel by Toni Morrison that explores the psychological trauma of slavery and its lingering effects on those who survive it. The story is set after the American Civil War and follows Sethe, an escaped slave, who is haunted by the ghost of her dead daughter, Beloved. The novel shifts between past and present, recounting the horrors Sethe endured and the lengths she went to protect her children. Through its blend of magical realism and historical narrative, Beloved grapples with themes of memory, identity, and the haunting legacies of trauma. The novel won the Pulitzer Prize for Fiction in 1988 and solidified Morrison’s reputation as one of America’s greatest writers.",
      "publisher": "Alfred A. Knopf",
      "genres": [
        "Historical Fiction",
        "Magical Realism"
      ],
      "year": 1987
    },
    {
      "isbn": "aafas32gn",
      "author": {
        "id": 68,
        "name": "Murasaki",
        "surname": "Shikibu",
        "genres": [
          "Novel",
          "Poetry"
        ],
        "dob": "c. 973-1014",
        "dod": "c. 1014-1031",
        "nationality": "Japanese",
        "imageUrl": "https://example.com/images/murasaki.jpg",
        "biography": "Murasaki Shikibu was a Japanese novelist, poet, and lady-in-waiting, best known for her classic work 'The Tale of Genji,' often regarded as the world's first novel, which offers insights into court life in Heian-era Japan."
      },
      "country": "Japan",
      "imageLink": "images/the-tale-of-genji.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
      "pages": 1360,
      "title": "The Tale of Genji",
      "shortDescription": "The life and loves of Prince Genji in the imperial court of Heian Japan.",
      "fullDescription": "Often regarded as the world’s first novel, The Tale of Genji offers a detailed and poetic portrayal of court life in Heian Japan. The novel follows the life of the \"Shining Prince\" Genji, his romantic affairs, and his personal struggles, set against the backdrop of the Japanese imperial court. Written by Murasaki Shikibu, a lady-in-waiting, the novel provides a window into the aesthetics, politics, and social customs of the time. With its sophisticated exploration of human emotions and relationships, The Tale of Genji remains one of Japan’s most beloved literary works, celebrated for its depth of character and sensitivity to the ephemeral beauty of life.",
      "publisher": "Various (Ancient Japanese Text)",
      "genres": [
        "Classic Japanese Literature",
        "Romance"
      ],
      "year": 1006
    },
    {
      "isbn": "aagsda1n",
      "author": {
        "id": 70,
        "name": "Robert",
        "surname": "Musil",
        "genres": [
          "Novel",
          "Essay"
        ],
        "dob": "1880-11-06",
        "dod": "1942-04-15",
        "nationality": "Austrian",
        "imageUrl": "https://example.com/images/musil.jpg",
        "biography": "Robert Musil was an Austrian novelist and philosopher, best known for his unfinished novel 'The Man Without Qualities.' His works delve into the complexities of modernity, identity, and the search for meaning in the chaotic world."
      },
      "country": "Austria",
      "imageLink": "images/the-man-without-qualities.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
      "pages": 365,
      "title": "The Man Without Qualities",
      "shortDescription": "An unfinished novel about an intellectual man navigating a crumbling society.",
      "fullDescription": "The Man Without Qualities is an unfinished modernist masterpiece by Austrian writer Robert Musil. Set in the last days of the Austro-Hungarian Empire, the novel follows Ulrich, a man of reason and intellect, who remains emotionally detached from the world around him. As Ulrich navigates a decaying society on the brink of World War I, the novel reflects on the collapse of traditional values and the philosophical questions of modern existence. Musil’s work is known for its deep psychological insight, irony, and commentary on the absurdities of modern life. Despite its unfinished state, The Man Without Qualities is considered one of the most important novels of the 20th century.",
      "publisher": "Rowohlt Verlag",
      "genres": [
        "Modernist Fiction",
        "Philosophical Novel"
      ],
      "year": 1931
    },
    {
      "isbn": "aads32agn",
      "author": {
        "id": 88,
        "name": "Vladimir",
        "surname": "Nabokov",
        "genres": ["Novel", "Poetry", "Literary Criticism"],
        "dob": "1899-04-22",
        "dod": "1977-07-02",
        "nationality": "Russian-American",
        "imageUrl": "https://example.com/images/nabokov.jpg",
        "biography": "Vladimir Nabokov was a Russian-American novelist, poet, and literary critic, best known for his intricate prose style and exploration of complex themes. His most famous work, 'Lolita,' is a controversial yet acclaimed novel that delves into obsession and desire. Nabokov's other notable works include 'Pale Fire' and 'Ada or Ardor,' both showcasing his linguistic prowess and deep understanding of the human psyche. His contributions to literature have left a lasting impact on both Russian and American literary traditions."
      },
      "country": "Russia/United States",
      "imageLink": "images/lolita.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Lolita\n",
      "pages": 317,
      "title": "Lolita",
      "shortDescription": "The disturbing obsession of a middle-aged man with a 12-year-old girl.",
      "fullDescription": "Lolita is one of the most controversial novels in modern literature, written by Russian-American author Vladimir Nabokov. The novel is narrated by Humbert Humbert, a middle-aged literature professor, who becomes obsessed with Dolores Haze, a 12-year-old girl he nicknames Lolita. Humbert's obsession leads him to manipulate and control Lolita, creating a disturbing and morally complex narrative. Through Humbert's lyrical yet unreliable narration, Nabokov explores themes of obsession, guilt, and the manipulation of innocence. While its subject matter has sparked significant debate, Lolita is also praised for its literary craftsmanship, rich language, and provocative exploration of morality and desire.",
      "publisher": "Olympia Press",
      "genres": [
        "Psychological Fiction"
      ],
      "year": 1955
    },
    {
      "isbn": "aasdagn231",
      "author": {
        "id": 22,
        "name": "George",
        "surname": "Eliot",
        "genres": [
          "Novel",
          "Social Critique"
        ],
        "dob": "1819-11-22",
        "dod": "1880-12-22",
        "nationality": "British",
        "imageUrl": "https://example.com/images/eliot.jpg",
        "biography": "George Eliot was the pen name of Mary Ann Evans, an English novelist and one of the leading writers of the Victorian era. Her notable works, including 'Middlemarch' and 'Silas Marner,' are known for their psychological depth and exploration of social issues."
      },
      "country": "United Kingdom",
      "imageLink": "images/nineteen-eighty-four.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
      "pages": 272,
      "title": "Nineteen Eighty-Four",
      "shortDescription": "A chilling portrayal of a totalitarian regime’s control over thought and reality.",
      "fullDescription": "George Orwell’s Nineteen Eighty-Four is a dystopian novel set in a totalitarian society where the Party, led by Big Brother, exercises absolute control over all aspects of life, including thought, language, and history. The novel follows Winston Smith, a government worker who begins to question the oppressive regime and secretly seeks freedom and truth. Orwell’s work examines themes of surveillance, censorship, propaganda, and the manipulation of truth, making it one of the most influential and chilling portrayals of a dystopian future. Nineteen Eighty-Four has had a profound impact on modern political thought, with its concepts of \"Big Brother,\" \"thoughtcrime\" and \"doublethink\" becoming part of contemporary discourse on totalitarianism and authoritarianism.",
      "publisher": "Secker & Warburg",
      "genres": [
        "Dystopian Fiction",
        "Political Fiction"
      ],
      "year": 1949
    },
    {
      "isbn": "ads1aagn",
      "author": {
        "id": 89,
        "name": "Ovid",
        "surname": "Naso",
        "genres": ["Poetry", "Mythology"],
        "dob": "43 BC",
        "dod": "17/18 AD",
        "nationality": "Roman",
        "imageUrl": "https://example.com/images/ovid.jpg",
        "biography": "Ovid, full name Publius Ovidius Naso, was a Roman poet known for his mastery of elegiac poetry and mythological themes. His most famous work, 'Metamorphoses,' is a narrative poem that weaves together various myths and legends of transformation, influencing countless writers and artists throughout history. Ovid's other notable works include 'Amores' and 'Ars Amatoria,' which explore themes of love and desire. His innovative use of language and narrative structure has secured his place as one of the foremost poets of ancient Rome."
      },
      "country": "Roman Empire",
      "imageLink": "images/the-metamorphoses-of-ovid.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
      "pages": 576,
      "title": "Metamorphoses",
      "shortDescription": "A collection of mythological transformations, from the creation of the world to Julius Caesar.",
      "fullDescription": "Ovid's Metamorphoses is an epic poem that chronicles over 250 Greek and Roman myths, all linked by the theme of transformation. Spanning from the world's creation to the deification of Julius Caesar, it includes iconic stories like Daphne and Apollo, Pygmalion, and the Trojan War. The poem explores themes of love, power, and change, and has influenced countless works of literature and art throughout history. Despite its mythological content, Metamorphoses offers a commentary on human nature and Roman society, making it a timeless classic of Western literature.",
      "publisher": "Various ancient publishers",
      "genres": [
        "Epic Poetry",
        "Mythology"
      ],
      "year": 100
    },
    {
      "isbn": "adsa34agn",
      "author": {
        "id": 47,
        "name": "Fernando",
        "surname": "Pessoa",
        "genres": [
          "Poetry",
          "Philosophy"
        ],
        "dob": "1888-06-13",
        "dod": "1935-11-30",
        "nationality": "Portuguese",
        "imageUrl": "https://example.com/images/pessoa.jpg",
        "biography": "Fernando Pessoa was a Portuguese poet, writer, and philosopher, known for his innovative use of heteronyms. His works, including 'The Book of Disquiet' and various poetry collections, explore themes of identity, existentialism, and the nature of reality."
      },
      "country": "Portugal",
      "imageLink": "images/the-book-of-disquiet.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
      "pages": 272,
      "title": "The Book of Disquiet",
      "shortDescription": "A fragmented, introspective work of existential musings and reflections.",
      "fullDescription": "The Book of Disquiet is a deeply introspective and existential work by Portuguese writer Fernando Pessoa, written under the heteronym Bernardo Soares. Composed of disconnected and fragmentary reflections, the book reveals the inner life of a man who contemplates his own insignificance in the universe. Through its meditations on solitude, dreams, and the disillusionment of everyday life, The Book of Disquiet captures the alienation and uncertainty of modern existence. Though largely unpublished during Pessoa’s lifetime, the work has since gained recognition as a masterpiece of modernist literature, exploring themes of identity and the human condition in an enigmatic and poetic style.",
      "publisher": "Published posthumously",
      "genres": [
        "Modernist Fiction",
        "Philosophical Fiction"
      ],
      "year": 1928
    },
    {
      "isbn": "aaasd12gn",
      "author": {
        "id": 72,
        "name": "Edgar",
        "surname": "Allan Poe",
        "genres": [
          "Poetry",
          "Short Story"
        ],
        "dob": "1809-01-19",
        "dod": "1849-10-07",
        "nationality": "American",
        "imageUrl": "https://example.com/images/poe.jpg",
        "biography": "Edgar Allan Poe was an American writer and poet, known for his macabre and gothic tales. His notable works, including 'The Raven' and 'The Tell-Tale Heart,' explore themes of death, madness, and the human psyche."
      },
      "country": "United States",
      "imageLink": "images/tales-and-poems-of-edgar-allan-poe.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
      "pages": 842,
      "title": "Tales",
      "shortDescription": "A collection of Poe's dark and imaginative short stories, exploring themes of madness, mortality, and the macabre.",
      "fullDescription": "Edgar Allan Poe’s Tales is a quintessential anthology that showcases his mastery of the short story form and his profound impact on the genres of horror and Gothic literature. This collection includes some of his most famous works, such as \"The Tell-Tale Heart\", \"The Fall of the House of Usher\" and \"The Cask of Amontillado\", which delve into the depths of the human psyche, exploring themes of guilt, obsession, and the supernatural. Poe's writing is characterized by its vivid imagery, intricate plots, and a haunting atmosphere that captivates readers. His unique ability to blend psychological tension with elements of the bizarre and grotesque has left an indelible mark on literature, influencing countless writers and establishing the foundation for modern horror fiction. With Tales, readers are invited into a world where reality blurs with nightmare, making it an essential collection for fans of the macabre.",
      "publisher": "Various, including Penguin Classics",
      "genres": [
        "Horror",
        "Gothic Fiction"
      ],
      "year": 1950
    },
    {
      "isbn": "sdf4325aagn",
      "author": {
        "id": 90,
        "name": "Marcel",
        "surname": "Proust",
        "genres": ["Novel", "Essay"],
        "dob": "1871-07-10",
        "dod": "1922-11-18",
        "nationality": "French",
        "imageUrl": "https://example.com/images/proust.jpg",
        "biography": "Marcel Proust was a French novelist and essayist, best known for his monumental work 'In Search of Lost Time' (À la recherche du temps perdu), which explores themes of memory, time, and identity through a rich, introspective narrative. Proust's writing is characterized by its long, flowing sentences and deep psychological insight. His exploration of the nature of art and human experience has made him a pivotal figure in modern literature, influencing generations of writers and thinkers."
      },
      "country": "France",
      "imageLink": "images/a-la-recherche-du-temps-perdu.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
      "pages": 2408,
      "title": "In Search of Lost Time",
      "shortDescription": "A vast exploration of memory, time, and society in early 20th-century France.",
      "fullDescription": "In Search of Lost Time (also known as Remembrance of Things Past) is Marcel Proust’s monumental work, comprising seven volumes. Through the narrator’s journey of recalling his past, particularly triggered by the famous \"madeleine moment\", the novel reflects on time, memory, and the nature of human experience. The protagonist’s experiences of love, jealousy, art, and society are explored in immense detail, often with lyrical and philosophical reflections. Proust's exploration of involuntary memory and the passage of time has made this work a touchstone for modernist literature. Its meticulous prose and introspective depth have secured In Search of Lost Time a place among the greatest literary achievements of the 20th century.",
      "publisher": "Grasset & Gallimard",
      "genres": [
        "Modernist Fiction",
        "Philosophical Fiction"
      ],
      "year": 1920
    },
    {
      "isbn": "aasd56agn",
      "author": {
        "id": 91,
        "name": "François",
        "surname": "Rabelais",
        "genres": ["Novel", "Satire"],
        "dob": "1494-02-06",
        "dod": "1553-04-09",
        "nationality": "French",
        "imageUrl": "https://example.com/images/rabelais.jpg",
        "biography": "François Rabelais was a French writer, physician, and humanist of the Renaissance, best known for his satirical novels, particularly 'Gargantua' and 'Pantagruel.' His works are celebrated for their humor, exuberance, and philosophical depth, exploring themes of education, politics, and the human condition. Rabelais's unique blend of fantasy and realism, along with his inventive use of language, has had a lasting influence on French literature and culture."
      },
      "country": "France",
      "imageLink": "images/gargantua-and-pantagruel.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
      "pages": 623,
      "title": "Gargantua and Pantagruel",
      "shortDescription": "A satirical series about the adventures of two giants and their encounters with the absurdities of life.",
      "fullDescription": "Gargantua and Pantagruel is a series of five novels written by François Rabelais, following the lives of two giants, Gargantua and his son Pantagruel. Through their exaggerated, comical adventures, Rabelais critiques various aspects of society, including education, religion, and politics. The work is filled with bawdy humor, grotesque imagery, and satirical commentary, reflecting the Renaissance humanist spirit and Rabelais’s deep belief in intellectual freedom and skepticism of authority. While the text is playful and often absurd, it also delves into serious philosophical questions about human existence, making it a richly layered work that has influenced numerous writers and thinkers.",
      "publisher": "Various",
      "genres": [
        "Satirical Fiction"
      ],
      "year": 1533
    },
    {
      "isbn": "aasad98gn",
      "author": {
        "id": 92,
        "name": "Juan",
        "surname": "Rulfo",
        "genres": ["Novel", "Short Story"],
        "dob": "1917-05-16",
        "dod": "1986-01-07",
        "nationality": "Mexican",
        "imageUrl": "https://example.com/images/rulfo.jpg",
        "biography": "Juan Rulfo was a Mexican writer, photographer, and screenwriter, celebrated for his influential contributions to Latin American literature. His most notable works include the novel 'Pedro Páramo' and the short story collection 'El Llano en llamas.' Rulfo's writing captures the struggles and complexities of rural life in Mexico, blending realism with elements of magical realism. His evocative style and profound exploration of themes such as memory and identity have made him a key figure in 20th-century literature."
      },
      "country": "Mexico",
      "imageLink": "images/pedro-paramo.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
      "pages": 124,
      "title": "Pedro Páramo",
      "shortDescription": "A haunting tale of a man’s search for his father in a ghostly, surreal Mexican village.",
      "fullDescription": "Juan Rulfo’s Pedro Páramo is a cornerstone of Latin American literature and a pioneering work of magical realism. The novel follows Juan Preciado as he journeys to the village of Comala to find his estranged father, Pedro Páramo, only to discover that the town is inhabited by ghosts and memories. The novel’s fragmented narrative and dreamlike atmosphere blur the boundaries between life and death, past and present, creating a haunting exploration of loss, guilt, and the haunting presence of the past. Pedro Páramo is considered a landmark work for its innovative narrative style and its profound impact on subsequent generations of Latin American writers, including Gabriel García Márquez.",
      "publisher": "Various",
      "genres": [
        "Magical Realism",
        "Fiction"
      ],
      "year": 1955
    },
    {
      "isbn": "asd2134aagn",
      "author": {
        "id": 65,
        "name": "Rumi",
        "surname": "",
        "genres": [
          "Poetry",
          "Philosophy"
        ],
        "dob": "1207-09-30",
        "dod": "1273-12-17",
        "nationality": "Persian",
        "imageUrl": "https://example.com/images/rumi.jpg",
        "biography": "Rumi was a 13th-century Persian poet, Islamic scholar, and mystic, widely regarded as one of the greatest poets in history. His poetry, emphasizing love, spirituality, and the connection between the human and divine, continues to inspire readers worldwide."
      },
      "country": "Sultanate of Rum",
      "imageLink": "images/the-masnavi.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Masnavi\n",
      "pages": 438,
      "title": "The Masnavi",
      "shortDescription": "A collection of spiritual stories and teachings that guide the reader toward divine love.",
      "fullDescription": "Rumi’s The Masnavi is one of the most revered works of Sufi literature, composed of six books of poetry that explore the soul’s journey toward God. Through allegorical stories, parables, and philosophical musings, Rumi delves into the nature of love, the self, and the divine. The Masnavi serves as both a spiritual guide and a literary masterpiece, blending poetic beauty with profound insights into human nature and spirituality. Often referred to as the \"Quran in Persian\", Rumi’s work has resonated with readers across cultures and centuries, earning him a lasting legacy as one of the greatest poets and spiritual teachers in history.",
      "publisher": "Various",
      "genres": [
        "Sufi Poetry",
        "Spiritual Literature"
      ],
      "year": 1236
    },
    {
      "isbn": "aa45387bgn",
      "author": {
        "id": 93,
        "name": "Salman",
        "surname": "Rushdie",
        "genres": ["Novel", "Essay"],
        "dob": "1947-06-19",
        "dod": null,
        "nationality": "British-Indian",
        "imageUrl": "https://example.com/images/rushdie.jpg",
        "biography": "Salman Rushdie is a British-Indian author and essayist, known for his provocative and imaginative storytelling. His most acclaimed work, 'Midnight's Children,' won the Booker Prize and explores the historical and cultural complexities of India through the lens of magical realism. Rushdie's other notable novels include 'The Satanic Verses' and 'The Moor's Last Sigh.' His writing often addresses themes of identity, migration, and the interplay of history and personal narrative. Rushdie's works have sparked both critical acclaim and controversy, making him a significant figure in contemporary literature."
      },
      "country": "United Kingdom, India",
      "imageLink": "images/midnights-children.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
      "pages": 536,
      "title": "Midnight's Children",
      "shortDescription": "A tale of India’s history intertwined with the magical lives of children born at the moment of its independence.",
      "fullDescription": "Midnight’s Children is a sweeping, multi-generational novel that blends magical realism with historical fiction to tell the story of modern India. The novel's protagonist, Saleem Sinai, is born at the exact moment of India’s independence in 1947, and his life becomes inextricably linked with the country’s tumultuous history. Saleem and other children born at the stroke of midnight possess magical abilities, and through their stories, Rushdie explores themes of identity, nationhood, and memory. Midnight’s Children is lauded for its inventive narrative style, political commentary, and its use of magical realism to reflect on post-colonial India's complexities. The novel won the Booker Prize and later the Booker of Bookers, cementing Rushdie’s reputation as one of the most important writers of the 20th century.",
      "publisher": "Jonathan Cape",
      "genres": [
        "Magical Realism",
        "Historical Fiction"
      ],
      "year": 1981
    },
    {
      "isbn": "aaasd435gn",
      "author": {
        "id": 94,
        "name": "Saadi",
        "surname": "Shirazi",
        "genres": ["Poetry", "Prose"],
        "dob": "1210",
        "dod": "1292",
        "nationality": "Persian",
        "imageUrl": "https://example.com/images/saadi.jpg",
        "biography": "Saadi Shirazi was a prominent Persian poet and prose writer of the medieval period, renowned for his eloquent poetry and moral tales. His most famous works include 'Gulistan' (The Rose Garden) and 'Bustan' (The Orchard), which blend storytelling with profound philosophical insights and ethical teachings. Saadi's writings reflect a deep understanding of human nature and social issues, and his verses emphasize themes of love, compassion, and wisdom. His influence extends beyond literature, making him a revered figure in Persian culture and literature."
      },
      "country": "Persia, Persian Empire",
      "imageLink": "images/bostan.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
      "pages": 298,
      "title": "Bostan",
      "shortDescription": "A collection of moral and ethical teachings written in verse.",
      "fullDescription": "Bostan (The Orchard) by Saadi Shirazi is a classic of Persian literature, consisting of didactic stories and poems that offer moral and spiritual guidance. Written in verse, the work covers a wide range of subjects, including justice, kindness, humility, and the nature of human existence. Saadi’s eloquent and wise reflections on life have made Bostan an enduring work, admired for its ethical insights and its poetic beauty. The text’s universal themes have resonated with readers beyond its Persian origins, earning Saadi a reputation as one of the great moral philosophers and poets of the medieval Islamic world.",
      "publisher": "Various",
      "genres": [
        "Persian Poetry",
        "Philosophical Literature"
      ],
      "year": 1257
    },
    {
      "isbn": "aaasdj0gn",
      "author": {
        "id": 95,
        "name": "Tayeb",
        "surname": "Salih",
        "genres": ["Novel", "Literary Fiction"],
        "dob": "1929-07-12",
        "dod": "2009-02-18",
        "nationality": "Sudanese",
        "imageUrl": "https://example.com/images/salih.jpg",
        "biography": "Tayeb Salih was a Sudanese novelist and author, best known for his acclaimed novel 'Season of Migration to the North.' This work explores themes of identity, colonialism, and the clash of cultures through the story of a Sudanese man who returns home after studying in England. Salih's writing reflects a deep engagement with issues of post-colonialism, diaspora, and the complexities of cultural identity. His literary contributions have made him one of the most significant voices in Arab literature."
      },
      "country": "Sudan",
      "imageLink": "images/season-of-migration-to-the-north.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
      "pages": 139,
      "title": "Season of Migration to the North",
      "shortDescription": "A Sudanese man returns home and reflects on colonialism and cultural identity.",
      "fullDescription": "Tayeb Salih’s Season of Migration to the North is a post-colonial novel that examines the complexities of identity, power, and cultural conflict. Narrated by a man returning to Sudan after studying in Europe, the novel explores the impact of colonialism on personal and national identity. Through its portrayal of the enigmatic character Mustafa Sa’eed and his destructive relationships with European women, Salih delves into the intersections of race, gender, and power. Season of Migration to the North is widely regarded as one of the most important Arabic novels of the 20th century, offering a nuanced exploration of the legacies of colonialism and the challenges of cultural hybridity.",
      "publisher": "Heinemann",
      "genres": [
        "Post-Colonial Fiction"
      ],
      "year": 1966
    },
    {
      "isbn": "aaasd346gn",
      "author": {
        "id": 96,
        "name": "José",
        "surname": "Saramago",
        "genres": ["Novel", "Essay"],
        "dob": "1922-11-16",
        "dod": "2010-06-18",
        "nationality": "Portuguese",
        "imageUrl": "https://example.com/images/saramago.jpg",
        "biography": "José Saramago was a Portuguese writer and Nobel Prize laureate, renowned for his imaginative and philosophical novels. His most celebrated work, 'Blindness,' explores the collapse of society in the face of an epidemic of blindness, serving as a powerful allegory for human nature and morality. Saramago's distinctive writing style often includes long sentences and minimal punctuation, challenging readers to engage deeply with his themes of power, ethics, and the human condition. His literary legacy has made him one of the most important figures in contemporary literature."
      },
      "country": "Portugal",
      "imageLink": "images/blindness.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
      "pages": 352,
      "title": "Blindness",
      "shortDescription": "A society descends into chaos when a mysterious blindness epidemic strikes.",
      "fullDescription": "Blindness by Nobel Prize-winning author José Saramago is a harrowing dystopian novel that explores the breakdown of civilization following an inexplicable epidemic of blindness. As an entire city succumbs to the affliction, social order disintegrates, and individuals are forced to confront the darker sides of human nature. The novel, written in Saramago's signature flowing prose, presents a chilling examination of morality, solidarity, and survival in the face of existential crisis. Blindness is both an allegory of societal collapse and a reflection on the human capacity for both cruelty and compassion when stripped of the structures of civilization.",
      "publisher": "Caminho",
      "genres": [
        "Dystopian Fiction",
        "Philosophical Fiction"
      ],
      "year": 1995
    },
    {
      "isbn": "adsf1390agn",
      "author": {
        "id": 25,
        "name": "William",
        "surname": "Faulkner",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1897-09-25",
        "dod": "1962-07-06",
        "nationality": "American",
        "imageUrl": "https://example.com/images/faulkner.jpg",
        "biography": "William Faulkner was an American writer known for his complex narratives and innovative writing style. His works, including 'The Sound and the Fury' and 'As I Lay Dying,' explore the complexities of the Southern United States and the human condition."
      },
      "country": "England",
      "imageLink": "images/hamlet.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Hamlet\n",
      "pages": 432,
      "title": "Hamlet",
      "shortDescription": "The Prince of Denmark seeks revenge for his father’s murder, descending into madness and tragedy.",
      "fullDescription": "Hamlet is one of William Shakespeare’s most famous tragedies, centered around the young Prince of Denmark, who is driven to avenge his father’s murder by his uncle Claudius. As Hamlet wrestles with his conscience, sanity, and the corrupt world around him, the play explores themes of revenge, madness, betrayal, and the human condition. With its complex characters, philosophical soliloquies, and exploration of existential themes, Hamlet remains one of the most influential and performed works in the English literary canon. Shakespeare's use of rich language and deep psychological insight has ensured the play’s enduring significance for over four centuries.",
      "publisher": "First Folio",
      "genres": [
        "Tragedy"
      ],
      "year": 1603
    },
    {
      "isbn": "aagsdag756n",
      "author": {
        "id": 25,
        "name": "William",
        "surname": "Faulkner",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1897-09-25",
        "dod": "1962-07-06",
        "nationality": "American",
        "imageUrl": "https://example.com/images/faulkner.jpg",
        "biography": "William Faulkner was an American writer known for his complex narratives and innovative writing style. His works, including 'The Sound and the Fury' and 'As I Lay Dying,' explore the complexities of the Southern United States and the human condition."
      },
      "country": "England",
      "imageLink": "images/king-lear.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/King_Lear\n",
      "pages": 384,
      "title": "King Lear",
      "shortDescription": "A tragic tale of an aging king's descent into madness after dividing his kingdom among his daughters.",
      "fullDescription": "In King Lear, Shakespeare tells the story of a monarch who foolishly divides his kingdom between two deceitful daughters, disowning the one daughter who truly loves him. As Lear gradually descends into madness, the play unfolds as a powerful exploration of family, betrayal, and the devastating consequences of pride and folly. The subplot, involving the nobleman Gloucester and his sons, mirrors the main story, reinforcing the themes of loyalty, justice, and suffering. King Lear is often regarded as one of Shakespeare’s greatest tragedies, with its profound meditation on human frailty and the consequences of moral blindness.",
      "publisher": "First Folio",
      "genres": [
        "Tragedy"
      ],
      "year": 1608
    },
    {
      "isbn": "aadsa5768gn",
      "author": {
        "id": 25,
        "name": "William",
        "surname": "Faulkner",
        "genres": [
          "Novel",
          "Short Story"
        ],
        "dob": "1897-09-25",
        "dod": "1962-07-06",
        "nationality": "American",
        "imageUrl": "https://example.com/images/faulkner.jpg",
        "biography": "William Faulkner was an American writer known for his complex narratives and innovative writing style. His works, including 'The Sound and the Fury' and 'As I Lay Dying,' explore the complexities of the Southern United States and the human condition."
      },
      "country": "England",
      "imageLink": "images/othello.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Othello\n",
      "pages": 314,
      "title": "Othello",
      "shortDescription": "A tale of jealousy and betrayal, where the Moorish general Othello is manipulated into believing his wife is unfaithful.",
      "fullDescription": "Othello is one of Shakespeare’s most intense and tragic plays, focusing on the destructive power of jealousy and the complexities of race and identity. Othello, a Moorish general in the Venetian army, is led to believe by his cunning ensign, Iago, that his wife Desdemona has been unfaithful. Consumed by jealousy, Othello’s descent into violence and self-destruction becomes inevitable, culminating in a tragic conclusion. The play is notable for its exploration of racial prejudice, manipulation, and the vulnerability of trust. Othello has remained relevant in discussions of race, power, and the dark side of human emotions.",
      "publisher": "First Folio",
      "genres": [
        "Tragedy"
      ],
      "year": 1609
    },
    {
      "isbn": "aax3er57gn",
      "author": {
        "id": 66,
        "name": "Sophocles",
        "surname": "",
        "genres": [
          "Drama",
          "Tragedy"
        ],
        "dob": "c. 496 BC",
        "dod": "c. 406 BC",
        "nationality": "Ancient Greek",
        "imageUrl": "https://example.com/images/sophocles.jpg",
        "biography": "Sophocles was an ancient Greek playwright, one of the three ancient Greek tragedians whose works have survived. His notable plays, including 'Oedipus Rex' and 'Antigone,' explore themes of fate, moral conflict, and human suffering."
      },
      "country": "Greece",
      "imageLink": "images/oedipus-the-king.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
      "pages": 88,
      "title": "Oedipus the King",
      "shortDescription": "A Greek tragedy about a man who unwittingly fulfills a prophecy that he will kill his father and marry his mother.",
      "fullDescription": "Oedipus the King is one of the most famous plays of classical Greek literature, written by Sophocles. It tells the story of Oedipus, the king of Thebes, who is determined to uncover the truth about the murder of the previous king, only to discover that he himself is the killer. Unwittingly, Oedipus has fulfilled a prophecy that he would kill his father and marry his mother, leading to his tragic downfall. The play explores themes of fate, free will, and the limits of human understanding, and has been celebrated for its dramatic irony and psychological depth. Oedipus's relentless quest for truth and his subsequent realization of his fate remain powerful metaphors for human suffering and self-awareness.",
      "publisher": "Various",
      "genres": [
        "Tragedy"
      ],
      "year": -430
    },
    {
      "isbn": "aag435rewn",
      "author": {
        "id": 97,
        "name": "Stendhal",
        "surname": "Henri Beyle",
        "genres": ["Novel", "Biography", "Criticism"],
        "dob": "1783-01-23",
        "dod": "1842-03-23",
        "nationality": "French",
        "imageUrl": "https://example.com/images/stendhal.jpg",
        "biography": "Stendhal, the pen name of Henri Beyle, was a French writer known for his influential novels and keen psychological insight. His most notable works include 'The Red and the Black' and 'The Charterhouse of Parma,' which explore themes of ambition, love, and the complexities of human relationships. Stendhal's writing is characterized by its realism and depth of character, as well as his use of the concept of 'crystallization' to describe the process of falling in love. He is considered a precursor to modern literary realism and has left a lasting impact on the literary world."
      },
      "country": "France",
      "imageLink": "images/le-rouge-et-le-noir.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
      "pages": 576,
      "title": "The Red and the Black",
      "shortDescription": "The rise and fall of a young man from provincial France as he navigates love, politics, and ambition.",
      "fullDescription": "Stendhal’s The Red and the Black is a psychological and social novel set in post-Napoleonic France. It follows the ambitious young Julien Sorel, who seeks to rise above his humble origins through military and clerical success, symbolized by \"the red\" (the army) and \"the black\" (the church). Julien’s romance with the married Madame de Rênal and his later pursuit of power through the aristocratic Mathilde de la Mole lead to a series of tragic events, ultimately revealing the conflicts between individual desire and social constraints. The Red and the Black is notable for its exploration of the inner workings of its protagonist’s mind, as well as its critique of French society, making it a precursor to modern psychological and realist novels.",
      "publisher": "Levavasseur",
      "genres": [
        "Historical Fiction",
        "Romance"
      ],
      "year": 1830
    },
    {
      "isbn": "aasadc435798gn",
      "author": {
        "id": 98,
        "name": "Laurence",
        "surname": "Sterne",
        "genres": ["Novel", "Satire"],
        "dob": "1713-11-24",
        "dod": "1768-03-18",
        "nationality": "Irish",
        "imageUrl": "https://example.com/images/sterne.jpg",
        "biography": "Laurence Sterne was an Irish novelist and Anglican clergyman, best known for his innovative and humorous writing style. His most famous work, 'Tristram Shandy,' is a groundbreaking novel that employs a digressive narrative structure and playful language, exploring the complexities of storytelling and the nature of time. Sterne's wit and originality have made him a significant figure in the development of the English novel, influencing many later writers with his unconventional approach to narrative and character."
      },
      "country": "England",
      "imageLink": "images/the-life-and-opinions-of-tristram-shandy.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
      "pages": 640,
      "title": "The Life And Opinions of Tristram Shandy",
      "shortDescription": "An experimental, humorous novel that chronicles the life and peculiar musings of Tristram Shandy.",
      "fullDescription": "Laurence Sterne’s The Life and Opinions of Tristram Shandy is a groundbreaking, unconventional novel that defies traditional narrative structure. Through a series of digressions, flashbacks, and comic interruptions, the narrator, Tristram Shandy, attempts to tell the story of his life, though he is often sidetracked by humorous observations and anecdotes. The novel’s playful structure and its exploration of consciousness and time were ahead of their time, influencing later modernist writers. Sterne’s wit, his use of metafiction, and his commentary on the act of storytelling itself have earned Tristram Shandy a lasting place in literary history as one of the first truly experimental novels.",
      "publisher": "Multiple",
      "genres": [
        "Satirical Fiction",
        "Experimental Literature"
      ],
      "year": 1760
    },
    {
      "isbn": "aagasdcew56457n",
      "author": {
        "id": 99,
        "name": "Italo",
        "surname": "Svevo",
        "genres": ["Novel", "Psychological Fiction"],
        "dob": "1861-12-19",
        "dod": "1928-09-13",
        "nationality": "Italian",
        "imageUrl": "https://example.com/images/svevo.jpg",
        "biography": "Italo Svevo was an Italian novelist and playwright, best known for his novel 'Confessions of Zeno,' which explores the complexities of identity, addiction, and self-deception through the confessions of a neurotic businessman. Svevo's writing combines elements of psychological realism with humor and a deep exploration of the human psyche. His work was largely overlooked during his lifetime but gained recognition posthumously, influencing many modern writers and securing Svevo's place as a key figure in 20th-century literature."
      },
      "country": "Italy",
      "imageLink": "images/confessions-of-zeno.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
      "pages": 412,
      "title": "Confessions of Zeno",
      "shortDescription": "A psychological exploration of a man’s life, told through his reflections on his failed attempts to quit smoking.",
      "fullDescription": "Confessions of Zeno is a modernist novel by Italo Svevo that presents the introspective confessions of Zeno Cosini, an unreliable narrator who recounts his failed efforts to quit smoking. As Zeno reflects on his life, his relationships with his father, his wife, and his lover are revealed in a complex psychological portrait. The novel explores themes of addiction, self-deception, and existential anxiety, drawing heavily on the emerging field of psychoanalysis. Svevo’s portrayal of Zeno’s inner turmoil, his use of irony, and his blending of humor with deep psychological insight have made Confessions of Zeno a key work in early 20th-century literature.",
      "publisher": "Cappelli",
      "genres": [
        "Modernist Fiction",
        "Psychological Fiction"
      ],
      "year": 1923
    },
    {
      "isbn": "aaasafs543gn",
      "author": {
        "id": 79,
        "name": "Jonathan",
        "surname": "Swift",
        "genres": [
          "Satire",
          "Essay"
        ],
        "dob": "1667-11-30",
        "dod": "1745-10-19",
        "nationality": "Irish",
        "imageUrl": "https://example.com/images/swift.jpg",
        "biography": "Jonathan Swift was an Irish satirist and essayist, best known for his work 'Gulliver's Travels,' which critiques human nature and society through satire and allegory."
      },
      "country": "Ireland",
      "imageLink": "images/gullivers-travels.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
      "pages": 178,
      "title": "Gulliver's Travels",
      "shortDescription": "The adventures of Lemuel Gulliver as he visits strange lands, including Lilliput and Brobdingnag.",
      "fullDescription": "Gulliver’s Travels is a satirical adventure novel by Jonathan Swift that chronicles the voyages of Lemuel Gulliver to a series of fantastical lands. Each land serves as a vehicle for Swift’s sharp critiques of politics, human nature, and society. In Lilliput, Gulliver encounters a world of tiny people obsessed with petty conflicts, while in Brobdingnag, he is dwarfed by a race of giants. The novel also explores the flying island of Laputa and the land of the Houyhnhnms, where rational horses rule over brutish humans. Gulliver’s Travels combines biting satire with imaginative storytelling, making it one of the most enduring works of English literature.",
      "publisher": "Benjamin Motte",
      "genres": [
        "Satire",
        "Adventure"
      ],
      "year": 1726
    },
    {
      "isbn": "aagasxc342n",
      "author": {
        "id": 51,
        "name": "Leo",
        "surname": "Tolstoy",
        "genres": [
          "Novel",
          "Philosophy"
        ],
        "dob": "1828-09-09",
        "dod": "1910-11-20",
        "nationality": "Russian",
        "imageUrl": "https://example.com/images/tolstoy.jpg",
        "biography": "Leo Tolstoy was a Russian writer and philosopher, widely regarded as one of the greatest novelists of all time. His notable works, including 'War and Peace' and 'Anna Karenina,' explore moral dilemmas and the complexities of human nature."
      },
      "country": "Russia",
      "imageLink": "images/war-and-peace.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
      "pages": 1296,
      "title": "War and Peace",
      "shortDescription": "A sweeping epic of Russia’s aristocracy during the Napoleonic Wars, interwoven with philosophical reflections on history.",
      "fullDescription": "War and Peace is Leo Tolstoy’s monumental novel that intertwines the lives of Russian aristocrats with the tumultuous events of the Napoleonic Wars. Through the stories of Pierre Bezukhov, Prince Andrei Bolkonsky, and Natasha Rostova, Tolstoy examines the moral dilemmas, emotional struggles, and existential crises of his characters against the backdrop of historical events. The novel explores themes of fate, free will, love, and death, while Tolstoy also delves into philosophical discussions on the nature of war and historical determinism. War and Peace is celebrated for its rich character development, detailed historical setting, and its profound reflections on the human condition, making it one of the greatest works of world literature.",
      "publisher": "The Russian Messenger",
      "genres": [
        "Historical Fiction",
        "Epic"
      ],
      "year": 1867
    },
    {
      "isbn": "aasaer267gn",
      "author": {
        "id": 51,
        "name": "Leo",
        "surname": "Tolstoy",
        "genres": [
          "Novel",
          "Philosophy"
        ],
        "dob": "1828-09-09",
        "dod": "1910-11-20",
        "nationality": "Russian",
        "imageUrl": "https://example.com/images/tolstoy.jpg",
        "biography": "Leo Tolstoy was a Russian writer and philosopher, widely regarded as one of the greatest novelists of all time. His notable works, including 'War and Peace' and 'Anna Karenina,' explore moral dilemmas and the complexities of human nature."
      },
      "country": "Russia",
      "imageLink": "images/anna-karenina.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Anna_Karenina\n",
      "pages": 864,
      "title": "Anna Karenina",
      "shortDescription": "A tragic love story of a married woman who falls in love with a young officer.",
      "fullDescription": "Anna Karenina is Tolstoy’s masterpiece about love, society, and morality in 19th-century Russia. The novel centers on Anna, a beautiful and aristocratic woman trapped in an unhappy marriage, who embarks on a passionate affair with Count Vronsky. Her love defies societal expectations, leading to her eventual downfall and tragic demise. In contrast, the novel also follows the story of Konstantin Levin, a landowner who grapples with philosophical questions about faith, love, and the meaning of life. Anna Karenina is celebrated for its complex characters, its rich depiction of Russian society, and its exploration of the conflict between personal desires and social duty.",
      "publisher": "The Russian Messenger",
      "genres": [
        "Realist Fiction"
      ],
      "year": 1877
    },
    {
      "isbn": "aasadfc45gn",
      "author": {
        "id": 51,
        "name": "Leo",
        "surname": "Tolstoy",
        "genres": [
          "Novel",
          "Philosophy"
        ],
        "dob": "1828-09-09",
        "dod": "1910-11-20",
        "nationality": "Russian",
        "imageUrl": "https://example.com/images/tolstoy.jpg",
        "biography": "Leo Tolstoy was a Russian writer and philosopher, widely regarded as one of the greatest novelists of all time. His notable works, including 'War and Peace' and 'Anna Karenina,' explore moral dilemmas and the complexities of human nature."
      },
      "country": "Russia",
      "imageLink": "images/the-death-of-ivan-ilyich.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
      "pages": 92,
      "title": "The Death of Ivan Ilyich",
      "shortDescription": "The story of a man confronting his impending death and reflecting on the meaning of life.",
      "fullDescription": "The Death of Ivan Ilyich is a profound novella by Tolstoy that addresses the universal themes of mortality, suffering, and the search for meaning. The story follows Ivan Ilyich, a high-ranking judge in 19th-century Russia, who, after falling ill, is forced to confront his own death and re-examine his life. As Ivan reflects on his past decisions and the superficiality of his existence, the novella delves into existential questions about the nature of life and the inevitability of death. Tolstoy’s deep philosophical insights, combined with his keen psychological observations, make this work one of his most powerful and meditative literary achievements.",
      "publisher": "Mediator Publishers",
      "genres": [
        "Novella",
        "Philosophical Fiction"
      ],
      "year": 1886
    },
    {
      "isbn": "aagju786n",
      "author": {
        "id": 52,
        "name": "Mark",
        "surname": "Twain",
        "genres": [
          "Novel",
          "Humor"
        ],
        "dob": "1835-11-30",
        "dod": "1910-04-21",
        "nationality": "American",
        "imageUrl": "https://example.com/images/twain.jpg",
        "biography": "Mark Twain was an American author and humorist, best known for his novels 'The Adventures of Tom Sawyer' and 'Adventures of Huckleberry Finn.' His works often critique society and explore themes of race, identity, and morality."
      },
      "country": "United States",
      "imageLink": "images/the-adventures-of-huckleberry-finn.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
      "pages": 224,
      "title": "The Adventures of Huckleberry Finn",
      "shortDescription": "The story of a boy’s journey down the Mississippi River, confronting issues of race and freedom.",
      "fullDescription": "The Adventures of Huckleberry Finn is one of the most celebrated works in American literature, written by Mark Twain. The novel follows the young Huck Finn as he escapes from his abusive father and embarks on an adventure down the Mississippi River with Jim, an escaped enslaved man. As they travel, Huck wrestles with his own beliefs about slavery and society, leading to a moral awakening. Twain’s novel is a satirical critique of the social attitudes of the time, particularly regarding race and freedom. With its rich vernacular, vivid depiction of life along the Mississippi, and enduring themes of friendship and justice, Huckleberry Finn remains a cornerstone of American literature.",
      "publisher": "Chatto & Windus / Charles L. Webster and Company",
      "genres": [
        "Adventure Fiction",
        "Satire"
      ],
      "year": 1884
    },
    {
      "isbn": "aadsfj756gn",
      "author": {
        "id": 100,
        "name": "Valmiki",
        "surname": "",
        "genres": ["Epic Poetry", "Mythology"],
        "dob": "c. 500 BC",
        "dod": null,
        "nationality": "Indian",
        "imageUrl": "https://example.com/images/valmiki.jpg",
        "biography": "Valmiki is a revered ancient Indian poet and the author of the epic Ramayana, one of the two major Sanskrit epics of ancient Indian literature. Traditionally regarded as the 'Adi Kavi' or 'first poet,' Valmiki's work is celebrated for its poetic beauty and profound moral lessons. The Ramayana narrates the life of Prince Rama, exploring themes of duty, righteousness, and the triumph of good over evil. Valmiki's contributions have significantly shaped Indian culture and literature, influencing countless adaptations and interpretations over the centuries."
      },
      "country": "India",
      "imageLink": "images/ramayana.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Ramayana\n",
      "pages": 152,
      "title": "Ramayana",
      "shortDescription": "An ancient Indian epic detailing the adventures of Prince Rama and his quest to rescue his wife, Sita.",
      "fullDescription": "The Ramayana, attributed to the sage Valmiki, is one of the great epics of ancient Indian literature. It tells the story of Rama, a prince of the kingdom of Ayodhya, who embarks on a perilous journey to rescue his wife, Sita, after she is kidnapped by the demon king Ravana. Along the way, Rama is aided by a host of allies, including the devoted Hanuman and the monkey army. The Ramayana explores themes of duty, loyalty, love, and the eternal struggle between good and evil. As both a spiritual and cultural text, the Ramayana has been central to Hindu religious tradition and continues to inspire readers across the world.",
      "publisher": "Various",
      "genres": [
        "Epic Poetry",
        "Religious Text"
      ],
      "year": -450
    },
    {
      "isbn": "asf54678aagn",
      "author": {
        "id": 101,
        "name": "Virgil",
        "surname": "Publius Vergilius Maro",
        "genres": ["Epic Poetry", "Pastoral Poetry"],
        "dob": "70 BC",
        "dod": "19 BC",
        "nationality": "Roman",
        "imageUrl": "https://example.com/images/virgil.jpg",
        "biography": "Virgil, known as Publius Vergilius Maro, was a Roman poet of the Augustan period, renowned for his epic poetry and profound influence on Western literature. His most famous work, the 'Aeneid,' tells the story of Aeneas, a Trojan hero, and his journey to establish the foundations of Rome. Virgil's other notable works include the 'Eclogues' and the 'Georgics,' which explore themes of pastoral life and agriculture. His masterful use of language and exploration of fate, duty, and the human experience have solidified his status as one of the greatest poets in literary history."
      },
      "country": "Roman Empire",
      "imageLink": "images/the-aeneid.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Aeneid\n",
      "pages": 442,
      "title": "The Aeneid",
      "shortDescription": "The Roman epic that follows the hero Aeneas on his journey to found the city of Rome.",
      "fullDescription": "Virgil’s The Aeneid is a foundational work of Roman literature that chronicles the journey of the Trojan hero Aeneas after the fall of Troy. Commissioned by Augustus, the epic celebrates the mythological origins of Rome and the values of Roman civilization. Aeneas’s long journey takes him to Carthage, where he has a doomed love affair with Queen Dido, and eventually to Italy, where he battles to establish a new Trojan state. The Aeneid is both a tale of adventure and a reflection on the costs of empire, fate, and leadership. Virgil’s work has had a lasting influence on Western literature, becoming a model for later epics and a symbol of Rome’s imperial destiny.",
      "publisher": "Various (Ancient Roman Text)",
      "genres": [
        "Epic Poetry"
      ],
      "year": -23
    },
    {
      "isbn": "aagnasfd57",
      "author": {
        "id": 102,
        "name": "Vyasa",
        "surname": "Krishna Dvaipayana",
        "genres": ["Epic Poetry", "Philosophy"],
        "dob": "c. 1500 BC",
        "dod": null,
        "nationality": "Indian",
        "imageUrl": "https://example.com/images/vyasa.jpg",
        "biography": "Vyasa, also known as Krishna Dvaipayana, is a revered sage and the legendary author of the Mahabharata, one of the longest epic poems in the world and a cornerstone of Indian literature and philosophy. Vyasa is credited with compiling the Vedas and is considered a central figure in Hindu tradition. The Mahabharata encompasses profound themes of duty, righteousness, and the complexity of human nature, with the Bhagavad Gita being one of its most celebrated sections. Vyasa's contributions to literature, spirituality, and philosophy have made him a pivotal figure in Indian culture."
      },
      "country": "India",
      "imageLink": "images/the-mahab-harata.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Mahabharata\n",
      "pages": 276,
      "title": "Mahabharata",
      "shortDescription": "A monumental Indian epic recounting the Kurukshetra War and the fates of the Kaurava and Pandava princes.",
      "fullDescription": "The Mahabharata is one of the two major Sanskrit epics of ancient India, attributed to the sage Vyasa. It is the longest epic poem ever written, encompassing stories of family conflict, divine intervention, and moral dilemmas. The central narrative concerns the power struggle between the Pandava and Kaurava families, culminating in the great battle of Kurukshetra. Alongside the epic tale, the Mahabharata includes important Hindu spiritual texts, such as the Bhagavad Gita, in which Lord Krishna imparts crucial philosophical teachings to the warrior Arjuna. The Mahabharata is a complex blend of history, mythology, and theology, deeply influencing Indian culture and religion.",
      "publisher": "Various",
      "genres": [
        "Epic Poetry",
        "Religious Text"
      ],
      "year": -700
    },
    {
      "isbn": "aasd768agn",
      "author": {
        "id": 103,
        "name": "Walt",
        "surname": "Whitman",
        "genres": ["Poetry", "Essay"],
        "dob": "1819-05-31",
        "dod": "1892-03-26",
        "nationality": "American",
        "imageUrl": "https://example.com/images/whitman.jpg",
        "biography": "Walt Whitman was an American poet, essayist, and journalist, best known for his groundbreaking collection of poetry, 'Leaves of Grass.' Whitman's work is characterized by its celebration of the individual, nature, and the human experience, as well as its innovative free verse style. His poetry explores themes of democracy, equality, and the interconnectedness of all people. Whitman’s frank exploration of sexuality and his embrace of the body as a source of beauty and strength were considered revolutionary for his time. He is often regarded as one of the most significant figures in American literature."
      },
      "country": "United States",
      "imageLink": "images/leaves-of-grass.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
      "pages": 152,
      "title": "Leaves of Grass",
      "shortDescription": "A groundbreaking collection of poems celebrating the individual, nature, and the American spirit.",
      "fullDescription": "Leaves of Grass is a seminal work of American poetry by Walt Whitman, first published in 1855 and expanded throughout his life. The collection is known for its free verse style and its celebration of democracy, nature, love, and the human spirit. Whitman’s poetry broke with traditional forms, capturing the rhythms of everyday speech and embracing a uniquely American voice. Themes of individualism, sensuality, and transcendence run throughout the work, particularly in poems like “Song of Myself.” Leaves of Grass remains a defining text in American literature, hailed for its innovation and Whitman’s visionary embrace of the individual’s place within the larger fabric of society.",
      "publisher": "Self-published",
      "genres": [
        "Poetry"
      ],
      "year": 1855
    },
    {
      "isbn": "aaasfdth78gn",
      "author": {
        "id": 53,
        "name": "Virginia",
        "surname": "Woolf",
        "genres": [
          "Novel",
          "Essay"
        ],
        "dob": "1882-01-25",
        "dod": "1941-03-28",
        "nationality": "British",
        "imageUrl": "https://example.com/images/woolf.jpg",
        "biography": "Virginia Woolf was an English writer and modernist, known for her influential novels and essays. Her major works, including 'Mrs. Dalloway' and 'To the Lighthouse,' explore themes of consciousness, gender, and the passage of time."
      },
      "country": "United Kingdom",
      "imageLink": "images/mrs-dalloway.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
      "pages": 216,
      "title": "Mrs Dalloway",
      "shortDescription": "A day in the life of Clarissa Dalloway as she prepares for a party, reflecting on her past and present.",
      "fullDescription": "Mrs Dalloway is Virginia Woolf’s modernist masterpiece that captures the inner thoughts and emotions of its characters over the course of a single day. The novel centers on Clarissa Dalloway, a high-society woman preparing for a party in post-World War I London, but expands to include the lives of other characters, including a war veteran suffering from shell shock. Through Woolf’s innovative stream-of-consciousness technique, Mrs Dalloway delves into themes of time, memory, mental illness, and the complexity of human relationships. The novel is a poignant meditation on the passage of time and the ephemeral nature of life.",
      "publisher": "Hogarth Press",
      "genres": [
        "Modernist Fiction"
      ],
      "year": 1925
    },
    {
      "isbn": "aaasd345gn",
      "author": {
        "id": 53,
        "name": "Virginia",
        "surname": "Woolf",
        "genres": [
          "Novel",
          "Essay"
        ],
        "dob": "1882-01-25",
        "dod": "1941-03-28",
        "nationality": "British",
        "imageUrl": "https://example.com/images/woolf.jpg",
        "biography": "Virginia Woolf was an English writer and modernist, known for her influential novels and essays. Her major works, including 'Mrs. Dalloway' and 'To the Lighthouse,' explore themes of consciousness, gender, and the passage of time."
      },
      "country": "United Kingdom",
      "imageLink": "images/to-the-lighthouse.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
      "pages": 209,
      "title": "To the Lighthouse",
      "shortDescription": "The Ramsay family’s experiences on their summer vacation, explored through themes of time, memory, and perception.",
      "fullDescription": "To the Lighthouse is another of Woolf’s modernist works, renowned for its lyrical prose and innovative structure. Set over two visits to the Ramsay family’s summer home on the Isle of Skye, the novel is divided into three parts, with the middle section spanning ten years of time in a few pages. The characters’ internal thoughts, especially Mrs. Ramsay’s, dominate the narrative, offering a deep psychological exploration of family dynamics, art, and the passing of time. Woolf’s delicate interplay of memory and perception creates a work that is as much about the limitations of human experience as it is about the beauty of life’s fleeting moments.",
      "publisher": "Hogarth Press",
      "genres": [
        "Modernist Fiction"
      ],
      "year": 1927
    },
    {
      "isbn": "aaasd3245gn",
      "author": {
        "id": 54,
        "name": "Marguerite",
        "surname": "Yourcenar",
        "genres": [
          "Novel",
          "Essay"
        ],
        "dob": "1903-06-08",
        "dod": "1987-12-17",
        "nationality": "Belgian",
        "imageUrl": "https://example.com/images/yourcenar.jpg",
        "biography": "Marguerite Yourcenar was a Belgian novelist and essayist, the first woman elected to the Académie Française. Her notable works include 'Memoirs of Hadrian' and 'The Abyss,' which explore history, philosophy, and the human experience."
      },
      "country": "France/Belgium",
      "imageLink": "images/memoirs-of-hadrian.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
      "pages": 408,
      "title": "Memoirs of Hadrian",
      "shortDescription": "The fictionalized autobiography of Roman Emperor Hadrian, reflecting on his life and reign.",
      "fullDescription": "Memoirs of Hadrian is Marguerite Yourcenar’s elegant portrayal of the Roman Emperor Hadrian, written as a fictionalized letter to his successor, Marcus Aurelius. The novel recounts Hadrian’s rise to power, his military campaigns, and his personal reflections on governance, philosophy, and the nature of life and death. Yourcenar meticulously reconstructs the historical world of Rome in the 2nd century, blending it with profound philosophical musings. The result is a rich, introspective narrative that explores the tension between power and wisdom, love and loss, and the timeless question of what it means to live a good life. Memoirs of Hadrian is regarded as one of the finest historical novels ever written.",
      "publisher": "Plon",
      "genres": [
        "Historical Fiction",
        "Philosophical Fiction"
      ],
      "year": 1951
    }
  ]

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get("http://localhost:8080/api/book");
  }

  getAllBooksFiltered(filter: string){
    return this.http.get("http://localhost:8080/api/book/filter/" + filter);
  }

  getBookByIsbn(isbn: string) {
    return this.http.get("http://localhost:8080/api/book/by-isbn/" + isbn);
  }

  getBooksByGenre(genres: string[], isbn: string) {
    return this.http.get("http://localhost:8080/api/book/by-genres/" + genres);
  }

  getBooksByAuthor(authorId: number){
    return this.http.get("http://localhost:8080/api/book/by-author/" + authorId);
  }
}