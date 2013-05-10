function makeBody(two) {
  var bodyTopLeft = new Two.Vector(5,5),
      bodyBottomLeft = new Two.Vector(5,595),
      bodyBottomRight = new Two.Vector(445,595),
      bodyTopRight = new Two.Vector(445,5)
      body = two.makePolygon([bodyTopLeft,bodyBottomLeft,bodyBottomRight,bodyTopRight], false);

  body.fill = "#336699";
  body.stroke = "#111111";
  body.linewidth = 4;
}

function makeDpad(two) {
  var x = 80,
      y = 360,
      z = 40,
      points = []

  points.push(new Two.Vector(x, y + z))
  points.push(new Two.Vector(x, y))
  points.push(new Two.Vector(x + z, y))
  points.push(new Two.Vector(x + z, y + z))
  points.push(new Two.Vector(x + 2 * z, y + z))
  points.push(new Two.Vector(x + 2 * z, y + 2 * z))
  points.push(new Two.Vector(x + z, y + 2 * z))
  points.push(new Two.Vector(x + z, y + 3 * z))
  points.push(new Two.Vector(x, y + 3 * z))
  points.push(new Two.Vector(x, y + 2 * z))
  points.push(new Two.Vector(x - z, y + 2 * z))
  points.push(new Two.Vector(x - z, y + z))
  points.push(new Two.Vector(x, y + z))

  dpad = two.makePolygon(points, false)
  dpad.fill = "#FFD629";
  dpad.stroke = "#111111";
}

(function() {
  var bmo = $('#bmo').get(0),
      params = { width: 450, height: 600 },
      two = new Two(params).appendTo(bmo);

  makeBody(two);
  makeDpad(two);
  two.update();

})();
