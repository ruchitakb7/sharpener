
/* console.log("person1 shows ticket");
      console.log("person2 shows ticket");
const preMovie = async () => {
        const person3PromiseToShowTicketWhenWifeArrives = new Promise(
          (resolve, reject) => {
            setTimeout(() => resolve("ticket"), 3000);
          }
        );
        const getPopcorn = new Promise((resolve, reject) => {
          setTimeout(() => resolve("popcorn"), 3000);
        });

        const addButter = new Promise((resolve, reject) => {
          setTimeout(() => resolve("butter"), 3000);
        });

        const getColdDrinks = new Promise((resolve, reject) => {
          setTimeout(() => resolve("cold drinks"), 3000);
        });

        let ticket = await person3PromiseToShowTicketWhenWifeArrives;

        console.log(`got the ${ticket}`);
        console.log(`Husband:we should go in now`);
        console.log(`Wife: "i am hungry"`);

        let popcorn = await getPopcorn;
        console.log(`Husband: here is ${popcorn}`);
        console.log(`Husband:we should go in now`);
        console.log(`Wife: "I dont like popcorn without butter!"`);

        let butter = await addButter;
        console.log(`added ${butter}`);

        let drink = await getColdDrinks;
        console.log(`added ${drink}`);

        console.log(`Husband:Anything else darling`);
        console.log(`Wife: lets go we are going to miss the preivew`);
        console.log(`Husband: thanks for the reminder grin`);

        return ticket;
      }; */



 console.log("person1 shows ticket");
      console.log("person2 shows ticket");
      const preMovie = async () => {
        const person3PromiseToShowTicketWhenWifeArrives = new Promise(
          (resolve, reject) => {
            setTimeout(() => resolve("ticket"), 3000);
          }
        );
        const getPopcorn = new Promise((resolve, reject) => {
          setTimeout(() => resolve("popcorn"), 3000);
        });

        const addButter = new Promise((resolve, reject) => {
          setTimeout(() => resolve("butter"), 3000);
        });

        const getColdDrinks = new Promise((resolve, reject) => {
          setTimeout(() => resolve("cold-drinks"), 3000);
        });

          
       let ticket = await person3PromiseToShowTicketWhenWifeArrives;
       let[popcorn,butter,drink] =await Promise.all([ getPopcorn,addButter,getColdDrinks])
       console.log(popcorn,butter,drink);
       
        return ticket;
      };


const array = [];
    
      function createpost(post1) {
        return new Promise(async (resolve, reject) => {
          array.push(post1);
         
          resolve(post1);
        });
      }

      function showpost() {
    
        array.forEach((element) => {
          console.log(element);
        });
      }

      function deleteBlog() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (array.length > 0) {
              const last = array.pop();
              resolve(last);
            } else {
              reject("ERROR");
            }
          }, 1000);
        });
      }

      async function output() {
        try {
          await Promise.all([
            createpost("post1"),
            createpost("post2"),
            showpost(),
          ]);
         await deleteBlog(); 
          await showpost();
          await deleteBlog(); 
            await deleteBlog(); 
           await showpost();
        } catch (err) {
          console.log(err);
        }
      }

      output();


      preMovie().then((t) => console.log(`person4 shows ${t}`));

      console.log("person4 shows ticket");
   
