const typingText = document.querySelector(".typings");
const cursorspan = document.querySelector(".cursor");

const typedArray = [ "Web Designer" , "Web Developer" , "Coder" , "Programmer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let typedArrayIndex = 0;
let charIndex = 0;

function type()
{
	if(charIndex < typedArray[typedArrayIndex].length)
	{
        if(!cursorspan.classList.contains("typing"))
        	cursorspan.classList.add("typing");
		typingText.textContent += typedArray[typedArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	}

	else
	{
		cursorspan.classList.remove("typing");
		setTimeout(erase, newTextDelay);
	}
}

function erase()
{
	if(charIndex > 0)
	{
		if(!cursorspan.classList.contains("typing"))
        	cursorspan.classList.add("typing");
	  typingText.textContent = typedArray[typedArrayIndex].substring(0,charIndex-1);
	  charIndex--;
	  setTimeout(erase, erasingDelay);
	}

	else
	{
		cursorspan.classList.remove("typed");
		typedArrayIndex++;
		if (typedArrayIndex >= typedArray.length) 
			typedArrayIndex=0;
			setTimeout(type, typingDelay + 1100);
		
	}
}

document.addEventListener("DOMContentLoaded", function()
{
	if(typedArray.length)setTimeout(type, newTextDelay + 250);
});

/*=========Aside===========*/
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length,
  TotalNavList = navList.length;

  for(let i=0; i<TotalNavList; i++)
  {
  	const a = navList[i].querySelector("a");
  	a.addEventListener("click", function()
  	{
  		for(let i=0 ; i<totalSection; i++)
  	     {
  		allSection[i].classList.remove("back-section");
         }

  		for(let j=0; j<TotalNavList;j++)
  		{

  			if(navList[j].querySelector("a").classList.contains("active"))
  			{
  				allSection[j].classList.add("back-section");
  			}
  			navList[j].querySelector("a").classList.remove("active");
  		}
  		this.classList.add("active")
  		showSection(this);
  	})
  }

  function showSection(element)
  {
  	for(let i=0 ; i<totalSection; i++)
  	{
  		allSection[i].classList.remove("active");
  	}
  	const target = element.getAttribute("href").split("#")[1];
  	document.querySelector("#" + target).classList.add("active");

  }

  const navToggler = document.querySelector(".nav-toggler"),
     aside = document.querySelector(".aside");
     navToggler.addEventListener("click", ()=>
     {
     	asideSectionToggler();
     })

     function asideSectionToggler()
     {
     	aside.classList.toggle("open");
     }
