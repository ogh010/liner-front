<template>
    <tr>
        <th>
            <p>{{title}}</p>
        </th>
        <td>
            <slot name="content"></slot>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'TableCard',
    props: ['title']
}
</script>