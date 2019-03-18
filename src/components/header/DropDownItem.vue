<template>
    <div>
        <div class="icon">ikona</div>
        <span>
            <slot name="label" />
        </span>
        <div name="drop-down-content">
            <slot name="content" />
        </div>
    </div>
</template>
