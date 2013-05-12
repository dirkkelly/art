function makeVector(x,y) {
  return new Two.Vector(x,y);
}

function makeBody(two) {
  var bodyTopLeft = new Two.Vector(5,5),
      bodyBottomLeft = new Two.Vector(5,595),
      bodyBottomRight = new Two.Vector(445,595),
      bodyTopRight = new Two.Vector(445,5)
      body = two.makePolygon([bodyTopLeft,bodyBottomLeft,bodyBottomRight,bodyTopRight], false);

  body.fill = "#336699";
  body.stroke = "#111111";
  body.linewidth = 4;

  return body;
}

function makeFace(two) {
  var x = 30,
      y = 30,
      xz = 390,
      yz = 220,
      points = [];

  points.push(makeVector(x, y));
  points.push(makeVector(x + xz, y));
  points.push(makeVector(x + xz, y + yz));
  points.push(makeVector(x, y + yz));
  points.push(makeVector(x, y));

  var face = two.makePolygon(points);
  face.fill = "#cbd5ef";
  face.linewidth = 4;

  return face;
}

function makeLeftEye(two) {
  var x = 120,
      y = 125,
      z = 12;

  var leftEye = two.makeCircle(x, y, z);
  leftEye.fill = "#111111";

  return leftEye;
}

function makeRightEye(two) {
  var x = 330,
      y = 125,
      z = 12;

  var rightEye = two.makeCircle(x, y, z);
  rightEye.fill = "#111111";

  return rightEye;
}

function makeMouthTop(two) {
  var x = 180,
      y = 190,
      xz = 80,
      yz = 10,
      points = [];

  points.push(makeVector(x, y))
  points.push(makeVector(x + xz, y))

  var mouthTop = two.makePolygon(points);
  mouthTop.linewidth = 8;

  return mouthTop;
}

function makeMouthBottom(two) {
  var x = 180,
      y = 190,
      xz = 80,
      yz = 15,
      points = [];

  points.push(makeVector(x, y));
  points.push(makeVector(x, y + yz));
  points.push(makeVector(x + xz, y + yz));
  points.push(makeVector(x + xz, y));

  var mouthBottom = two.makePolygon(points);
  mouthBottom.linewidth = 4;

  return mouthBottom;
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

  var dpad = two.makePolygon(points);
  dpad.fill = "#FFD629";
  dpad.stroke = "#111111";
  dpad.linewidth = 4;

  return dpad;
}

(function() {
  var bmo = $('#bmo').get(0),
      params = { width: 450, height: 600 },
      two = new Two(params).appendTo(bmo),
      body = makeBody(two),
      face = makeFace(two),
      leftEye = makeLeftEye(two),
      rightEye = makeRightEye(two),
      mouthTop = makeMouthTop(two),
      mouthBottom = makeMouthBottom(two),
      dpad = makeDpad(two);

  two.update();
})();
