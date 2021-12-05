var names = ["Dr.Jaya Gupta(mom)","Dr.Alok Kumar(dad)","Sarthak Kumar(me)"];
var images= ["https://i.pinimg.com/550x/79/b8/94/79b894c9364b20a7416e561bef15d9a2.jpg","https://image.shutterstock.com/image-vector/kids-parent-on-first-day-260nw-1503378410.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pt6ZkPk17XjL2s2P020vqM9yDW-RYVPt4A&usqp=CAU"]
var i = 0
function update()
{
  document.getElementById("family_member_image").src = images[i];
  document.getElementById("family_member_name").innerHTML = names[i];
  i++;

}
{
    document.getElementById("family_member_image").innerHTML = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

}
