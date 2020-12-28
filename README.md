**For a markdown cheat sheet see [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)**

## 2D Game Engine Development

### Further Reading
- Using the *jsconfig.json* in your project to enable Intellisense - https://code.visualstudio.com/docs/nodejs/working-with-javascript

### Code to Explain
- [x] Vector2

### Code to Refactor
- [x] Re-factor Rect to use Vector2
- [x] Re-factor Arc to use Vector2

### Tasks - Week 2 
- [x] Add Arc and Rect classes

### Tasks - Week 3
- [x] Add clone to Arc and Rect and test that it provides a deep-copy
- [ ] Add shadowColor and shadowBlur to Arc and Rect
- [x] Experiment with setInterval, setTimeout and requestAnimationFrame 
- [x] Add main.html with game loop
- [ ] Render game sprite and animate
- [ ] Add simple collision detection/collision response between window perimeter and sprite
- [ ] Add keyboard input to control sprite
- [x] Add comments to all non-trivial methods and classes
- [ ] Add score on-screen

### Tasks - Week 5
- [x] Add jsconfig.json to support Intellisense 
- [x] Add Actor2D class as parent for all drawn objects and camera
- [x] Add ObjectManager to store all drawn objects
- [x] Add ObjectManager
- [x] Add Engine/Constants

### Tasks - Week 6
- [x] Re-order SpaceInvaders.js to separate core functions and variables from game-specific
- [ ] Add SpaceInvaders/js/GameConstants.js file to store data related to enemy animations
### Tasks - Week 7
- [x] Re-factored SpriteArtist and AnimatedSpriteArtist to extend Artist
- [x] Add use of Transform2D::Scale to Draw() of SpriteArtist and AnimatedSpriteArtist

### Tasks - Week 8
- [x] Add revision and canvas examples

### Tasks - Week 9
- [x] Add Canvas 3 (drawing with Rect and detecting collisions)
- [x] Add Canvas 4 (drawing sprites and object manager)
- [x] Add Canvas 5 (keyboard manager)
- [x] Add simple Sprite class with Clone
- [x] Add simple ObjectManager to draw multiple sprites

### Tasks - Week 10
- [ ] Develop ObjectManager to use a 2D array of Sprites with ActorType
- [ ] Demo KeyboardManager and SoundManager
- [ ] Add a controller to the Sprite to move with keyboard input