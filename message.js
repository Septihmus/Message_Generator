const m1 = ['Time to','Do not','Would be great to'];
const m2 = ['go for a drink','take a nap','open the window'];
const m3 = ['because It\'s 1:32pm.','because It\'s 9:52am.','because It\'s noon.'];


const rNumber = (arr) => {
             let a = Math.floor(Math.random()* arr.length);
             return arr[a];
}



console.log(rNumber(m1),rNumber(m2),rNumber(m3));
