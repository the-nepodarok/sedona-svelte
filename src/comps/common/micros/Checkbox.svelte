<script>
    export let inputName = '';
    export let className = '';
    export let checked = false;
    export let text = '';
</script>

<label class="{className}">
    <input type="checkbox" name="{inputName}" {checked}>
        <span>
            {text}
        </span>
</label>

<style>
    label > span::before {
        content: '';
        position: absolute;
        left: -25px;
        width: 27px;
        height: 23px;
        background: url('/src/assets/checkbox-off.svg') no-repeat;
        cursor: pointer;
    }

    input[type="checkbox"] {
        opacity: 0;
        z-index: -1;
    }

    label {
        margin-top: 25px;
        position: relative;
    }

    input[type="checkbox"]:hover + span::before,
    input[type="checkbox"]:focus + span::before {
        transform: scale(1.2);
    }

     label > input:checked + span::before {
        background-image: url('/src/assets/checkbox-on.svg');
    }

    label > input:disabled + span::before {
        filter: brightness(50%) sepia(50%) saturate(50%) grayscale(1);
    }

    label > input:disabled + span::before {
        filter: brightness(50%) sepia(50%) saturate(50%) grayscale(1);
    }
</style>