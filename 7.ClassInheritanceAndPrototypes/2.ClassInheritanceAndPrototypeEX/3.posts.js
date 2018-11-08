function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\n` +
                `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.arrOfComments = [];
        }

        addComment(comment) {
            this.arrOfComments.push(comment)
        }

        toString() {
            let result = super.toString() + '\n' + `Rating: ${Number(this.likes)-Number(this.dislikes)}`;
            if (this.arrOfComments.length > 0) {
                result += '\n' + 'Comments:\n';
                let str = [];
                for (let comment of this.arrOfComments) {
                    str.push(` * ${comment}`);
                }
                return result + str.join('\n');
            }
            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, initialViews) {
            super(title, content);
            this.postView = initialViews;
        }

        view() {
            this.postView++;
            return this;
        }

        toString() {
            return super.toString() + '\n' + `Views: ${this.postView}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}
let classes = solve();
let test = new classes.BlogPost("TestTitle", "TestContent", 5);
test.view().view().view();
console.log(test.toString());