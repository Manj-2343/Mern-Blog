import { Button } from "flowbite-react";

const CallToActions = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a 
            href="https://github.com/Manj-2343"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg"
          >
            MERN Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://threejs-journey.com/assets/lessons/27/000.png" />
      </div>
    </div>
  );
};

export default CallToActions;
