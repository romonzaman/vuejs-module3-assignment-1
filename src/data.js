const banner = {
    title: 'Unleash Your Fitness Potential with the Ultimate Workout Companion',
    subtitle:
      'Empower Your Workouts, Elevate Your Results!',
    textBtn1: 'Play Store',
    imgBtn1: '/playstore.png',
    textBtn2: 'App Store',
    imgBtn2: '/appstore.png',
    img: '/hero_gym.jpeg',
};

const appinfo = {
    title: "GymApp",
    logo: "/gym_logo.jpeg"
}
const nav = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
];

const features = {
    text: `<div
    class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
    <h2 class="mb-6 text-3xl font-bold">Why is it so great?</h2>
    <p class="mb-8 text-neutral-500 dark:text-neutral-300">
      Nunc tincidunt vulputate elit. Mauris varius purus malesuada
      neque iaculis malesuada. Aenean gravida magna orci, non
      efficitur est porta id. Donec magna diam.
    </p>

    <div class="grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
      <div class="mb-6">
        <p class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-3 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Support
          24/7
        </p>
      </div>

      <div class="mb-6">
        <p class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-3 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Analytics
        </p>
      </div>

      <div class="mb-6">
        <p class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-3 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>Components
        </p>
      </div>
      <div class="mb-6">
        <p class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-3 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Updates
        </p>
      </div>

      <div class="mb-6">
        <p class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-3 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Reports
        </p>
      </div>

      <div class="mb-6">
        <p class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-3 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Mobile
        </p>
      </div>
      <div class="mb-6">
        <p class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-3 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Modules
        </p>
      </div>

      <div class="mb-6">
        <p class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-3 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Blocks
        </p>
      </div>

      <div class="mb-6">
        <p class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" class="mr-3 h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Templates
        </p>
      </div>
    </div>
  </div>`,
    img: "https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/121.jpg"
}


const pricing = [
    { 
        name: 'Basic Plan',
        description: 'Kickstart your fitness routine with our Basic Plan, offering access to a wide range of workout exercises and instructional videos. Enjoy the freedom to explore different workout styles and techniques at your own pace.',
        amount: `5`,
    },
    { 
        name: 'Pro Plan',
        description: 'Take your training to the next level with our Pro Plan. Gain access to exclusive content, personalized workout plans, and receive expert guidance from certified gym instructors. Maximize your results with tailored exercises designed to match your fitness goals.',
        amount: '10',
    },
    { 
        name: 'Premium Plan',
        description: 'Unlock the ultimate fitness experience with our Premium Plan. Elevate your workouts with advanced features, including live virtual classes, one-on-one sessions with renowned trainers, and comprehensive progress tracking. Get personalized attention and enjoy the perks of an elite fitness community.',
        amount: '20',
    },
];

const testomonies = [
    {
        avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg',
        name: 'Maria Smantha',
        title: 'Web Developer',
        comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
        id officiis hic tenetur quae quaerat ad velit ab hic.`,
        rating: `<li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>`
    },
    {
        avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg',
        name: 'Lisa Cudrow',
        title: 'Graphic Designer',
        comment: `Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid commodi.`,
        rating: `<li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>`
    },
    {
        avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg',
        name: 'John Smith',
        title: 'Marketing Specialist',
        comment: `At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti.`,
        rating: `<li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
          <path fill="currentColor"
            d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
        </svg>
      </li>`
    }
]

const contacts = [
    {
        title: 'Technical support',
        email: 'support@example.com',
        phone: '+1 786-664-8610'
    },
    {
        title: 'Sales support',
        email: 'sales@example.com',
        phone: '+880 1755650208'
    },
    {
        title: 'Billing support',
        email: 'billing@example.com',
        phone: '+1 786-664-8610'
    },
    {
        title: 'Emergency',
        email: 'emergency@example.com',
        phone: '+880 1755650208'
    },
]

const footers = [
    {
        title: 'LINKS',
        links: [
            {
                title: 'FAQ',
                url: '#'
            },
            {
                title: 'Help',
                url: '#'
            },
            {
                title: 'Support',
                url: '#'
            },
        ]
    },
    {
        title: 'Legal',
        links: [
            {
                title: 'Terms',
                url: '#'
            },
            {
                title: 'Privacy',
                url: '#'
            },
            {
                title: '',
                url: '#'
            },
        ]
    },
    {
        title: 'Social',
        links: [
            {
                title: 'Facebook',
                url: '#'
            },
            {
                title: 'Linkedin',
                url: '#'
            },
            {
                title: 'Twitter',
                url: '#'
            },
        ]
    },
    {
        title: 'Company',
        links: [
            {
                title: 'Official Blog',
                url: '#'
            },
            {
                title: 'About Us',
                url: '#'
            },
            {
                title: 'Contact',
                url: '#'
            },
        ]
    },
]
export {banner, appinfo, nav, features, pricing, testomonies,contacts, footers}