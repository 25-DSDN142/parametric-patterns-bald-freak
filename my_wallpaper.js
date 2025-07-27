//your parameter variables go here!
let centre_diameter = 50
let centre_coord = 100

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
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

  //petals
  stroke(69, 15, 46)//purple
  fill(110, 29, 49)//red
  //triangle(160, 150, 170, 140, 180, 150)
  ellipse(centre_coord, centre_coord, centre_diameter + 120, centre_diameter - 10)
  ellipse(centre_coord, centre_coord, centre_diameter - 10, centre_diameter + 120)
  //centre
  fill(168, 133, 99)//brown
  stroke(135, 76, 36)//dark brown
  strokeWeight(2)
  ellipse(centre_coord, centre_coord, centre_diameter + 20, centre_diameter + 20)
  strokeWeight(14)
  stroke(209, 158, 40)//orange
  fill(240, 234, 125)//yellow
  ellipse(centre_coord, centre_coord, centre_diameter, centre_diameter)
}

