// Contains project data. Projects without a thumbnail will not be displayed on the main page.
// This file is loaded in both index.js and project-detail.js.

export var projects = [
    { // TopDogEngine
        title: "TopDogEngine",
        year: 2025,
        summary: "A single-file 3D game prototyping framework.",
        fullDescription: `
        <h3>Introduction</h3>
        <p>
        TopDogEngine is a single-file 3D game prototyping framework that I developed as part of my thesis project at Malmö University.
        The goal of the project was to create a framework that would allow for rapid prototyping of 3D games in C++.
        </p>

        <h3>Result</h3>
        <p>
        Will add the results when I have the time.
        </p>

        <h3>Process</h3>
        <p>
        Will add the  process when I have the time.
        </p>
        `,
        //staticThumbnail: [],
        teamSize: 2,
        language: ["C++", "Vulkan"]
    },
    { // Swing and a Miss
        title: "Swing and a Miss",
        year: 2025,
        summary: "A rage inducing physics platformer.",
        fullDescription: `
        <h3>Introduction</h3>
        <p>
        Swing and a Miss was my submission to Game Lab Jam: VT 25 and it turned out to be the overall winner of the jam!
        It was developed in 48 hours, but I spent some time polishing it after the jam ended. It's still a work in progress,
        but I am very proud of the result and I'm planning on working it into a state where it can be released on Steam.
        </p>

        <h3>Result</h3>
        <p> You can play the latest version of the game on itch.io. </p>

        <iframe frameborder="0"
            src="https://itch.io/embed/3433802?linkback=true&amp;bg_color=e4d3aa&amp;fg_color=001c41&amp;link_color=1b5db3&amp;border_color=5e789a;b_radius=20;"
            width="552"
            height="167"
            style="border-radius:6px"
            ></iframe>

        <h3>Process</h3>
        <p>
        Will add more details about the process of making this game when I have the time.
        </p>
        `,
        staticThumbnail: "Assets/Images/swingandamiss.png",
        teamSize: 1,
        language: ["C#", "Unity"]
    },
    { // Salamanoid
        title: "Project Salamanoid",
        year: 2025,
        summary: "A story-based action-horror first person shooter.",
        fullDescription: `
        <h2>Introduction</h2>
        <p>
        Developed as part of the 'Game-engine driven product development' course a Malmö University. The goal was to create an action-horror First Person Shooter that is strongly story-driven with a great emphasis on narrative. It includes problem-solving elements needed for progress, pickups,  and weapons. The pacing is varied throughout the game with intermittent action in conjunction with slow exploration segments.
        </p>
        <p>
        The story follows a special operative sent to a research facility in lockdown after experiments to give humans salamander-like limb regeneration went wrong, creating hostile human-salamander hybrids, salamanoids. The player meets two surviving scientists, who help them navigate the facility, disable security systems, and eventually collect samples for an antidote.
        </p>
        <h2>Game Trailer</h2><p></p>
        <p style="text-align:center">
        <iframe
        style="position: relative; transform-origin: center; width : 100%; height: 100%; aspect-ratio: 16/9;"
        src="https://www.youtube.com/embed/crFln0IcfTU?si=ptngu7dX7lyZk8D1"
        frameborder="0"
        allowfullscreen
        ></iframe>
        </p>

        <h2>Process</h2>

        <h3>Player Movement</h3>
        <p>
        The player movement was my biggest task in this project. Although it is not very different from what you would expect from a First Person Shooter, I felt that it was important that the movement feels natural and reponsive. This meant I needed to have a lot of control over the movement, so I decided to implement a custom character controller instead of using the built-in Unity Rigidbody, which is what I had used previously.
        </p>
        <p>
        My first approach was to manually handle all collision and response with my own implementation of the collide-and-slide algorithm. It works like this:
        <ol>
            <li>Cast a ray* in the direction of the movement to check if there is a collider in the way.</li>
            <li>If there is no collision, move the player in the direction of the movement.</li>
            <li>If there is a collision, project the movement along the plane of the collision using the normals. This is our new movement vector.</li>
            <li>Repeat the process until there is no collision or we have reached a maximum recursion depth.</li>
        </ol>
        <i>*In this case, I did a capsule cast instead of a ray cast, as this is a more accurate representation of the player.</i>
        </p>
        <img src="Assets/Images/ProjectSalamanoid/collideandslide.png"
        style="position: relative; transform-origin: center;" width=100%/>
        <p>
        This was fun to implement and I learned a lot from it, but while working on it I realized that it had a couple of drawbacks. I had mostly tested the movement in simple environments with right angles and flat surfaces, but when we started testing it in the actual game environment, I quickly realized that it was not very robust. The player was able to phase through walls in certain nieche cases, such as when walking into a slanted ceiling. The team needed help on other parts of the game, so I decided to scrap my implementation and use the built-in Unity CharacterController instead. This was a good decision, as it allowed me to focus on other parts of the game and I was able to get the movement working very quickly. It was good enough and I was able to add a lot of features on top of it to make it feel more natural.
        </p>

        <p>
        The controller emulates acceleration and drag forces to make the movement less rigid. I also made sure to add collision layers so that the player does not collide with details and decorations in the environment, which could make the player get stuck and ruin the flow of the game.
        </p>

        <h4>Sprinting</h4>
        <p>
        Holding the sprint button sets the max speed to a set sprint speed. The player can only sprint forwards or diagonally forwards compared to the direction as they are facing. Sprinting consumes stamina, and cannot be performed when stamina is too low. The player cannot sprint while jumping, crouching or aiming down sights.
        </p>

        <h4>Crouching</h4>
        <p>
        Holding the crouch button lowers the height of the player and therefore the camera as well. It is useful for getting in tight spaces but reduces the max speed to a set crouch speed. When letting go of the crouch button the height will go back to normal unless there is something in the way. In that case, the player will uncrouch as much as possible and will keep trying until the player crouches again or moves to an area where it can successfully uncrouch.
        </p>

        <h4>Jumping</h4>
        <p>
        Pressing the jump button instantly applies positive vertical velocity. The player is unable to jump while crouching or aiming down sights.
        </p>

        <h4>Climbing</h4>
        <p>
        Climbing is a similar but separated movement mechanic from the rest. The player can enter a salamander-like climbing state by drinking a Salamander Vial. When the player is in the climbing state it snaps to a wall when colliding (and facing towards the wall), changing the up direction of the player. The player can essentially travel along any wall as long as there is enough space. The player stays in the climbing state until another Salamander Vial is consumed, which makes the player go back to its normal movement state.
        </p>
        <p>
        I implemented this by using a separate character controller for the climbing state. The climbing controller uses a similar approach to the collide-and-slide algorithm, but instead of projecting the movement along the plane of the collision, it snaps the player to the wall and sets the up direction to the normal of the wall.
        </p>

        <h3>Music Manager</h3>
        <p>
        Some parts of the game have background music and the intensity of the music varies in different parts of the game. This is possible because the music is divided into layers that can be added or removed on demand to change the mood. Entering a new area will potentially activate or deactivate some music layer which will change the perceived intensity for the player.
        </p>
        <p>
        To achieve this, I created Music Nodes that could be placed in the level, and if they fulfilled the right requirement they would be activated and tell the music manager to play certain looped tracks. Some Music Node types were "distance from player", "player is in area, or" "player and enemy is in area". This turned out to be an okay system to work with but if I had more time I would have liked to make it less focused on looping all music and having more of an event based system which a designer could tailor to their own needs rather than using these simple rules.
        </p>

        <h3>Interactable Objects</h3>
        <p>
        The game has a lot of interactable objects, such as doors, drawers and cabinets. I created a system that allows designers to easily add door and drawer objects to the game. The system uses a simple interface that allows designers to specify how the object should move when interacted with and what sound should be played. I'm very hapy with how this turned out, as it allows designers to easily add interactivity to imported models as long as they are split into the right parts.
        </p>

        <h3>Cheats</h3>
        <p>
        During the production phase, we had to do a lot of internal play-testing. It was very time consuming however, when we wanted to test mechanics that were only present in the later parts of the game since we would have to replay the entire game up to that point to reach them. Therefore, I created a script that allowed us to teleport to the elevators on each level. It also allowed us to enter a noclip mode and a god mode. This proved very useful and saved us a great deal of time.
        </p>
        `,
        staticThumbnail: "Assets/Images/projectsalamanoid.png",
        teamSize: 9,
        language: ["C#", "Unity"]
    },
    { // WFC RTS
        title: "WFC RTS",
        year: "2024",
        summary: "A Wave Function Collapse RTS level generator.",
        fullDescription: `
        <h3>Introduction</h3>
        <p>
        Will add an introduction when I have the time.
        </p>

        <h3>Result</h3>
        <p>
        Will add more details about the results when I have the time.
        </p>

        <h3>Process</h3>
        <p>
        Will add more details about the process when I have the time.
        </p>
        `,
        //staticThumbnail: "Assets/Images/RTSWFC/image8.png",
        teamSize: 4,
        language: ["C#", "Unity"]
    },
    { // Heat Delirium
        title: "Heat Delirium",
        year: "2024",
        summary: "A first person shooter with a summer theme.",
        fullDescription: `
        <h3>Introduction</h3>
        <p>
        Heat Delirium was developed in 48 hours for the Game Lab Jam: VT 24.
        </p>

        <h3>Result</h3>
        <p>
        You can play this game on itch.io.
        </p>

        <iframe frameborder="0"
        src="https://itch.io/embed/2746817?bg_color=f7db41&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=c5b153"
        width="552"
        height="167"
        ></iframe>

        <h3>Process</h3>
        <p>
        Will add more details about the process when I have the time.
        </p>
        `,
        staticThumbnail: "Assets/Images/heatdelirium.png",
        teamSize: 3,
        language: ["C#", "Unity"]
    },
    { // Make TNT Great Again
        title: "Make TNT Great Again",
        year: "2024",
        summary: "A chaotic package delivery game.",
        fullDescription: `
        <h3>Introduction</h3>
        <p>
        Developed as part of the 'Applied Software Architecture' course a Malmö University.
        </p>

        <h3>Result</h3>
        <p>
        Will add the results when I have the time.
        </p>

        <h3>Process</h3>
        <p>
        Will add the  process when I have the time.
        </p>
        `,
        staticThumbnail: "Assets/Images/maketntgreatagain.png",
        teamSize: 6,
        language: ["C#", "Unity"]
    },
    { // Untitled Physics Game
        title: "Untitled Physics Game",
        year: "2024",
        summary: "A physics based car game.",
        fullDescription: `
        <h3>Introduction</h3>
        <p>
        Will add an introduction when I have the time.
        </p>

        <h3>Result</h3>
        <p>
        Will add more details about the results when I have the time.
        </p>

        <h3>Process</h3>
        <p>
        Will add more details about the process when I have the time.
        </p>
        `,
        //staticThumbnail: "Assets/Images/untitledphysicsgame.png",
        teamSize: 1,
        language: ["C#", "Unity"]
    },
    { // 2D Physics Engine
        title: "2D Physics Engine",
        year: "2024",
        summary: "A simple custom 2D physics engine in Unity.",
        fullDescription: `
        <h3>Introduction</h3>
        <p>
        Developed as part of the 'Physics for Digital Games' course a Malmö University.
        </p>

        <h3>Result</h3>
        <p>
        Will add more details about the results when I have the time.
        </p>

        <h3>Process</h3>
        <p>
        Will add more details about the process when I have the time.
        </p>
        `,
        staticThumbnail: "Assets/Images/2dphysicsengine.png",
        teamSize: 1,
        language: ["C#", "Unity"]
    },
    { // eduRend
        title: "eduRend",
        year: "2024",
        summary: "A DirectX11 3D rendering framework.",
        fullDescription: `
        <h3>Introduction</h3>
        <p>
        Developed as part of the 'Computer graphics and modeling' course at Malmö University.
        The goal of the assignment was to extend the a base framework provided by our teacher to add
        rendering capabilities and using methods such as Phong shading and cube mapped reflections to achieve better
        looking graphics.
        </p>

        <h3>Result</h3>
        <p>
        Will add more details about the results when I have the time.
        </p>

        <h3>Process</h3>
        <p>
        Will add more details about the process when I have the time.
        </p>
        `,
        staticThumbnail: "Assets/Images/edurend.png",
        teamSize: 1,
        language: ["C++", "HLSL", "DirectX11"]
    },
    { // Top Goose
        title: "Top Goose",
        year: "2023",
        summary: "A silly flight simulator and shooter game.",
        fullDescription: `
        <h3>Introduction</h3>
        <p>
        Developed as part of the 'System Development and Project I' course a Malmö University.
        This was my first project in Unity and I had a lot of fun making it.
        </p>

        <h3>Result</h3>
        <p>
        
        </p>

        <iframe width="720"
        height="405"
        src="https://www.youtube.com/embed/WYVJrY2zlsw?si=xcM--pNSDGH8ZpMH"
        frameborder="0"
        allowfullscreen
        ></iframe>

        <h3>Process</h3>
        <p>
        Will add more details about the process when I have the time.
        </p>
        `,
        staticThumbnail: "Assets/Images/topgoose.png",
        teamSize: 4,
        language: ["C#", "Unity"]
    },
];