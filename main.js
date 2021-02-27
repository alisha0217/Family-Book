var reasons= ["Dad",
              "Mom",
              "Brother",
              "Sister",
              "Dog"];

var Images= ["https://thumbs.dreamstime.com/b/man-standing-landscape-avatar-character-vector-illustration-desing-man-standing-landscape-avatar-character-144127084.jpg",
            "https://thumbs.dreamstime.com/b/woman-watering-flower-pot-idea-gardening-woman-watering-flower-pot-idea-gardening-hobby-female-character-159249715.jpg",
            "https://thumbs.dreamstime.com/b/smiling-boy-overalls-taking-selfie-photo-cute-child-character-photographing-himself-smartphone-cartoon-vector-smiling-boy-185454451.jpg",
            "https://media.istockphoto.com/vectors/woman-with-laptop-sitting-in-nature-and-leaves-concept-illustration-vector-id1158199120?k=6&m=1158199120&s=170667a&w=0&h=pHEdaOrm1P6L9KF5dPx-Xi52a9O1-EwLnrtgma5XzWM=",
            "https://cdn.datta.store/auxapi/files/image/border-collie-dog-flat-cartoon.jpg"];

var i= 0;
function nextPage(){
document.getElementById("Message").innerHTML= reasons[i];

document.getElementById("Image1").src= Images[i];

i++;


if(i == 5)
{
i= 0;
}

}
