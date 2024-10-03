import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors: any[] = [
    {
      "id": 1,
      "name": "Chinua",
      "surname": "Achebe",
      "genres": ["Fiction", "Non-Fiction"],
      "dob": "1930-11-16",
      "dod": "2013-03-21",
      "nationality": "Nigerian",
      "imageUrl": "https://example.com/images/achebe.jpg",
      "biography": "Chinua Achebe was a Nigerian novelist, poet, professor, and critic, best known for his first novel, 'Things Fall Apart' (1958), which is considered a classic of African literature and has been translated into more than 50 languages. His works explore the themes of colonialism and its impact on African identity and culture."
    },
    {
      "id": 2,
      "name": "Hans Christian",
      "surname": "Andersen",
      "genres": ["Fairy Tales", "Children's Literature"],
      "dob": "1805-04-02",
      "dod": "1875-08-04",
      "nationality": "Danish",
      "imageUrl": "https://example.com/images/andersen.jpg",
      "biography": "Hans Christian Andersen was a Danish author renowned for his fairy tales, including 'The Little Mermaid,' 'The Ugly Duckling,' and 'The Princess and the Pea.' His stories often convey moral lessons and reflect his deep empathy for the underprivileged and marginalized."
    },
    {
      "id": 3,
      "name": "Dante",
      "surname": "Alighieri",
      "genres": ["Epic Poetry", "Philosophy"],
      "dob": "1265-06-01",
      "dod": "1321-09-14",
      "nationality": "Italian",
      "imageUrl": "https://example.com/images/dante.jpg",
      "biography": "Dante Alighieri was an Italian poet, writer, and philosopher, best known for his epic poem 'The Divine Comedy,' which is widely considered one of the greatest works of world literature. His writings explore themes of love, morality, and the nature of existence."
    },
    {
      "id": 4,
      "name": "Unknown",
      "surname": "",
      "genres": ["Various"],
      "dob": "",
      "dod": "",
      "nationality": "",
      "imageUrl": "https://example.com/images/unknown.jpg",
      "biography": "This entry refers to authors whose identities are lost to history, yet their contributions to literature continue to influence modern storytelling."
    },
    {
      "id": 5,
      "name": "Jane",
      "surname": "Austen",
      "genres": ["Romance", "Social Commentary"],
      "dob": "1775-12-16",
      "dod": "1817-07-18",
      "nationality": "British",
      "imageUrl": "https://example.com/images/austen.jpg",
      "biography": "Jane Austen was an English novelist known for her six major novels, including 'Pride and Prejudice,' 'Sense and Sensibility,' and 'Emma.' Her works critique the British landed gentry at the end of the 18th century and provide a keen insight into the lives and morals of her time."
    },
    {
      "id": 6,
      "name": "Honoré",
      "surname": "de Balzac",
      "genres": ["Realism", "Novel"],
      "dob": "1799-05-20",
      "dod": "1850-08-18",
      "nationality": "French",
      "imageUrl": "https://example.com/images/balzac.jpg",
      "biography": "Honoré de Balzac was a French novelist and playwright, recognized for his series of interlinked novels and stories known as 'La Comédie Humaine,' which provides a detailed and vivid panorama of French society in the first half of the 19th century."
    },
    {
      "id": 7,
      "name": "Samuel",
      "surname": "Beckett",
      "genres": ["Play", "Novel", "Poetry"],
      "dob": "1906-04-13",
      "dod": "1989-12-22",
      "nationality": "Irish",
      "imageUrl": "https://example.com/images/becket.jpg",
      "biography": "Samuel Beckett was an Irish playwright, novelist, and poet, best known for his play 'Waiting for Godot.' His work is often characterized by existential themes, minimalist style, and dark humor, reflecting the absurdity of human existence."
    },
    {
      "id": 8,
      "name": "Giovanni",
      "surname": "Boccaccio",
      "genres": ["Narrative Poetry", "Prose"],
      "dob": "1313-06-16",
      "dod": "1375-12-21",
      "nationality": "Italian",
      "imageUrl": "https://example.com/images/boccaccio.jpg",
      "biography": "Giovanni Boccaccio was an Italian writer, poet, and important Renaissance humanist, known for his work 'The Decameron,' a collection of novellas that reflect the societal norms and morals of the 14th century."
    },
    {
      "id": 9,
      "name": "Jorge Luis",
      "surname": "Borges",
      "genres": ["Fiction", "Essay"],
      "dob": "1899-08-24",
      "dod": "1986-06-14",
      "nationality": "Argentinian",
      "imageUrl": "https://example.com/images/borges.jpg",
      "biography": "Jorge Luis Borges was an Argentine short-story writer, essayist, and poet, known for his complex narratives and exploration of philosophical themes in works like 'The Aleph' and 'Ficciones.' His writings often blur the line between reality and fiction."
    },
    {
      "id": 10,
      "name": "Emily",
      "surname": "Brontë",
      "genres": ["Poetry", "Fiction"],
      "dob": "1818-07-30",
      "dod": "1848-12-19",
      "nationality": "British",
      "imageUrl": "https://example.com/images/bronte.jpg",
      "biography": "Emily Brontë was an English novelist and poet, best known for her only novel, 'Wuthering Heights,' which has become a classic of English literature. Her work is noted for its psychological depth and exploration of themes such as passion and revenge."
    },
    {
      "id": 11,
      "name": "Albert",
      "surname": "Camus",
      "genres": ["Philosophy", "Fiction"],
      "dob": "1913-11-07",
      "dod": "1960-01-04",
      "nationality": "Algerian-French",
      "imageUrl": "https://example.com/images/camus.jpg",
      "biography": "Albert Camus was a French philosopher, author, and journalist known for his contributions to existentialism and absurdism. His works, including 'The Stranger' and 'The Myth of Sisyphus,' explore themes of absurdity, freedom, and rebellion against meaninglessness."
    },
    {
      "id": 12,
      "name": "Paul",
      "surname": "Celan",
      "genres": ["Poetry"],
      "dob": "1920-11-23",
      "dod": "1970-04-20",
      "nationality": "Romanian-French",
      "imageUrl": "https://example.com/images/celan.jpg",
      "biography": "Paul Celan was a Romanian-born poet who wrote in German, known for his profound and often enigmatic poetry that deals with themes of loss, trauma, and the Holocaust. His most famous poem, 'Death Fugue,' exemplifies his unique style and the depth of his experience."
    },
    {
      "id": 13,
      "name": "Louis-Ferdinand",
      "surname": "Céline",
      "genres": ["Novel", "Essay"],
      "dob": "1894-05-27",
      "dod": "1961-07-01",
      "nationality": "French",
      "imageUrl": "https://example.com/images/celine.jpg",
      "biography": "Louis-Ferdinand Céline was a French novelist and doctor, known for his controversial and innovative writing style. His most famous novel, 'Journey to the End of the Night,' is noted for its dark humor and critique of society."
    },
    {
      "id": 14,
      "name": "Miguel",
      "surname": "de Cervantes",
      "genres": ["Novel", "Drama"],
      "dob": "1547-09-29",
      "dod": "1616-04-22",
      "nationality": "Spanish",
      "imageUrl": "https://example.com/images/cervantes.jpg",
      "biography": "Miguel de Cervantes was a Spanish writer, best known for his novel 'Don Quixote,' considered one of the first modern novels. His work has had a profound impact on Western literature and is celebrated for its inventive narrative style and exploration of reality and illusion."
    },
    {
      "id": 15,
      "name": "Geoffrey",
      "surname": "Chaucer",
      "genres": ["Poetry", "Satire"],
      "dob": "1343-01-01",
      "dod": "1400-10-25",
      "nationality": "English",
      "imageUrl": "https://example.com/images/chaucer.jpg",
      "biography": "Geoffrey Chaucer was an English poet, known as the 'Father of English literature.' His most famous work, 'The Canterbury Tales,' is a collection of stories that provide insight into medieval society and explore themes of love, morality, and human nature."
    },
    {
      "id": 16,
      "name": "Anton",
      "surname": "Chekhov",
      "genres": ["Drama", "Short Story"],
      "dob": "1860-01-29",
      "dod": "1904-07-15",
      "nationality": "Russian",
      "imageUrl": "https://example.com/images/chekhov.jpg",
      "biography": "Anton Chekhov was a Russian playwright and short story writer, considered one of the greatest writers in the history of literature. His works, including plays like 'The Cherry Orchard' and 'The Seagull,' are celebrated for their depth and the portrayal of human emotions."
    },
    {
      "id": 17,
      "name": "Joseph",
      "surname": "Conrad",
      "genres": ["Novel", "Short Story"],
      "dob": "1857-12-03",
      "dod": "1924-08-03",
      "nationality": "Polish-British",
      "imageUrl": "https://example.com/images/conrad.jpg",
      "biography": "Joseph Conrad was a Polish-British novelist and short story writer, known for his works exploring themes of imperialism and human nature. His notable works include 'Heart of Darkness' and 'Lord Jim,' which reflect his experiences as a sailor and his views on colonialism."
    },
    {
      "id": 18,
      "name": "Charles",
      "surname": "Dickens",
      "genres": ["Novel", "Social Critique"],
      "dob": "1812-02-07",
      "dod": "1870-06-09",
      "nationality": "British",
      "imageUrl": "https://example.com/images/dickens.jpg",
      "biography": "Charles Dickens was an English writer and social critic, widely regarded as the greatest novelist of the Victorian era. His works, including 'A Christmas Carol,' 'Great Expectations,' and 'Oliver Twist,' often address social issues and highlight the struggles of the poor."
    },
    {
      "id": 19,
      "name": "Denis",
      "surname": "Diderot",
      "genres": ["Philosophy", "Literary Criticism"],
      "dob": "1713-10-05",
      "dod": "1784-07-31",
      "nationality": "French",
      "imageUrl": "https://example.com/images/diderot.jpg",
      "biography": "Denis Diderot was a French philosopher, art critic, and writer, best known for co-founding the Encyclopédie, a monumental reference work that aimed to summarize human knowledge. His contributions to literature and philosophy were instrumental during the Enlightenment."
    },
    {
      "id": 20,
      "name": "Alfred",
      "surname": "Döblin",
      "genres": ["Novel", "Expressionism"],
      "dob": "1878-08-10",
      "dod": "1957-06-26",
      "nationality": "German",
      "imageUrl": "https://example.com/images/doblin.jpg",
      "biography": "Alfred Döblin was a German novelist and expressionist writer, known for his groundbreaking novel 'Berlin Alexanderplatz,' which explores the life of a working-class man in post-World War I Berlin. His innovative narrative style has had a lasting impact on modern literature."
    },
    {
      "id": 21,
      "name": "Fyodor",
      "surname": "Dostoevsky",
      "genres": ["Novel", "Philosophy"],
      "dob": "1821-11-11",
      "dod": "1881-02-09",
      "nationality": "Russian",
      "imageUrl": "https://example.com/images/dostoevsky.jpg",
      "biography": "Fyodor Dostoevsky was a Russian novelist and philosopher, renowned for his exploration of psychology and morality in works such as 'Crime and Punishment,' 'The Brothers Karamazov,' and 'The Idiot.' His writings delve into the complexities of human existence and the struggle between faith and doubt."
    },
    {
      "id": 22,
      "name": "George",
      "surname": "Eliot",
      "genres": ["Novel", "Social Critique"],
      "dob": "1819-11-22",
      "dod": "1880-12-22",
      "nationality": "British",
      "imageUrl": "https://example.com/images/eliot.jpg",
      "biography": "George Eliot was the pen name of Mary Ann Evans, an English novelist and one of the leading writers of the Victorian era. Her notable works, including 'Middlemarch' and 'Silas Marner,' are known for their psychological depth and exploration of social issues."
    },
    {
      "id": 23,
      "name": "Ralph",
      "surname": "Ellison",
      "genres": ["Novel", "Essay"],
      "dob": "1914-03-01",
      "dod": "1994-04-16",
      "nationality": "American",
      "imageUrl": "https://example.com/images/ellison.jpg",
      "biography": "Ralph Ellison was an American novelist, essayist, and literary critic, best known for his novel 'Invisible Man,' which addresses the social and intellectual issues faced by African Americans in the early 20th century. His work explores themes of identity and race."
    },
    {
      "id": 24,
      "name": "Euripides",
      "surname": "",
      "genres": ["Tragedy", "Drama"],
      "dob": "480 BC",
      "dod": "406 BC",
      "nationality": "Greek",
      "imageUrl": "https://example.com/images/euripides.jpg",
      "biography": "Euripides was an ancient Greek tragedian and one of the three ancient Greek tragedians whose works have survived. His plays, including 'Medea' and 'The Bacchae,' often explore complex themes of human emotion and challenge societal norms."
    },
    {
      "id": 25,
      "name": "William",
      "surname": "Faulkner",
      "genres": ["Novel", "Short Story"],
      "dob": "1897-09-25",
      "dod": "1962-07-06",
      "nationality": "American",
      "imageUrl": "https://example.com/images/faulkner.jpg",
      "biography": "William Faulkner was an American writer known for his complex narratives and innovative writing style. His works, including 'The Sound and the Fury' and 'As I Lay Dying,' explore the complexities of the Southern United States and the human condition."
    },
    {
      "id": 26,
      "name": "Gustave",
      "surname": "Flaubert",
      "genres": ["Novel", "Realism"],
      "dob": "1821-12-12",
      "dod": "1880-05-08",
      "nationality": "French",
      "imageUrl": "https://example.com/images/flaubert.jpg",
      "biography": "Gustave Flaubert was a French novelist and is considered one of the most influential literary figures of the 19th century. His most famous work, 'Madame Bovary,' is a pioneering example of literary realism and explores the themes of desire and disillusionment."
    },
    {
      "id": 27,
      "name": "Federico",
      "surname": "García Lorca",
      "genres": ["Poetry", "Drama"],
      "dob": "1898-06-05",
      "dod": "1936-08-19",
      "nationality": "Spanish",
      "imageUrl": "https://example.com/images/lorca.jpg",
      "biography": "Federico García Lorca was a Spanish poet, playwright, and director, known for his deeply emotional and passionate works. His notable pieces, including 'Romancero Gitano' and 'The House of Bernarda Alba,' reflect the culture and struggles of Andalusian life."
    },
    {
      "id": 28,
      "name": "Gabriel",
      "surname": "García Márquez",
      "genres": ["Novel", "Short Story"],
      "dob": "1927-03-06",
      "dod": "2014-04-17",
      "nationality": "Colombian",
      "imageUrl": "https://example.com/images/marquez.jpg",
      "biography": "Gabriel García Márquez was a Colombian novelist and Nobel Prize winner, renowned for his magical realism. His most famous work, 'One Hundred Years of Solitude,' explores themes of love, solitude, and the cyclical nature of history."
    },
    {
      "id": 29,
      "name": "Johann Wolfgang",
      "surname": "von Goethe",
      "genres": ["Drama", "Poetry", "Novel"],
      "dob": "1749-08-28",
      "dod": "1832-03-22",
      "nationality": "German",
      "imageUrl": "https://example.com/images/goethe.jpg",
      "biography": "Johann Wolfgang von Goethe was a German writer and statesman, regarded as one of the greatest figures in Western literature. His works, including 'Faust' and 'The Sorrows of Young Werther,' span various genres and explore themes of love, ambition, and existentialism."
    },
    {
      "id": 30,
      "name": "Nikolai",
      "surname": "Gogol",
      "genres": ["Comedy", "Tragedy"],
      "dob": "1809-03-31",
      "dod": "1852-03-04",
      "nationality": "Ukrainian-Russian",
      "imageUrl": "https://example.com/images/gogol.jpg",
      "biography": "Nikolai Gogol was a Ukrainian-born Russian writer known for his unique blend of comedy and tragedy. His works, including 'Dead Souls' and 'The Overcoat,' critique society and human nature through satire and surrealism."
    },
    {
      "id": 31,
      "name": "Günter",
      "surname": "Grass",
      "genres": ["Novel", "Poetry"],
      "dob": "1927-10-16",
      "dod": "2015-04-13",
      "nationality": "German",
      "imageUrl": "https://example.com/images/grass.jpg",
      "biography": "Günter Grass was a German novelist, poet, and playwright, awarded the Nobel Prize in Literature in 1999. His most famous work, 'The Tin Drum,' combines magical realism with a poignant critique of German society and history."
    },
    {
      "id": 32,
      "name": "João",
      "surname": "Guimarães Rosa",
      "genres": ["Novel", "Short Story"],
      "dob": "1908-06-06",
      "dod": "1967-11-19",
      "nationality": "Brazilian",
      "imageUrl": "https://example.com/images/guimaraes.jpg",
      "biography": "João Guimarães Rosa was a Brazilian novelist and short story writer, celebrated for his unique narrative style and the use of regional dialects. His major work, 'The Devil to Pay in the Backlands,' explores Brazilian culture and identity."
    },
    {
      "id": 33,
      "name": "Knut",
      "surname": "Hamsun",
      "genres": ["Novel", "Philosophy"],
      "dob": "1859-08-04",
      "dod": "1952-02-19",
      "nationality": "Norwegian",
      "imageUrl": "https://example.com/images/hamsun.jpg",
      "biography": "Knut Hamsun was a Norwegian novelist and Nobel Prize winner known for his psychological insights and exploration of human nature. His seminal work, 'Hunger,' delves into the mind of a starving writer, showcasing his unique style."
    },
    {
      "id": 34,
      "name": "Ernest",
      "surname": "Hemingway",
      "genres": ["Novel", "Short Story"],
      "dob": "1899-07-21",
      "dod": "1961-07-02",
      "nationality": "American",
      "imageUrl": "https://example.com/images/hemingway.jpg",
      "biography": "Ernest Hemingway was an American novelist and short story writer, known for his terse and economical prose style. His major works, including 'The Old Man and the Sea' and 'A Farewell to Arms,' explore themes of love, loss, and the human experience."
    },
    {
      "id": 35,
      "name": "Homer",
      "surname": "",
      "genres": ["Epic Poetry", "Tragedy"],
      "dob": "c. 8th century BC",
      "dod": "c. 8th century BC",
      "nationality": "Greek",
      "imageUrl": "https://example.com/images/homer.jpg",
      "biography": "Homer is traditionally said to be the ancient Greek poet who composed the epic poems 'The Iliad' and 'The Odyssey.' His works are foundational texts of Western literature, exploring themes of heroism, fate, and the human condition."
    },
    {
      "id": 36,
      "name": "Henrik",
      "surname": "Ibsen",
      "genres": ["Drama", "Poetry"],
      "dob": "1828-03-20",
      "dod": "1906-05-23",
      "nationality": "Norwegian",
      "imageUrl": "https://example.com/images/ibsen.jpg",
      "biography": "Henrik Ibsen was a Norwegian playwright and poet, often referred to as the 'father of modern drama.' His plays, including 'A Doll's House' and 'Hedda Gabler,' challenge social norms and explore complex psychological themes."
    },
    {
      "id": 37,
      "name": "James",
      "surname": "Joyce",
      "genres": ["Novel", "Short Story"],
      "dob": "1882-02-02",
      "dod": "1941-01-13",
      "nationality": "Irish",
      "imageUrl": "https://example.com/images/joyce.jpg",
      "biography": "James Joyce was an Irish novelist and modernist, known for his innovative narrative techniques. His landmark work, 'Ulysses,' is a retelling of Homer's 'Odyssey' set in Dublin, exploring themes of identity and the human experience."
    },
    {
      "id": 38,
      "name": "Franz",
      "surname": "Kafka",
      "genres": ["Novel", "Short Story"],
      "dob": "1883-07-03",
      "dod": "1924-06-03",
      "nationality": "Czech",
      "imageUrl": "https://example.com/images/kafka.jpg",
      "biography": "Franz Kafka was a Czech writer known for his surreal and existential works. His notable pieces, including 'The Metamorphosis' and 'The Trial,' explore themes of alienation, guilt, and the absurdity of life."
    },
    {
      "id": 39,
      "name": "Kālidāsa",
      "surname": "",
      "genres": ["Poetry", "Drama"],
      "dob": "c. 4th century",
      "dod": "c. 4th century",
      "nationality": "Indian",
      "imageUrl": "https://example.com/images/kalidasa.jpg",
      "biography": "Kālidāsa is one of the most celebrated poets and dramatists in classical Sanskrit literature. His works, such as 'Shakuntala' and 'Meghaduta,' are renowned for their lyrical beauty and exploration of love, nature, and human emotion."
    },
    {
      "id": 40,
      "name": "Yasunari",
      "surname": "Kawabata",
      "genres": ["Novel", "Short Story"],
      "dob": "1899-06-14",
      "dod": "1972-04-16",
      "nationality": "Japanese",
      "imageUrl": "https://example.com/images/kawabata.jpg",
      "biography": "Yasunari Kawabata was a Japanese novelist and the first Asian to win the Nobel Prize in Literature. His works, including 'Snow Country' and 'The Sound of the Mountain,' beautifully depict the Japanese landscape and explore themes of beauty, loneliness, and memory."
    },
    {
      "id": 41,
      "name": "Nikos",
      "surname": "Kazantzakis",
      "genres": ["Novel", "Philosophy"],
      "dob": "1883-02-18",
      "dod": "1957-10-26",
      "nationality": "Greek",
      "imageUrl": "https://example.com/images/kazantzakis.jpg",
      "biography": "Nikos Kazantzakis was a Greek writer and philosopher, best known for his novel 'Zorba the Greek' and the controversial 'The Last Temptation of Christ.' His works explore the human condition, faith, and the struggle for meaning."
    },
    {
      "id": 42,
      "name": "D. H.",
      "surname": "Lawrence",
      "genres": ["Novel", "Poetry"],
      "dob": "1885-09-11",
      "dod": "1930-03-02",
      "nationality": "English",
      "imageUrl": "https://example.com/images/lawrence.jpg",
      "biography": "D. H. Lawrence was an English novelist, poet, and essayist known for his exploration of human relationships and sexuality. His notable works, including 'Women in Love' and 'Sons and Lovers,' challenge societal norms and delve into the complexities of human emotions."
    },
    {
      "id": 43,
      "name": "Halldór",
      "surname": "Laxness",
      "genres": ["Novel", "Poetry"],
      "dob": "1902-04-23",
      "dod": "1998-02-08",
      "nationality": "Icelandic",
      "imageUrl": "https://example.com/images/laxness.jpg",
      "biography": "Halldór Laxness was an Icelandic writer and the recipient of the Nobel Prize in Literature. His works, including 'Independent People' and 'The Fish Can Sing,' explore Icelandic identity, culture, and social issues."
    },
    {
      "id": 44,
      "name": "Henry",
      "surname": "Miller",
      "genres": ["Novel", "Memoir"],
      "dob": "1891-12-26",
      "dod": "1980-06-07",
      "nationality": "American",
      "imageUrl": "https://example.com/images/miller.jpg",
      "biography": "Henry Miller was an American writer known for his semi-autobiographical novels and frank exploration of sexuality and personal freedom. His notable works include 'Tropic of Cancer' and 'Tropic of Capricorn.'"
    },
    {
      "id": 45,
      "name": "Toni",
      "surname": "Morrison",
      "genres": ["Novel", "Essay"],
      "dob": "1931-02-18",
      "dod": "2019-08-05",
      "nationality": "American",
      "imageUrl": "https://example.com/images/morrison.jpg",
      "biography": "Toni Morrison was an American novelist, editor, and professor, known for her powerful and poetic exploration of African American life. Her works, including 'Beloved' and 'Song of Solomon,' address themes of identity, community, and the legacy of slavery."
    },
    {
      "id": 46,
      "name": "Haruki",
      "surname": "Murakami",
      "genres": ["Novel", "Short Story"],
      "dob": "1949-01-12",
      "dod": null,
      "nationality": "Japanese",
      "imageUrl": "https://example.com/images/murakami.jpg",
      "biography": "Haruki Murakami is a contemporary Japanese writer known for his unique blend of magical realism and profound exploration of human emotions. His notable works, including 'Norwegian Wood' and 'Kafka on the Shore,' have gained international acclaim."
    },
    {
      "id": 47,
      "name": "Fernando",
      "surname": "Pessoa",
      "genres": ["Poetry", "Philosophy"],
      "dob": "1888-06-13",
      "dod": "1935-11-30",
      "nationality": "Portuguese",
      "imageUrl": "https://example.com/images/pessoa.jpg",
      "biography": "Fernando Pessoa was a Portuguese poet, writer, and philosopher, known for his innovative use of heteronyms. His works, including 'The Book of Disquiet' and various poetry collections, explore themes of identity, existentialism, and the nature of reality."
    },
    {
      "id": 48,
      "name": "Ezra",
      "surname": "Pound",
      "genres": ["Poetry", "Literary Criticism"],
      "dob": "1885-10-30",
      "dod": "1972-11-01",
      "nationality": "American",
      "imageUrl": "https://example.com/images/pound.jpg",
      "biography": "Ezra Pound was an American poet and critic known for his significant contributions to modernist literature. His works, including 'The Cantos' and 'In a Station of the Metro,' experiment with form and language, emphasizing clarity and precision."
    },
    {
      "id": 49,
      "name": "Philip",
      "surname": "Roth",
      "genres": ["Novel", "Essay"],
      "dob": "1933-03-19",
      "dod": "2018-05-22",
      "nationality": "American",
      "imageUrl": "https://example.com/images/roth.jpg",
      "biography": "Philip Roth was an American novelist known for his provocative and incisive explorations of Jewish identity and American culture. His notable works, including 'Portnoy's Complaint' and 'American Pastoral,' challenge societal norms and delve into the complexities of identity."
    },
    {
      "id": 50,
      "name": "William",
      "surname": "Shakespeare",
      "genres": ["Drama", "Poetry"],
      "dob": "1564-04-23",
      "dod": "1616-04-23",
      "nationality": "English",
      "imageUrl": "https://example.com/images/shakespeare.jpg",
      "biography": "William Shakespeare was an English playwright and poet, often regarded as the greatest writer in the English language. His plays, including 'Hamlet,' 'Romeo and Juliet,' and 'Macbeth,' explore themes of love, power, and the human condition."
    },
    {
      "id": 51,
      "name": "Leo",
      "surname": "Tolstoy",
      "genres": ["Novel", "Philosophy"],
      "dob": "1828-09-09",
      "dod": "1910-11-20",
      "nationality": "Russian",
      "imageUrl": "https://example.com/images/tolstoy.jpg",
      "biography": "Leo Tolstoy was a Russian writer and philosopher, widely regarded as one of the greatest novelists of all time. His notable works, including 'War and Peace' and 'Anna Karenina,' explore moral dilemmas and the complexities of human nature."
    },
    {
      "id": 52,
      "name": "Mark",
      "surname": "Twain",
      "genres": ["Novel", "Humor"],
      "dob": "1835-11-30",
      "dod": "1910-04-21",
      "nationality": "American",
      "imageUrl": "https://example.com/images/twain.jpg",
      "biography": "Mark Twain was an American author and humorist, best known for his novels 'The Adventures of Tom Sawyer' and 'Adventures of Huckleberry Finn.' His works often critique society and explore themes of race, identity, and morality."
    },
    {
      "id": 53,
      "name": "Virginia",
      "surname": "Woolf",
      "genres": ["Novel", "Essay"],
      "dob": "1882-01-25",
      "dod": "1941-03-28",
      "nationality": "British",
      "imageUrl": "https://example.com/images/woolf.jpg",
      "biography": "Virginia Woolf was an English writer and modernist, known for her influential novels and essays. Her major works, including 'Mrs. Dalloway' and 'To the Lighthouse,' explore themes of consciousness, gender, and the passage of time."
    },
    {
      "id": 54,
      "name": "Marguerite",
      "surname": "Yourcenar",
      "genres": ["Novel", "Essay"],
      "dob": "1903-06-08",
      "dod": "1987-12-17",
      "nationality": "Belgian",
      "imageUrl": "https://example.com/images/yourcenar.jpg",
      "biography": "Marguerite Yourcenar was a Belgian novelist and essayist, the first woman elected to the Académie Française. Her notable works include 'Memoirs of Hadrian' and 'The Abyss,' which explore history, philosophy, and the human experience."
    },
    {
      "id": 55,
      "name": "Gabriel",
      "surname": "García Márquez",
      "genres": ["Novel", "Short Story"],
      "dob": "1927-03-06",
      "dod": "2014-04-17",
      "nationality": "Colombian",
      "imageUrl": "https://example.com/images/garcia-marquez.jpg",
      "biography": "Gabriel García Márquez was a Colombian novelist and Nobel Prize winner, renowned for his magical realism. His acclaimed works include 'One Hundred Years of Solitude' and 'Love in the Time of Cholera,' exploring themes of solitude and human relationships."
    },
    {
      "id": 56,
      "name": "Albert",
      "surname": "Camus",
      "genres": ["Novel", "Philosophy"],
      "dob": "1913-11-07",
      "dod": "1960-01-04",
      "nationality": "French",
      "imageUrl": "https://example.com/images/camus.jpg",
      "biography": "Albert Camus was a French philosopher, author, and Nobel Prize winner known for his contributions to existentialism and absurdism. His notable works include 'The Stranger' and 'The Myth of Sisyphus,' exploring themes of existence and human freedom."
    },
    {
      "id": 57,
      "name": "Jorge",
      "surname": "Luis Borges",
      "genres": ["Short Story", "Poetry"],
      "dob": "1899-08-24",
      "dod": "1986-06-14",
      "nationality": "Argentinian",
      "imageUrl": "https://example.com/images/borges.jpg",
      "biography": "Jorge Luis Borges was an Argentine writer and poet, a key figure in 20th-century literature. His works, such as 'Ficciones' and 'Labyrinths,' explore complex themes of infinity, reality, and identity through intricate narrative structures."
    },
    {
      "id": 58,
      "name": "Naguib",
      "surname": "Mahfouz",
      "genres": ["Novel", "Short Story"],
      "dob": "1911-12-11",
      "dod": "2006-08-30",
      "nationality": "Egyptian",
      "imageUrl": "https://example.com/images/mahfouz.jpg",
      "biography": "Naguib Mahfouz was an Egyptian writer and Nobel Prize laureate known for his influential novels exploring Egyptian society. His notable works include 'The Cairo Trilogy' and 'Children of the Alley,' addressing themes of social change and moral dilemmas."
    },
    {
      "id": 59,
      "name": "William",
      "surname": "Faulkner",
      "genres": ["Novel", "Short Story"],
      "dob": "1897-09-25",
      "dod": "1962-07-06",
      "nationality": "American",
      "imageUrl": "https://example.com/images/faulkner.jpg",
      "biography": "William Faulkner was an American author known for his complex narratives and innovative writing style. His notable works, including 'The Sound and the Fury' and 'As I Lay Dying,' explore themes of time, memory, and the human condition in the American South."
    },
    {
      "id": 60,
      "name": "James",
      "surname": "Joyce",
      "genres": ["Novel", "Short Story"],
      "dob": "1882-02-02",
      "dod": "1941-01-13",
      "nationality": "Irish",
      "imageUrl": "https://example.com/images/joyce.jpg",
      "biography": "James Joyce was an Irish novelist and modernist, celebrated for his innovative narrative techniques. His major works, including 'Ulysses' and 'A Portrait of the Artist as a Young Man,' explore consciousness and the complexities of identity."
    },
    {
      "id": 61,
      "name": "Dante",
      "surname": "Alighieri",
      "genres": ["Poetry", "Epic"],
      "dob": "1265-06-01",
      "dod": "1321-09-14",
      "nationality": "Italian",
      "imageUrl": "https://example.com/images/dante.jpg",
      "biography": "Dante Alighieri was an Italian poet and philosopher, widely regarded as one of the greatest poets in the Italian language. His masterpiece, 'The Divine Comedy,' explores themes of morality, redemption, and the human soul's journey."
    },
    {
      "id": 62,
      "name": "Homer",
      "surname": "",
      "genres": ["Epic", "Poetry"],
      "dob": "c. 8th century BC",
      "dod": "c. 8th century BC",
      "nationality": "Ancient Greek",
      "imageUrl": "https://example.com/images/homer.jpg",
      "biography": "Homer is the ancient Greek poet traditionally said to be the author of the epic poems 'The Iliad' and 'The Odyssey.' His works are foundational texts of Western literature, exploring themes of heroism, honor, and the human experience."
    },
    {
      "id": 63,
      "name": "Fyodor",
      "surname": "Dostoevsky",
      "genres": ["Novel", "Philosophy"],
      "dob": "1821-11-11",
      "dod": "1881-02-09",
      "nationality": "Russian",
      "imageUrl": "https://example.com/images/dostoevsky.jpg",
      "biography": "Fyodor Dostoevsky was a Russian novelist and philosopher, renowned for his deep psychological insight and exploration of morality. His major works, including 'Crime and Punishment' and 'The Brothers Karamazov,' delve into themes of faith, guilt, and redemption."
    },
    {
      "id": 64,
      "name": "George",
      "surname": "Orwell",
      "genres": ["Novel", "Essay"],
      "dob": "1903-06-25",
      "dod": "1950-01-21",
      "nationality": "British",
      "imageUrl": "https://example.com/images/orwell.jpg",
      "biography": "George Orwell was an English novelist and essayist known for his political commentary and dystopian vision. His famous works, including '1984' and 'Animal Farm,' critique totalitarianism and explore themes of power, control, and social justice."
    },
    {
      "id": 65,
      "name": "Rumi",
      "surname": "",
      "genres": ["Poetry", "Philosophy"],
      "dob": "1207-09-30",
      "dod": "1273-12-17",
      "nationality": "Persian",
      "imageUrl": "https://example.com/images/rumi.jpg",
      "biography": "Rumi was a 13th-century Persian poet, Islamic scholar, and mystic, widely regarded as one of the greatest poets in history. His poetry, emphasizing love, spirituality, and the connection between the human and divine, continues to inspire readers worldwide."
    },
    {
      "id": 66,
      "name": "Sophocles",
      "surname": "",
      "genres": ["Drama", "Tragedy"],
      "dob": "c. 496 BC",
      "dod": "c. 406 BC",
      "nationality": "Ancient Greek",
      "imageUrl": "https://example.com/images/sophocles.jpg",
      "biography": "Sophocles was an ancient Greek playwright, one of the three ancient Greek tragedians whose works have survived. His notable plays, including 'Oedipus Rex' and 'Antigone,' explore themes of fate, moral conflict, and human suffering."
    },
    {
      "id": 67,
      "name": "Herman",
      "surname": "Melville",
      "genres": ["Novel", "Poetry"],
      "dob": "1819-08-01",
      "dod": "1891-09-28",
      "nationality": "American",
      "imageUrl": "https://example.com/images/melville.jpg",
      "biography": "Herman Melville was an American novelist and poet, best known for his whaling novel 'Moby-Dick.' His works often explore themes of obsession, identity, and the nature of existence."
    },
    {
      "id": 68,
      "name": "Murasaki",
      "surname": "Shikibu",
      "genres": ["Novel", "Poetry"],
      "dob": "c. 973-1014",
      "dod": "c. 1014-1031",
      "nationality": "Japanese",
      "imageUrl": "https://example.com/images/murasaki.jpg",
      "biography": "Murasaki Shikibu was a Japanese novelist, poet, and lady-in-waiting, best known for her classic work 'The Tale of Genji,' often regarded as the world's first novel, which offers insights into court life in Heian-era Japan."
    },
    {
      "id": 69,
      "name": "Virginia",
      "surname": "Woolf",
      "genres": ["Novel", "Essay"],
      "dob": "1882-01-25",
      "dod": "1941-03-28",
      "nationality": "British",
      "imageUrl": "https://example.com/images/woolf.jpg",
      "biography": "Virginia Woolf was an English writer and modernist known for her novels and essays. Her notable works, including 'Mrs. Dalloway' and 'To the Lighthouse,' explore themes of consciousness, identity, and the complexities of human experience."
    },
    {
      "id": 70,
      "name": "Robert",
      "surname": "Musil",
      "genres": ["Novel", "Essay"],
      "dob": "1880-11-06",
      "dod": "1942-04-15",
      "nationality": "Austrian",
      "imageUrl": "https://example.com/images/musil.jpg",
      "biography": "Robert Musil was an Austrian novelist and philosopher, best known for his unfinished novel 'The Man Without Qualities.' His works delve into the complexities of modernity, identity, and the search for meaning in the chaotic world."
    },
    {
      "id": 71,
      "name": "Toni",
      "surname": "Morrison",
      "genres": ["Novel", "Essay"],
      "dob": "1931-02-18",
      "dod": "2019-08-05",
      "nationality": "American",
      "imageUrl": "https://example.com/images/morrison.jpg",
      "biography": "Toni Morrison was an American novelist and Nobel Prize laureate, known for her powerful exploration of African American identity and history. Her acclaimed works include 'Beloved' and 'Song of Solomon,' addressing themes of race, community, and resilience."
    },
    {
      "id": 72,
      "name": "Edgar",
      "surname": "Allan Poe",
      "genres": ["Poetry", "Short Story"],
      "dob": "1809-01-19",
      "dod": "1849-10-07",
      "nationality": "American",
      "imageUrl": "https://example.com/images/poe.jpg",
      "biography": "Edgar Allan Poe was an American writer and poet, known for his macabre and gothic tales. His notable works, including 'The Raven' and 'The Tell-Tale Heart,' explore themes of death, madness, and the human psyche."
    },
    {
      "id": 73,
      "name": "Franz",
      "surname": "Kafka",
      "genres": ["Novel", "Short Story"],
      "dob": "1883-07-03",
      "dod": "1924-06-03",
      "nationality": "Austrian",
      "imageUrl": "https://example.com/images/kafka.jpg",
      "biography": "Franz Kafka was a German-speaking Bohemian writer known for his surreal and existential works. His major works, including 'The Metamorphosis' and 'The Trial,' explore themes of alienation, bureaucracy, and the absurdity of existence."
    },
    {
      "id": 74,
      "name": "Gabriel",
      "surname": "García Márquez",
      "genres": ["Novel", "Short Story"],
      "dob": "1927-03-06",
      "dod": "2014-04-17",
      "nationality": "Colombian",
      "imageUrl": "https://example.com/images/garcia-marquez.jpg",
      "biography": "Gabriel García Márquez was a Colombian novelist and Nobel Prize winner, renowned for his magical realism. His acclaimed works include 'One Hundred Years of Solitude' and 'Love in the Time of Cholera,' exploring themes of solitude and human relationships."
    },
    {
      "id": 75,
      "name": "Louis-Ferdinand",
      "surname": "Céline",
      "genres": ["Novel", "Essay"],
      "dob": "1894-05-27",
      "dod": "1961-07-01",
      "nationality": "French",
      "imageUrl": "https://example.com/images/celine.jpg",
      "biography": "Louis-Ferdinand Céline was a French novelist and doctor known for his experimental writing style. His most famous work, 'Journey to the End of the Night,' explores themes of despair, war, and the human condition."
    },
    {
      "id": 76,
      "name": "William",
      "surname": "Shakespeare",
      "genres": ["Play", "Poetry"],
      "dob": "1564-04-23",
      "dod": "1616-04-23",
      "nationality": "English",
      "imageUrl": "https://example.com/images/shakespeare.jpg",
      "biography": "William Shakespeare was an English playwright and poet, widely regarded as one of the greatest writers in the English language. His works, including 'Hamlet,' 'Romeo and Juliet,' and 'Macbeth,' explore themes of love, power, and human nature."
    },
    {
      "id": 77,
      "name": "Honoré",
      "surname": "de Balzac",
      "genres": ["Novel", "Drama"],
      "dob": "1799-05-20",
      "dod": "1850-08-18",
      "nationality": "French",
      "imageUrl": "https://example.com/images/balzac.jpg",
      "biography": "Honoré de Balzac was a French novelist and playwright, known for his series of novels and stories collectively titled 'La Comédie Humaine,' which provides a detailed panorama of French society in the first half of the 19th century."
    },
    {
      "id": 78,
      "name": "Gustave",
      "surname": "Flaubert",
      "genres": ["Novel", "Short Story"],
      "dob": "1821-12-12",
      "dod": "1880-05-08",
      "nationality": "French",
      "imageUrl": "https://example.com/images/flaubert.jpg",
      "biography": "Gustave Flaubert was a French novelist, best known for his influential work 'Madame Bovary,' which critiques bourgeois society and explores the theme of romantic idealism."
    },
    {
      "id": 79,
      "name": "Jonathan",
      "surname": "Swift",
      "genres": ["Satire", "Essay"],
      "dob": "1667-11-30",
      "dod": "1745-10-19",
      "nationality": "Irish",
      "imageUrl": "https://example.com/images/swift.jpg",
      "biography": "Jonathan Swift was an Irish satirist and essayist, best known for his work 'Gulliver's Travels,' which critiques human nature and society through satire and allegory."
    },
    {
      "id": 80,
      "name": "Denis",
      "surname": "Diderot",
      "genres": ["Philosophy", "Essay"],
      "dob": "1713-10-05",
      "dod": "1784-07-31",
      "nationality": "French",
      "imageUrl": "https://example.com/images/diderot.jpg",
      "biography": "Denis Diderot was a French philosopher, art critic, and writer, known for co-founding the 'Encyclopédie,' which sought to compile and disseminate knowledge during the Enlightenment."
    },
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
      "id": 103,
      "name": "Walt",
      "surname": "Whitman",
      "genres": ["Poetry", "Essay"],
      "dob": "1819-05-31",
      "dod": "1892-03-26",
      "nationality": "American",
      "imageUrl": "https://example.com/images/whitman.jpg",
      "biography": "Walt Whitman was an American poet, essayist, and journalist, best known for his groundbreaking collection of poetry, 'Leaves of Grass.' Whitman's work is characterized by its celebration of the individual, nature, and the human experience, as well as its innovative free verse style. His poetry explores themes of democracy, equality, and the interconnectedness of all people. Whitman’s frank exploration of sexuality and his embrace of the body as a source of beauty and strength were considered revolutionary for his time. He is often regarded as one of the most significant figures in American literature."
    }

  ]

  constructor(private http: HttpClient) { }

  getAllAuthors() {
    return this.http.get("http://localhost:8080/api/author");
  }

  getAllAuthorsFiltered(filter: string) {
    return this.http.get("http://localhost:8080/api/author/filter/" + filter);
  }

  getAuthorById(id: number) {
    return this.http.get("http://localhost:8080/api/author/" + id);
  }
}
