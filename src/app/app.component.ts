import { Component } from '@angular/core';
import { Post } from './shared/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    {title: `Leela\'s gonna kill me`,
    content: `Why, those are the Grunka-Lunkas! They work here in the Slurm factory. For example, if you killed your grandfather, you'd cease to exist! You mean while I'm sleeping in it? If rubbin' frozen dirt in your crotch is wrong, hey I don't wanna be right.
     1- Do a flip!
     2- Bender, hurry! This fuel's expensive! Also, we're dying!
     3- Hey, guess what you're accessories to.`,
    loveIts : 1,
    created_at: new Date() },
     {
      title: 'And I\'m his friend Jesus.',
      content: `In our darkest hour, we can stand erect, with proud upthrust bosoms. I'll get my kit! It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels.
                  Or a guy who burns down a bar for the insurance money! Hey, tell me something. You've got all this money. How come you always dress like you're doing your laundry? And when we woke up, we had these bodies.`,
      loveIts: 3,
      created_at: new Date()
     },
     {
      title: 'Bender?! You stole the atom.',
      content: `Bender, this is Fry's decision… and he made it wrong. So it's time for us to interfere in his life. Kids have names? Kids don't turn rotten just from watching TV. I'll get my kit!
      Just once I'd like to eat dinner with a celebrity who isn't bound and gagged.
      I videotape every customer that comes in here, so that I may blackmail them later.
      I found what I need. And it's not friends, it's things.`,
      loveIts: 0,
      created_at: new Date()
     }
  ];

}
