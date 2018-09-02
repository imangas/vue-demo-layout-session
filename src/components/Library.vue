<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item ">
                <router-link 
                    class="nav-link"
                    :class="{active: (this.$route.name=='library-books')}" 
                    :to="{ name: 'library-books'}"
                >Books</router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    class="nav-link " 
                    :class="{active: (this.$route.name=='library-comics')}" 
                    :to="{ name: 'library-comics'}"
                >Comics</router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    class="nav-link " 
                    :class="{active: (this.$route.name=='library-mangas')}" 
                    :to="{ name: 'library-mangas'}"
                >Mangas</router-link>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <router-view></router-view>
            <hr/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Library',
    data: function () {
        return {
        };
    },
}
</script>
