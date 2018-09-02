<template>
    <div class="tab-pane fade show active" id="comics" role="tabpanel" aria-labelledby="home-tab">
        <div class="row mb-2">
            <div class="col-md-6">
                <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                    <strong class="d-inline-block mb-2 text-success">Design</strong>
                    <h3 class="mb-0">
                        <a class="text-dark" href="#">The Lord of the Rings</a>
                    </h3>
                    <div class="mb-1 text-muted">Nov 11</div>
                    <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#">Continue reading</a>
                    </div>
                    <img class="card-img-right flex-auto d-none d-lg-block" src="https://picsum.photos/250/300?image=1079">
                </div>
            </div>
            <div class="col-md-6">
                <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                    <strong class="d-inline-block mb-2 text-success">Design</strong>
                    <h3 class="mb-0">
                        <a class="text-dark" href="#">The Dark Tower</a>
                    </h3>
                    <div class="mb-1 text-muted">Nov 11</div>
                    <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="#">Continue reading</a>
                    </div>
                    <img class="card-img-right flex-auto d-none d-lg-block" src="https://picsum.photos/250/300?image=1075">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Books',
    data: function () {
        return {
        };
    },
}
</script>
