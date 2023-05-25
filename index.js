var mydata = [];

fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
    .then(response => response.json())
    .then( data=>{

        data.forEach(item => {
            var name = item.name;
            var points = item.points;
            var avatar = item.avatar;

            mydata.push({
                name: name, 
                points: points,
                avatar: avatar
            });
        });

        console.log(mydata.length);
        mydata.sort((a,b)=>b.points - a.points );
        console.log(mydata[1].name);

        for(let i=0;i<3;i++){
            const row = mydata[i];
            const firstname = row.name.split(' ')[0];
            const score= row.points;
            const avatar=row.avatar;
            if(i==0){
                const rank1Div = document.querySelector('.toppers .rank2');
                const innerdiv= rank1Div.querySelector('.name2');
                //const circlediv= rank1div.querySelector('.circle1');
                innerdiv.innerHTML= firstname + ' <sup>.</sup> ' + score;
                //circlediv.style.backgroundImage = 'url(${avatar})';
            }else if(i==1){
                const rank1Div = document.querySelector('.toppers .rank1');
                // const circlediv= rank1div.querySelector('.circle2');
                const innerdiv= rank1Div.querySelector('.name1');
                innerdiv.innerHTML= firstname + ' <sup>.</sup> ' + score;
                // circlediv.style.backgroundImage = 'url(${avatar})';
            }else{
                const rank1Div = document.querySelector('.toppers .rank3');
                // const circlediv= rank1div.querySelector('.circle3');
                const innerdiv= rank1Div.querySelector('.name3');
                innerdiv.innerHTML= firstname + ' <sup>.</sup> ' + score;
                // circlediv.style.backgroundImage = 'url(${avatar})';
            }
            
        }

        for (let i = 3; i < mydata.length; i++) {
            const row = mydata[i];
            const firstname = row.name.split(' ')[0];
            const score= row.points;
            const otherDiv = document.querySelector('.other');
            const newOthersDiv = document.createElement('div');
            newOthersDiv.classList.add('others');
            const noDiv = document.createElement('div');
            noDiv.classList.add('no');
            noDiv.textContent = i + 1;
          
            const circleDiv = document.createElement('div');
            circleDiv.classList.add('circle');
          
            const nameDiv = document.createElement('div');
            nameDiv.classList.add('name');
            nameDiv.textContent = firstname;
          
            const scoreDiv = document.createElement('div');
            scoreDiv.classList.add('score');
            scoreDiv.textContent = score;
          
            newOthersDiv.appendChild(noDiv);
            newOthersDiv.appendChild(circleDiv);
            newOthersDiv.appendChild(nameDiv);
            newOthersDiv.appendChild(scoreDiv);
          
            
            otherDiv.appendChild(newOthersDiv);
          }
          
        
    })
    .catch(error=>{
        console.log('Error', error);
    });



    
