import $ from 'jquery';

export const waitTillLoaded = () => {
   
    let ready = document.readyState;
    if (ready === 'interactive' || ready === 'complete') {

        setTimeout(() => {
            $(".pre-gallery").addClass("gallery");
            $(".preload").addClass("preload-b")
        }, 1000);
    }
};

export const preloadVid = () => {
    return (<div className="preload">
                <div className="vid">
                    <video height="200px" width="200px"
                        src="https://dogpound.s3-us-west-1.amazonaws.com/bone.mp4"
                        autoPlay muted
                    >

                    </video>
                </div>
            </div>)
} 