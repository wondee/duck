

const picture1 = [
  "                                    ",
  "        ,----,                      ",
  "   ___.`      `,                    ",
  "   `===  D     :                    ",
  "     `'.      .'                    ",
  "        )    (                   ,  ",
  "       /      \_________________/|  ",
  "      /                          |  ",
  "     |                           ;  ",
  "     |               _____       /  ",
  "     |      \       ______7    ,'   ",
  "     |       \    ______7     /     ",
  "      \       `-,____7      ,'      ",
  "^~^~^~^`\                  /~^~^~^~^",
  "  ~^~^~^ `----------------' ~^~^~^  ",
  " ~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^   "
  ] 

const picture2 = [
    "                                    ",
    "        ,----,                      ",
    "   ___.`      `,                    ",
    "   `===  D     :                    ",
    "     `'.      .'                    ",
    "        )    (                   ,  ",
    "       /      \_________________/|  ",
    "      /                          |  ",
    "     |                           ;  ",
    "     |               _____       /  ",
    "     |      \       ______7    ,'   ",
    "     |       \    ______7     /     ",
    "      \       `-,____7      ,'      ",
    "~^~^~^~`\                  /^~^~^~^~",
    "  ^~^~^~ `----------------' ^~^~^~  ",
    " ^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~   "
    ]

const pictures = [picture1, picture2]


const START_VALUE = process.stdout.columns - 1;
const DELAY = 100;

let currentCol = START_VALUE;


function printPicture(picture, col) {
  const prefix = ' '.repeat(col);

  picture.forEach(line => {
    let overflow = START_VALUE - col;

    const out = line.substring(0, overflow)

    console.log(prefix + out)
  
  });
  
}

async function run() {

  while (true) {
    console.clear()
    printPicture(pictures[currentCol % pictures.length], currentCol);
  
    await new Promise(resolve => setTimeout(resolve, DELAY));
  
    currentCol--;
    if (currentCol < 0) {
      currentCol = START_VALUE;
    }
  }
  
}

run()
