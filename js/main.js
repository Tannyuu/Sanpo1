window.onload=function(){
    const path="images/";
    const images=["adachi1.jpg",
                  "adachi2.jpg",
                  "adachi3.jpg",
                  "adachi4.jpg",
                  "adachi5.jpg",
                  "adachi6.jpg",
                  "adachi7.jpg",
                  "adachi8.jpg",
                  "adachi9.jpg",
                  "adachi10.jpg",
                  "adachi11.jpg",
                  "adachi12.jpg",
                  "adachi13.jpg",
                  "adachi14.jpg",
                  "adachi15.jpg",];
    let index=0;
    const ele=document.getElementById("mainImage");
    ele.addEventListener("click",function(){
      this.src=path+images[++index % images.length];
    });
    window.onload=function(){
    const images2=["adachi1a.jpg",
                   "adachi2a.jpg",
                   "adachi3a.jpg",
                   "adachi4a.jpg",
                   "adachi5a.jpg",
                   "adachi6a.jpg",
                   "adachi7a.jpg",
                   "adachi8a.jpg",
                   "adachi9a.jpg",
                   "adachi10a.jpg",
                   "adachi11a.jpg",
                   "adachi12a.jpg",
                   "adachi13a.jpg",
                   "adachi14a.jpg",
                   "adachi15a.jpg",];

                   let index=0;
                   const ele=document.getElementById("mainImage");
                   ele.addEventListener("click",function(){
                     this.src=path+images[++index % images.length];
                   });

    }
  };