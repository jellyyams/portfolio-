As a research assistant in the [Mobile X lab](https://mobilex.cs.columbia.edu) at Columbia University, I worked under Dr. Xia Zhou and PhD candidate Hadleigh Schwartz to assist with a novel Deepfake detection tool. 

The rapid advancement of generative AI has made it increasingly difficult to judge the authenticity of videos and images shared online. With the widespread adoption of generative AI, bad actors can easily disrupt democratic processes and spread misinformation with fake content that’s indistinguishable from authentic media.  

To prevent the spread of AI generated or doctored videos, this tool “watermarks” a scene in real time with a spatially and temporally modulated light that’s imperceptible to the human eye. The proposed system uses a camera to observe a scene, such as a high profile speech, and extracts information about the speaker’s facial movements, expressions, and identity. The proposed system then encrypts this data into the modulated light and instantaneously projects it back onto the scene, so any cameras recording the event will pick up the encrypted light . Recordings of the same event can then be fed through the second part of our system, which decrypts the modulated light and verifies whether its information matches the information presented in the scene. Any attempt at modifying the speaker’s speech or facial characteristics with AI will be revealed if the encrypted light signal doesn’t match the contents of the scene. 

<div style="text-align:center">
    <img alt="diagram of deepfake detection system" src="././images/deepfake1.png" />
</div>

This project uses Google’s Mediapipe facial landmark extraction tool to track 478 distinct landmarks on a person’s face across video frames. Relying on the Matplotlib, Numpy, and Pandas libraries, I built a python landmark testing and analysis pipeline that was used to optimize the facial landmark tracking feature. Our goal was to pick landmarks and metrics that were consistent across different videos taken of the same scene, but could differentiate between minor speech and facial expression inconsistencies. By the end of the summer, I completed a modular python tool that the principal student on the project could use to continue optimizing the landmark selection and signal processing pipeline. 


<div style="text-align:center">
    <img alt="diagram of deepfake detection system" src="././images/deepfake2.png" />
</div>

This project was supported by the Amazon Summer Undergraduate Research Experience (SURE) fellowship program. My project’s abstract can be found on the [SURE 2023 cohort page](https://www.engineering.columbia.edu/news/columbia-amazon-summer-undergraduate-research-experience-program/2023-sure-fellows). In 2024, Hadleigh Schwartz completed the project and submitted a paper to the Computer and Communications Security Conference, which is currently under review.