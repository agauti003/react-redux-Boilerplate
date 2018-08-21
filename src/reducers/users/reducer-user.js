/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Aditya",
            last: "Gautam",
            age: 71,
            description: "Adi is a Full Stack developer",
            thumbnail: "https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjAgJ_2g_7cAhVG7mEKHamHAnUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fflower%2F&psig=AOvVaw2tJxxzKD_TKv55JKEyVH96&ust=1534936964241685"
        },
        {
            id: 2,
            first: "Sumit",
            last: "Sharma",
            age: 27,
            description: "Sumit is getting dumber everyday",
            thumbnail: "https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjOodidhP7cAhUEbo8KHQsiBg8QjRx6BAgBEAU&url=https%3A%2F%2Fwallpaperbrowse.com%2Fimages&psig=AOvVaw2tJxxzKD_TKv55JKEyVH96&ust=1534936964241685"
        },
        {
            id: 3,
            first: "Mitlesh",
            last: "Mittal",
            age: 24,
            description: "Mittal is one of the best mentors",
            thumbnail: "https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiGxu2jhP7cAhVKKo8KHeZLANoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fgrowth&psig=AOvVaw2tJxxzKD_TKv55JKEyVH96&ust=1534936964241685"
        }
    ]
}
