//your parameter variables go here!
let centre_diameter = 30
let centre_x = 100
let centre_y = 100
let stem_width = 8
let leaf_size = 100

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(235, 233, 204); //beige colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //stem
  if(centre_diameter <= 40){
    noFill();
    stroke(64, 97, 77);//dark green
    strokeWeight(stem_width);
    curve(10,150,100,200,centre_x, centre_y,500,125);
    if(stem_width >= 8){
      stroke(64, 97, 77)
      strokeWeight(1)
      fill(93, 179, 127)//light green
      ellipse(centre_x + 20, centre_y + 20,50,30)
      ellipse(centre_x - 20, centre_y + 20,50,30)
    }
  }
  //leaves
  stroke(64, 97, 77)
  strokeWeight(2)
  fill(93, 179, 127)
  beginShape()
  vertex(130, 70)
  vertex(160, 70)
  vertex(190, 60)
  vertex(160, 50)
  vertex(130, 70)
  vertex(141, 43)
  vertex(170, 20)
  vertex(160, 50)
  endShape(CLOSE)
  beginShape()
  vertex(70, 130)
  vertex(70, 160)
  vertex(60, 190)
  vertex(50, 160)
  vertex(70, 130)
  vertex(43, 141)
  vertex(20, 170)
  vertex(50, 160)
  endShape(CLOSE)
  beginShape()
  vertex(70, 70)
  vertex(40, 70)
  vertex(10, 60)
  vertex(40, 50)
  vertex(70, 70)
  vertex(59, 43)
  vertex(30, 20)
  vertex(40, 50)
  endShape(CLOSE)
  beginShape()
  vertex(130, 130)
  vertex(130, 160)
  vertex(140, 190)
  vertex(150, 160)
  vertex(130, 130)
  vertex(157, 141)
  vertex(180, 170)
  vertex(150, 160)
  endShape(CLOSE)
  //petals
  strokeWeight(1)
  stroke(69, 15, 46)//purple
  fill(110, 29, 49)//red
  triangle(centre_x, centre_y + (centre_diameter / 2), centre_x, centre_y - (centre_diameter * 0.6), centre_x + centre_diameter, centre_y + (centre_diameter * 0.9))
  triangle(centre_x, centre_y + (centre_diameter / 2), centre_x, centre_y - (centre_diameter * 0.6), centre_x - centre_diameter, centre_y + (centre_diameter * 0.9))
  triangle(centre_x, centre_y + (centre_diameter / 2), centre_x, centre_y - (centre_diameter * 0.6), centre_x - centre_diameter, centre_y - (centre_diameter * 0.9))
  triangle(centre_x, centre_y + (centre_diameter / 2), centre_x, centre_y - (centre_diameter * 0.6), centre_x + centre_diameter, centre_y - (centre_diameter * 0.9))
  ellipse(centre_x, centre_y, centre_diameter * 3.4, centre_diameter * 0.8)
  ellipse(centre_x, centre_y, centre_diameter * 0.8, centre_diameter * 3.4)
  //flower veins
  strokeWeight(3)
  stroke(49, 44, 71)
  line(centre_x + centre_diameter, centre_y, centre_x - centre_diameter, centre_y)
  line(centre_x, centre_y + centre_diameter, centre_x, centre_y - centre_diameter)
  //centre
  fill(168, 133, 99)//brown
  stroke(135, 76, 36)//dark brown
  strokeWeight(centre_diameter * 0.04)
  ellipse(centre_x, centre_y, centre_diameter * 1.4, centre_diameter * 1.4)
  strokeWeight(centre_diameter * 0.28)
  stroke(209, 158, 40)//orange
  fill(240, 234, 125)//yellow
  ellipse(centre_x, centre_y, centre_diameter, centre_diameter)
}

