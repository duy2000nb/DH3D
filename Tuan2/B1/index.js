//Lấy phần tử canvas
// thiết lập dựng hình ngữ cảnh webGL (3D)
// Thiết lập màu nền cho canvas
//Điểm ảnh (góc trên bên phải), 
//điểm ảnh màu tía, nền màu xanh dương
var VSHADER_SOURCE = 
	'attribute vec4 a_Position;\n'+
  	'attribute float a_PointSize;\n'+
	'void main() {\n' +
  	'  	gl_Position = a_Position;\n' +
  	'  	gl_PointSize = a_PointSize;\n' + 
	'}\n';
var FSHADER_SOURCE =
  	'precision mediump float;\n' +
  	'uniform vec4 u_Color;\n' +
  	'void main() {\n' +
  	'  	gl_FragColor = u_Color;\n' +
  	'}\n';

function main(){
	var canvas = document.getElementById ('webgl');
	var gl = getWebGLContext(canvas);
	initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE);

	var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
	gl.vertexAttrib3f(a_Position, -0.97, -0.97, 0.0);

	var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
	gl.vertexAttrib1f(a_PointSize, 20.0);

	var u_Color = gl.getUniformLocation(gl.program, 'u_Color');
	gl.uniform4f(u_Color, 1.0, 1.0, 0.0, 1.0);

	canvas.onmousedown = ev => { click(ev, gl, canvas, a_Position); }

	gl.clearColor(0.0, 0.0, 1.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	//draw
	gl.drawArrays(gl.POINTS, 0, 1);
}

function click(ev, gl, canvas, a_Position){
	var x = ev.clientX,
	y = ev.clientY;
	console.log(x, " ", y);
}