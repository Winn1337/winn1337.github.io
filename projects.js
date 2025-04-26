// Contains project data. Projects without a thumbnail will not be displayed on the main page.
// This file is loaded in both index.js and project-detail.js.

export var projects = [
    { // TopDogEngine - Not included
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
        Developed as part of the <em>Game-engine driven product development</em> course a Malmö University. The goal was to create an action-horror First Person Shooter that is strongly story-driven with a great emphasis on narrative. It includes problem-solving elements needed for progress, pickups,  and weapons. The pacing is varied throughout the game with intermittent action in conjunction with slow exploration segments.
        </p>
        <p>
        The story follows a special operative sent to a research facility in lockdown after experiments to give humans salamander-like limb regeneration went wrong, creating hostile human-salamander hybrids, <em>salamanoids</em>. The player meets two surviving scientists, who help them navigate the facility, disable security systems, and eventually collect samples for an antidote.
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
        The player movement was my biggest task in this project. Although it is not very different from what you would expect from a First Person Shooter, I felt that it was important that the movement feels natural and reponsive. This meant I needed to have a lot of control over the movement, so I decided to implement a custom character controller instead of using the built-in <em>Unity Rigidbody</em>, which is what I had used previously.
        </p>
        <p>
        My first approach was to manually handle all collision and response with my own implementation of the <em>collide-and-slide algorithm</em>. It works like this:
        <ol>
            <li><em>Cast a ray</em>* in the direction of the movement to check if there is a collider in the way.</li>
            <li>If there is no collision, move the player in the direction of the movement.</li>
            <li>If there is a collision, <em>project the movement along the plane</em> of the collision using the <em>normals</em>. This is our new movement vector.</li>
            <li>Repeat the process until there is no collision or we have reached a maximum recursion depth.</li>
        </ol>
        <i>*In this case, I did a <em>capsule cast</em> instead of a ray cast, as this is a more accurate representation of the player.</i>
        </p>
        <img src="Assets/Images/ProjectSalamanoid/collideandslide.png"
        style="position: relative; transform-origin: center;" width=100%/>
        <p>
        This was fun to implement and I learned a lot from it, but while working on it I realized that it had a couple of drawbacks. I had mostly tested the movement in simple environments with right angles and flat surfaces, but when we started testing it in the actual game environment, I quickly realized that it was not very robust. The player was able to phase through walls in certain nieche cases, such as when walking into a slanted ceiling. The team needed help on other parts of the game, so I decided to scrap my implementation and use the built-in <em>Unity CharacterController</em> instead. This was a good decision, as it allowed me to focus on other parts of the game and I was able to get the movement working very quickly. It was good enough and I was able to add a lot of features on top of it to make it feel more natural.
        </p>

        <p>
        The controller emulates <em>acceleration</em> and <em>drag forces</em> to make the movement less rigid. I also made sure to add <em>collision layers</em> so that the player does not collide with details and decorations in the environment, which could make the player get stuck and ruin the flow of the game.
        </p>

        <h4>Sprinting</h4>
        <p>
        Holding the sprint button sets the max speed to a set sprint speed. The player can only sprint forwards or diagonally forwards compared to the direction as they are facing. Sprinting consumes <em>stamina</em>, and cannot be performed when stamina is too low. The player cannot sprint while jumping, crouching or aiming down sights.
        </p>

        <h4>Crouching</h4>
        <p>
        Holding the crouch button lowers the height of the player and therefore the camera as well. It is useful for getting in tight spaces but reduces the max speed to a set crouch speed. When letting go of the crouch button the height will go back to normal unless there is something in the way. In that case, the player will uncrouch as much as possible and will keep trying until the player crouches again or moves to an area where it can successfully uncrouch.
        </p>

        <h4>Jumping</h4>
        <p>
        Pressing the <em>jump</em> button instantly applies positive <em>vertical velocity</em>. The player is unable to jump while crouching or aiming down sights.
        </p>

        <h4>Climbing</h4>
        <p>
        Climbing is a similar but separated movement mechanic from the rest. The player can enter a salamander-like climbing state by drinking a Salamander Vial. When the player is in the climbing state it <em>snaps to a wall when colliding</em> (and facing towards the wall), changing the up direction of the player. The player can essentially travel along any wall as long as there is enough space. The player stays in the climbing state until another Salamander Vial is consumed, which makes the player go back to its normal movement state.
        </p>
        <p>
        I implemented this by using a separate character controller for the climbing state. The climbing controller uses a similar approach to the <em>collide-and-slide algorithm</em>, but instead of projecting the movement along the plane of the collision, it snaps the player to the wall and <em>sets the up direction to the normal</em> of the wall.
        </p>

        <h3>Music Manager</h3>
        <p>
        Some parts of the game have background music and the intensity of the music varies in different parts of the game. This is possible because the music is divided into layers that can be added or removed on demand to change the mood. Entering a new area will potentially activate or deactivate some <em>music layer</em> which will change the <em>perceived intensity</em> for the player.
        </p>
        <p>
        To achieve this, I created <em>Music Nodes</em> that could be placed in the level, and if they fulfilled the right requirement they would be activated and tell the music manager to play certain looped tracks. Some <em>Music Node</em> types were <em>distance from player</em>, <em>player is in area</em>, or <em>player and enemy is in area</em>. This turned out to be an okay system to work with but if I had more time I would have liked to make it less focused on looping all music and having more of an <em>event based system</em> which a designer could tailor to their own needs rather than using these simple rules.
        </p>

        <h3>Interactable Objects</h3>
        <p>
        The game has a lot of <em>interactable objects</em>, such as doors, drawers and cabinets. I created a system that allows designers to easily add door and drawer objects to the game. The system uses a simple interface that allows designers to specify how the object should move when interacted with and what sound should be played. I'm very hapy with how this turned out, as it allows designers to easily add interactivity to imported models as long as they are split into the right parts.
        </p>

        <h3>Cheats</h3>
        <p>
        During the production phase, we had to do a lot of <em>internal play-testing</em>. It was very time consuming however, when we wanted to test mechanics that were only present in the later parts of the game since we would have to replay the entire game up to that point to reach them. Therefore, I created a script that allowed us to <em>teleport</em> to the elevators on each level. It also allowed us to enter a <em>noclip mode</em> and a <em>god mode</em>. This proved very useful and saved us a great deal of time.
        </p>
        `,
        staticThumbnail: "Assets/Images/projectsalamanoid.png",
        teamSize: 9,
        language: ["C#", "Unity"],
        isValid: true
    },
    { // WFC RTS - Not included
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
    { // Untitled Physics Game - Not included
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
        <h2>Introduction</h2>
        <p>
        Developed as part of the <em>System Development and Project I</em> course a Malmö University. Our goal with this project was to create a fun <em>flight simulation game</em> in a silly setting, for a causal playthrough. The player controls a goose that carries out missions similar to war planes, but the look and feel is <em>vibrant and light</em> to contrast the otherwise serious tone of war. The setting is an alternate reality where gray geese wage war on canada geese and their allies. The main mechanics of the game are flying, shooting and destroying ground targets by dropping "egg bombs". This was my first time working in Unity and I had a lot of fun learning and creating.
        </p>

        <h2>Game Trailer</h2>
        <p style="text-align:center">
        <iframe
        style="position: relative; transform-origin: center; width : 100%; height: 100%; aspect-ratio: 16/9;"
        src="https://www.youtube.com/embed/WYVJrY2zlsw?si=xcM--pNSDGH8ZpMH"
        frameborder="0"
        allowfullscreen
        ></iframe>
        </p>

        <h2>Process</h2>

        <h3>AI Behaviour</h3>
        <p>
        I was partly responsible for the AI behaviour in the game. Our implementation of the AI was a <em>Utility System</em>. The AI would evaluate the situation by giving different behaviours a score based on the current situation to determine which behaviour to execute. The behaviours I implemented were <em>Avoid ground</em> and <em>On Death</em>.
        </p>

        <h4>Avoid Ground</h4>
        <p>
        A naive approach to the AI would be to just check if the goose is too close to the ground and then <em>adjust the pitch</em> of it to go up, but that did not turn out to be a good solution in Top Goose due to the environment. There are a lot of <em>vertical hills</em> in the environment as well as a lot of <em>obstacles</em> that the goose can fly through. With this naive approach the goose would often fly straight into the hills or avoid the obstacles completely, which made it very easy for the player to predict the AI's movement and avoid it.
        </p>
        <p>
        Instead, we opted for a more complex solution. The AI would <em>cast rays in multiple directions</em> to check if there's an obstacle in the way. For every ray that hits an obstacle, the AI would calculate optimal steering to avoid it by using the <em>normals</em> of the hit. The AI would then calculate the <em>average of all the steering vectors</em> and use that as the new steering vector. This way, the AI would be able to avoid obstacles in a more <em>dynamic</em> fashion. By adjusting the <em>ray distances</em> and their <em>averaging weights</em>, we were able to make the AI follow the player with a satisfyingly low amount of crashes and without being too stale and predictable.
        </p>

        <h4>On Death</h4>
        <p>
        The On Death behaviour is triggered when a goose runs out of health. It makes the goose tumble towards the ground and then <em>dissolve</em> and <em>despawn</em>. We decided to despawn the geese after dying since the game can technically go on forever. Not despawning the geese after some time could mean and infinite amount of <em>game objects</em> active at the same time, which is obviously not good for <em>performance</em>. The dissolving was made possible by <em>using a shader</em> and adjusting the parameters from <em>procedural noise</em> applied to the <em>alpha output</em>. This behaviour was also implemented to apply to the player death event. Making the goose tumble was a simple solution as I just needed to make the goose <em>ajust the pitch</em> to look slightly downwards and then <em>apply torque</em> to the goose to make it tumble. Although this was a simple solution, it turned out to be very effective and looked great in the game.
        </p>

        <h3>Enemy Spawning</h3>
        <p>
        The enemy spawning implementation is quite simple, but vital to the game. There's a <em>counter</em> that counts down from a set time and when it reaches zero, a new enemy is spawned. When an enemy spawns, it has a set of <em>spawn points</em> to choose from. It start by checking all the spawn points and <em>filtering out</em> the ones that are too close to the player, and the ones that the player is looking towards by using the <em>dot product</em> of the <em>vector from the player to the spawnpoint</em> and the <em>forward vector of the player</em>. Out of all the spawn points that are left, the chosen spawn point is the one that has spawned the <em>least amount of enemies</em> to try to distribute the spawns evenly between the points.
        </p>

        <h3>Map Boundary</h3>
        <p>
        We realized that we needed to limit the area where the player could fly, so we decided that the game needed some sort of <em>map boundary</em>. However, we did not want to just put a wall around the map because <em>we wanted the world to feel open</em>, and it would be very interruptive to the players experience if it suddenly flew into an invisible wall. I came up with a fun solution to this problem. I created <em>boats that patrol the edges</em> of the map and <em>fire missiles at the player</em> if they get too close. The player receives a <em>warning on the screen</em> when they are too close to the edge of the map so that they can avoid it.
        </p>
        <p>
        The missiles were implemented using a <em>homing missile</em> script that would make the missile follow the player until it hits them or the ground. This was probably the most fun and advanced part of the game to implement for me, since it involved <em>targeting math</em> so that the missiles could predict where the player would be when they hit them. I used a <em>quadratic equation</em> to calculate the time it would take for the missile to reach the player and then used that time to calculate where the player would be when the missile hit them.
        </p>
        `,
        staticThumbnail: "Assets/Images/topgoose.png",
        teamSize: 5,
        language: ["C#", "Unity"]
    },
];