export class Person {
  nameof: string;
  lead: string;
  quote: string;
  status: string;
  url: string;
  constructor(
    nameof: string,
    lead: string,
    quote: string,
    url: string,
    status: string = 'Verified Graduate'
  ) {
    this.nameof = nameof;
    this.lead = lead;
    this.quote = quote;
    this.url = url;
    this.status = status;
  }
}

export const people: Person[] = [
  new Person(
    `Daniel Clifford`,
    `I received a job offer mid-course, and the subjects I learned were
  current, if not more so, in the company I joined. I honestly feel I
  got every penny's worth.`,
    `I received a job offer mid-course, and the subjects I learned were
  current, if not more so, in the company I joined. I honestly feel I
  got every penny's worth.`,
    `./images/image-daniel.jpg`
  ),
  new Person(
    `Jonathan Walters`,
    `The team was very supportive and kept me motivated`,
    `I started as a total newbie with virtually no coding skills. I now
    work as a mobile engineer for a big company. This was one of the best
    investments I've made in myself.`,
    `./images/image-jonathan.jpg`
  ),
  new Person(
    `Jeanette Harmon`,
    `An overall wonderful and rewarding experience`,
    `Thank you for the wonderful experience! I now have a job I really
    enjoy, and make a good living while doing something I love.`,
    `./images/image-jeanette.jpg`
  ),
  new Person(
    `Patrick Abrahms`,
    `Awesome teaching support from TAs who did the bootcamp themselves.
    Getting guidance from them and learning from their experiences was
    easy.`,
    `The staff seem genuinely concerned about my progress which I find
    really refreshing. The program gave me the confidence necessary to be
    able to go out in the world and present myself as a capable junior
    developer. The standard is above the rest. You will get the personal
    attention you need from an incredible community of smart and amazing
    people.`,
    `./images/image-patrick.jpg`
  ),
  new Person(
    `Kira Whittle`,
    `Such a life-changing experience. Highly recommended!`,
    `Before joining the bootcamp, I've never written a line of code. I
    needed some structure from professionals who can help me learn
    programming step by step. I was encouraged to enroll by a former
    student of theirs who can only say wonderful things about the program.
    The entire curriculum and staff did not disappoint. They were very
    hands-on and I never had to wait long for assistance. The agile team
    project, in particular, was outstanding. It took my learning to the
    next level in a way that no tutorial could ever have. In fact, I've
    often referred to it during interviews as an example of my developent
    experience. It certainly helped me land a job as a full-stack
    developer after receiving multiple offers. 100% recommend!`,
    `./images/image-kira.jpg`
  ),
];
