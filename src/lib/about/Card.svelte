<section>
    <img alt="profile photograph" src="https://avatars.githubusercontent.com/u/58738637?v=4"/>
    <div>
        <h2>William Faircloth</h2>
        <p>software engineer, student, disciple</p>
        <div class="links">
            <a href="/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-fw fa-github"></i>willuhmjs</a>
            <a href="/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-fw fa-discord" id="discord"></i>willuhmjs#1995</a>
            <a href="mailto:me@willuhmjs.com"><i class="fa-solid fa-envelope"></i>me@willuhmjs.com</a>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
    }

    p {
        margin: 15px 0;
    }

    .links {
        display: flex;
        flex-direction: column;
        column-gap: 1.5ch;

    }

    .links a {
        margin: 0.5ch 0;
    }

    img {
        max-height: 200px;
        margin-right: 2ch;
    }

    i {
        margin-right: 1ch;
    }

    @media (max-width: 600px) {
        section {
            flex-direction: column;
        }

        img {
            margin-bottom: 2ch;
            max-height: 100%;
        }
    }
</style>