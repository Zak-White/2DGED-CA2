document.writeln(
  "Open the Inspect/Console pane in Chrome to see the output..."
);

runExercises();

/*  
    0. Implement (i.e. develop) principle entities as separate JS files
    1. Implement (i.e. develop) a Player (inherits from Sprite) class which contains the following fields:
        - name, position(x,y), texture(name)
        - inventory(weapons) - array
    2. Implement (i.e. develop) a Weapon (inherits from Sprite) class which contains the following fields:
        - name, texture(name)
        - clipSize (2MW)
        - damageRate (1200)
        - clipCount (10MW)
    3. Implement (i.e. develop) a Sprite class which contains the following fields:
        - name
        - texture(name)
    4. Populate the Player with 3-4 Weapons
    5. Clone a Weapon and test using Equals (w1 === w2?) Is this a deep copy?
    6. Clone a Player and test using Equals (p1 === p2)  Is this a deep copy?

    Typical class has...
        - constructor, fields, get/set, Equals(), Clone()
 */

function runExercises() {
  let w1 = new Weapon("plasma rifle", "plasma.png", 12, 25, 12);
  let w2 = new Weapon("elephant gun", "elephantgun.png", 6, 75, 0);

  let p1 = new Player("max damage", "players_spritesheet.png");
  p1.AddWeapon(w1);
  p1.AddWeapon(w2);
  p1.AddWeapon(new Weapon("sniper rifle", "sniper.png", 20, 100, 19));

  let cloneW1 = w1.Clone();
  if (cloneW1.Equals(w1))
    document.writeln(cloneW1 + " is identical to original");
  else document.writeln(cloneW1 + " is not identical to original");

  //this code proves that the Clone returns a DEEP copy
  cloneW1.name = "plasma rifle 2020";
  cloneW1.clipCount = 100000;

  let cloneP1 = p1.Clone();
  if (cloneP1.Equals(p1))
    document.writeln(cloneP1 + " is identical to original");
  else 
    document.writeln(cloneP1 + " is not identical to original");

   cloneP1.AddWeapon(new Weapon("pistol", "pistol.png", 14, 10, 7));
   p1.AddWeapon(new Weapon("slingshot", "slingshot.png", 1, 1000000, 1000000));

  if (cloneP1.Equals(p1))
    document.writeln(cloneP1 + " is identical to original");
  else 
    document.writeln(cloneP1 + " is not identical to original");
}
