// Vue Component for Header
Vue.component('food-header', {
    template: `
        <header class="mb-4">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Food Blog</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Recipes</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    `
});

// Vue Component for Image
Vue.component('img-chicken', {
    template: `<img src="images/chili.jpg" alt="White Chicken Chili" class="img-fluid" width="180">`
});

// Vue Component for Comments
Vue.component('food-comments', {
    props: ['comments', 'authorInfo'],
    data() {
        return {
            selectedAuthor: null, // Initialize with null value
        };
    },
    template: `
        <div>
            <h2>Comments</h2>
            <section id="blogposts">
                <div class="post" v-for="comment in comments" :key="comment.id">
                    <img src="images/profile.png" alt="Profile Picture" class="comment-profile" @click="displayAuthorInfo(comment.author)">
                    <span class="author">{{ comment.author }}</span> — 
                    <span class="date">{{ comment.date }}</span>
                    <span class="reply">REPLY</span>
                    <p>{{ comment.content }}</p>
                </div>
            </section>
            <div class="floating-box" v-if="selectedAuthor">
                <span class="close-btn" @click="selectedAuthor = null">&times;</span>
                <div v-if="selectedAuthor">  
                    <h3>{{ selectedAuthor.author }}</h3>
                </div>
                <p><strong>Foodie Level:</strong> {{ selectedAuthor.foodieLevel }}</p>
                <p>{{ selectedAuthor.bio }}</p>
                <button id="closeBtn" @click="selectedAuthor = null">Close</button>
            </div>
        </div>
    `,
    methods: {
        displayAuthorInfo(authorName) {
            this.selectedAuthor = this.authorInfo.find(author => author.author.toUpperCase() === authorName.toUpperCase());
            this.showFloatingBox();
        },
        showFloatingBox() {
            this.$nextTick(() => {
                const floatingBox = document.querySelector('.floating-box');
                floatingBox.style.display = 'block';
            });
        },
        closeFloatingBox() {
            this.selectedAuthor = null;
            const floatingBox = document.querySelector('.floating-box');
            floatingBox.style.display = 'none';
        }
    },
});

new Vue({
    el: '#app',
    data: {
        comments: [
            {
                id: 1,
                author: 'Brianna',
                date: 'February 18, 2021 @ 3:30 pm',
                content: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!'
            },
            {
                id: 2,
                author: 'LINH',
                date: 'February 15, 2021 @ 9:46 am',
                content: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!'
            },
            {
                id: 3,
                author: 'CATHERINE LEONARDO',
                date: 'February 13, 2021 @ 12:58 pm',
                content: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.'
            },
            {
                id: 4,
                author: 'KALI',
                date: 'February 13, 2021 @ 11:31 am',
                content: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!'
            }
        ],
        authorInfo: [
            {
                author: "BRIANNA",
                foodieLevel: "Novice",
                bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!"

            },
            {
                author: "LINH",
                foodieLevel: "Newcomer",
                bio: "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time."

            },
            {
                author: "CATHERINE LEONARDO",
                foodieLevel: "Mentor",
                bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!"

            },
            {
                author: "KALI",
                foodieLevel: "Novice",
                bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!"
            },
        ],
    },
});
