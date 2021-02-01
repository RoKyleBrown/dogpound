# Dogpound

Dogpound is a front end application that fetches dog data to create a user experience that features infinite scroll and filtering by breed. React and Redux were leveraged to create a single page application that is mobile friendly. The app is scalable and able to work with more dog breeds and data. The user interface features a lively color palette and a seamless user flow -- featuring animation and a social media style layout. Users are able to share photos of their favorite dogs via email. I'm excited to continue to add more features and look for improvements in user experience.

![alt text](https://dogpound.s3-us-west-1.amazonaws.com/Screen+Shot+2021-02-01+at+4.12.52+PM.png "ScreenShot")

```javascript
  const loadPage = () => {
        let picLoaded = false;
        if (props.dogs !== undefined){
            props.dogs.forEach( (dog) =>{
                let dogUrl = dog.split("\/");
                let dogFile = dogUrl[dogUrl.length-1];
                let breed = dogUrl[dogUrl.length-2];
                if (!dogPics[dogFile]){
                    dogPics[dogFile] = [breed, dog];
                    picLoaded = true;
                }
            })

            let loadedPics = Object.values(dogPics);
            let totalPics = Object.values(allPics);
            let app = document.getElementById("app");
            let stillLoading = loadedPics.length !== totalPics.length;


            if (app.offsetHeight <= window.outerHeight && stillLoading) {
                props.fetchSomeDogs();
            }
            if (!picLoaded && (stillLoading)) {
                props.fetchSomeDogs();
            } 
        }
    };    
    ```
    
    ### Dealing with objects keeping track of data allowed screen for duplicates and keep track of breeds.
