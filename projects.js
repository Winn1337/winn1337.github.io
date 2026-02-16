// Contains project data. Projects without a thumbnail will not be displayed on the main page.
// This file is loaded in both index.js and project-detail.js.

export var projects = [
    { // Ballin Santa
        title: "Ballin Santa",
        year: 2025,
        summary: "Jolly little arcade game made for TriJam #351.",
        fullDescription: `
        <h2>Introduction</h2>
        <p>
        Developed for TriJam #351 in 3 hours for the theme "Santa’s Gift Management".
        </p>

        <p>
        It’s almost time for Christmas, and Santa is completely on his own. With the elves nowhere to be found, presents start flying his way faster and faster. It’s up to you to keep the sleigh stocked before everything falls apart.
        </p>

        <p>
        Presents are hurled toward Santa at increasing speed, and you’ll need quick movement and decent aim to catch and toss them into the sleigh. Drop too many, and Christmas is cancelled.
        </p>

        <h2>Result</h2>
        
        <p> You can play the latest version of the game on itch.io. </p>
        <iframe frameborder="0"
            src="https://itch.io/embed/4134012?linkback=true&amp;bg_color=6495ED&amp;fg_color=FFFFFF&amp;link_color=AC3232&amp;border_color=6495ED;b_radius=20;"
            width="552"
            height="167"
            style="border-radius:6px"
            ></iframe>
        `,
        staticThumbnail: "Assets/Images/ballinsanta.png",
        teamSize: 1,
        language: ["GDScript", "Godot"]
    },
    { // TopDogEngine
        title: "TopDogEngine",
        year: 2025,
        summary: "A single-file 3D game prototyping framework.",
        fullDescription: `
        <h3>Introduction</h3>
        <p>
        TopDogEngine is a single-file 3D game prototyping framework that I helped develop as part of my <em>bachelor thesis</em> at Malmö University.
        The goal of the project was to create a framework that would allow for rapid prototyping of 3D games in C++.
        </p>

        <h3>Result</h3>
        <p>
        The paper can be accessed <a href="https://mau.diva-portal.org/smash/record.jsf?pid=diva2:1975060" target="_blank">here</a>.
        </p>

        <h3>Process</h3>
        <p>
        
        </p>
        `,
        staticThumbnail: "Assets/Images/topdogengine.png",
        teamSize: 2,
        language: ["C++", "Vulkan"]
    },
    { // Swing and a Miss
        title: "Swing and a Miss",
        year: 2025,
        summary: "A rage inducing physics platformer.",
        fullDescription: `
        <h2>Introduction</h2>
        <p>
        Swing and a Miss was my submission to <em>Game Lab Jam: VT 25</em> and it turned out to be the overall winner of the jam! It was developed in 48 hours, but I spent some time polishing it after the jam ended. It's still a work in progress, but I am very proud of the result and I'm planning on working it into a state where it can be released on Steam.
        </p>

        <h2>Result</h2>
        <p> You can play the latest version of the game on itch.io. </p>

        <iframe frameborder="0"
            src="https://itch.io/embed/3433802?linkback=true&amp;bg_color=e4d3aa&amp;fg_color=001c41&amp;link_color=1b5db3&amp;border_color=5e789a;b_radius=20;"
            width="552"
            height="167"
            style="border-radius:6px"
            ></iframe>

        <h2>Process</h2>
        <p>
        The process is still ongoing, but I will add more details about the process when I have worked further on the game.
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

        <p style="text-align:center;">
        <img src="Assets/Images/ProjectSalamanoid/movement.gif"
        width=100%
        style="border-radius: 6px"/>
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

        <p style="text-align:center;">
        <img src="Assets/Images/ProjectSalamanoid/climbing.gif"
        width=100%
        style="border-radius: 6px"/>
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

        <p style="text-align:center;">
        <img src="Assets/Images/ProjectSalamanoid/interactable.gif"
        width=100%
        style="border-radius: 6px"/>
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
        <h2>Introduction</h2>
        <p>
        Heat Delirium was developed in 48 hours for the <em>Game Lab Jam: VT 24</em>.
        </p>

        <h2>Result</h2>
        <p>
        You can play this game on itch.io.
        </p>
        
        <iframe frameborder="0"
        src="https://itch.io/embed/2746817?bg_color=f7db41&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=c5b153"
        width="552"
        height="167"
        ></iframe>

        <h2>Process</h2>
        <p>
        
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
        <h2>Introduction</h2>
        <p>
        Developed as part of the <em>Applied Software Architecture</em> course a Malmö University.
        </p>

        <h2>Result</h2>
        <p>
        
        </p>

        <h2>Process</h2>
        
        <h3>Main Menu</h3>
        <p>

        </p>
        
        <h3>Package Distribution</h3>
        <p>

        </p>
        `,
        //staticThumbnail: "Assets/Images/maketntgreatagain.png",
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
        <h2>Introduction</h2>
        <p>
        Developed as part of the <em>Physics for Digital Games</em> course a Malmö University. My task was to make my own implementation of the <em>Rigidbody 2D</em> component in <em>Unity</em>. I also needed to implement my own circle-circle and circle-plane collision system to use for my <em>collision responses</em>. On top of this, I created some <em>external forces</em> to interact with the rigidbodies such as <em>wind</em>, <em>buoyancy</em> and <em>explosions</em>.
        </p>

        <h2>Process</h2>

        <h3>Collision detection</h3>
        <p>
        The circle-circle collision detection is a simple <em>distance check</em> between the two circles. If the distance is less than the sum of the two radii, a collision has occurred. If the two circles are already moving away from each other, the collision is ignored.
        </p>
        <p>
        The circle-plane collision detection is a bit more complex, since I didn't want to treat the plane as though it was infinite but more like a <em>line segment</em>. I used the <em>dot product</em> to determine the orthogonal and parallel components of the distance between the circle and the plane.
        </p>
        <p style="text-align:center;">
        <img src="Assets/Images/2DPhysicsEngine/circleplanecollisiondetection.png"/>
        </p>
        
        <h3>Collision response</h3>
        <p>
        The collision detection and response runs multiple iterations per time-step to prevent issues when multiple objects are colliding at the same time. To do this, I tweaked the <em>number of iterations</em> and the <em>error reduction</em> values to get stable results. After calculating the new positions and velocities of the objects, the results are multiplied by the error reduction parameter which makes each iteration less drastic than if all collisions were to be fully "corrected" in a single sweep. The error reduction parameter I settled on <em>5 iterations</em> per time-step and an <em>error reduction of 20%</em>. The formula for calculating the new velocity of colliding object is:
        </p>

        <p style="text-align:center;">
        <em>v1 = (m2 / (m1 + m2)) × v2 </em>
        </p>
        <p style="text-align:center;">
        <em>v2 = (m1 / (m1 + m2)) × v1 </em>
        </p>

        <p style="text-align:center;">
        <img src="Assets/Images/2DPhysicsEngine/collisionresponse.png"/>
        </p>

        <p>
        The collision solving method was implemented to work on both circle-circle and circle-plane collisions. I solved the collisions by using a <em>Contact class</em> containing <em>rigidBody A</em>, <em>rigidBody B</em>, <em>collision normal</em> and <em>penetration</em>. If an object was a plane, it was sent to the contact class as null. Therefore, it was convenient to use the <em>inverse mass</em> of the objects, since a solid object has an infinite mass which translates to a zero inverse mass.

        <p style="text-align:center;">
        <img src="Assets/Images/2DPhysicsEngine/collision.gif"
        width=100%
        style="border-radius: 6px"/>
        </p>

        <h3>External forces</h3>
        <h4>Wind</h4>
        <p>
        Wind is a simple force that is applied to the rigidbody in the direction of the wind. I have tried to keep the implementation as true to reality as possible, so that inputting real values would give a realistic result. It takes into account the <em>wind force</em>, <em>wind direction</em>, <em>air density</em>, <em>drag coefficient</em> and <em>exposed area</em>. The wind force is calculated using the following formula:

        <p style="text-align:center;">
        <em>appliedWindForce = windForce × windDirection × airDensity × dragCoefficient × exposedArea</em>
        </p>

        I decided to set the air density to 1.29 kg/m³, which is the regular density of air. The drag coefficient is set to 0.47, which is the drag coefficient of a sphere. The exposed area is set to the area of the circle, which is calculated using the following formula:

        <p style="text-align:center;">
        <em>exposedArea = PI × radius × radius</em>
        </p>
        </p>

        <p style="text-align:center;">
        <img src="Assets/Images/2DPhysicsEngine/wind.gif"
        width=100%
        style="border-radius: 6px"/>
        </p>

        <h4>Buoyancy</h4>
        <p>
        This was my favorite force to implement due to how impactful the effect is. I used the <em>Archimedes principle</em> to calculate the buoyancy force. The buoyancy force is equal to the weight of the fluid displaced by the object. The formula for calculating the buoyancy force is:

        <p style="text-align:center;">
        <em>exposedArea = submergedVolume × fluidDensity × radius × gravity</em>
        </p>

        The formula for calculating the submerged volume is:
        
        <p style="text-align:center;">
        <em>submergedVoume = r × r × radius × Arccos(h* - 1 / r) - (r - h) × sqrt(r * r - (r - h) * (r - h))</em>
        </p>

        *h is the relative water level for the object, minus the radius of the object.

        </p>

        <p style="text-align:center;">
        <img src="Assets/Images/2DPhysicsEngine/buoyancy.gif"
        width=100%
        style="border-radius: 6px"/>
        </p>

        <h4>Explosions</h4>
        <p>
        The explosion force is applied in a similar way to the wind force, but it also takes into account the <em>explosion radius</em>. It uses the relative distance to the explosion center to linearly interpolate between the explosion force and zero.
        </p>
        <p style="text-align:center;">
        <img src="Assets/Images/2DPhysicsEngine/explosionforce.png"/>
        </p>

        <p style="text-align:center;">
        <img src="Assets/Images/2DPhysicsEngine/explosions.gif"
        width=100%
        style="border-radius: 6px"/>
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
        <h2>Introduction</h2>
        <p>
        Developed as part of the <em>Computer graphics and modeling</em> course at Malmö University.
        The goal of the assignment was to extend the a base framework provided by our teacher to add
        rendering capabilities and using methods such as Phong shading and cube mapped reflections to achieve better
        looking graphics.
        </p>

        <h2>Result</h2>
        <p>
        
        </p>

        <h2>Process</h2>
        <p>
        
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
        The On Death behaviour is triggered when a goose runs out of health. It makes the goose tumble towards the ground and then <em>dissolve</em> and <em>despawn</em>. We decided to despawn the geese after dying since the game can technically go on forever. Not despawning the geese after some time could mean and infinite amount of <em>game objects</em> active at the same time, which is obviously not good for <em>performance</em>. The dissolving was made possible by <em>using a shader</em> and adjusting the parameters from <em>procedural noise</em> applied to the <em>alpha output</em>.

        <p>
        This behaviour was also implemented to apply to the player death event. Making the goose tumble was a simple solution as I just needed to make the goose <em>ajust the pitch</em> to look slightly downwards and then <em>apply torque</em> to the goose to make it tumble. Although this was a simple solution, it turned out to be very effective and looked great in the game.
        </p>

        <p style="text-align:center;">
        <img src="Assets/Images/TopGoose/ondeath.gif"
        width=100%
        style="border-radius: 6px"/>
        </p>

        <h3>Enemy Spawning</h3>
        <p>
        The enemy spawning implementation is quite simple, but vital to the game. There's a <em>counter</em> that counts down from a set time and when it reaches zero, a new enemy is spawned. When an enemy spawns, it has a set of <em>spawn points</em> to choose from. It start by checking all the spawn points and <em>filtering out</em> the ones that are too close to the player, and the ones that the player is looking towards by using the <em>dot product</em> of the <em>vector from the player to the spawnpoint</em> and the <em>forward vector of the player</em>. Out of all the spawn points that are left, the chosen spawn point is the one that has spawned the <em>least amount of enemies</em> to try to distribute the spawns evenly between the points.

        <h3>Map Boundary</h3>
        <p>
        We realized that we needed to limit the area where the player could fly, so we decided that the game needed some sort of <em>map boundary</em>. However, we did not want to just put a wall around the map because <em>we wanted the world to feel open</em>, and it would be very interruptive to the players experience if it suddenly flew into an invisible wall. I came up with a fun solution to this problem. I created <em>boats that patrol the edges</em> of the map and <em>fire missiles at the player</em> if they get too close. The player receives a <em>warning on the screen</em> when they are too close to the edge of the map so that they can avoid it.
        </p>

        <p>
        The missiles were implemented using a <em>homing missile</em> script that would make the missile follow the player until it hits them or the ground. This was probably the most fun and advanced part of the game to implement for me, since it involved <em>targeting math</em> so that the missiles could predict where the player would be when they hit them. I used a <em>quadratic equation</em> to calculate the time it would take for the missile to reach the player and then used that time to calculate where the player would be when the missile hit them.
        </p>
        
        <p style="text-align:center;">
        <img src="Assets/Images/TopGoose/mapboundary.gif"
        width=100%
        style="border-radius: 6px"/>
        </p>
        `,
        staticThumbnail: "Assets/Images/topgoose.png",
        teamSize: 5,
        language: ["C#", "Unity"]
    },
];