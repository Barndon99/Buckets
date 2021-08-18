# BucketUp

BucketUp is an LHL final project that makes budgeting a breeze. Our objective with this project was to make a budgeting application that makes it fast and intuitive to set up a budget for experienced budgeters, but also easy to get up and running for users who might be newer to the craft. 

   Using the latest front-end frameworks, and a robust express backend we've automated the boring stuff while still leaving room for the user to create a fully customized budget!

![login page](https://github.com/CaseyQWood/Buckets/blob/master/client/docs/login-facemesh.gif)

## Key Takeaways
**[React](https://reactjs.org/)** - This project was our first full-stack application built using React and Express. Getting used to managing state, and the built-in prop system React uses was a hurdle at first. A few days in, we started using Material-UI we were blown away by how fast we could proto-type and add new functionality, after that we started flying.

**ThreeJS** - Was a library we were incredibly excited to use, integrating and setting up the various Canvas elements was difficult at the beginning, and managing render times wasn't always easy, but we loved the dimension this library added to our app!

![coins falling in a bucket](https://github.com/CaseyQWood/Buckets/blob/master/client/docs/bucket-animation-budget.gif)

**Managing Data** - Over the course of the project we spent a lot of time working on ERD's and deciding how we could query and display useful data. It took a few refactors, but we learned an important lesson about trying to do two things at once. By separating concerns, and being cautious with how we mutated data the backend did come together.

## Installation

To run the application locally fork, and clone the repository:

```bash
git clone <SSH_Key> bucketUp
```
CD into the client folder:
```bash
cd bucketUp/client
```
Install required packages, from within the client folder run:
```bash
npm install
```
Repeat this process for the server folder:
```bash
cd ../server
npm install
```

That's it! Once you've run these commands you can run the application!

## Usage

To start the application run:
```bash
npm start
```
in the client and server folders respectively, you can then navigate to localhost:3000 to view the app.

## Features (images for each)
**[Chat](https://socket.io/)** - Implemented using socket.io. 

![live chat](https://github.com/CaseyQWood/Buckets/blob/master/client/docs/live-chat.gif) 

**[3D Elements](https://threejs.org/)** - Implemented using ThreeJS.  

**[Analytics](https://www.chartjs.org/)** - Charts are styled with CSS, generated with ChartJS.

![analytics](https://github.com/CaseyQWood/Buckets/blob/master/client/docs/Screen%20Shot%202021-08-15%20at%209.48.57%20PM.png)

**[Biometric Login](https://www.tensorflow.org/)** - Implemented using Tensorflow. Although a good first taste of machine learning, the face-scan is currently just for show as we didn't have time to train the model.

## Contributors
[Casey Wood](http://github.com/CaseyQWood)   
[Mingfeng Li](http://github.com/MingfengLi0122)   
[Brandon Rowlandson](http://github.com/Barndon99)

## License
[MIT](https://choosealicense.com/licenses/mit/) 
