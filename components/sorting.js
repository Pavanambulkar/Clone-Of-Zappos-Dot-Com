function sorting(){
    return ` <select name="Sorted" id="sort1" onchange="sort()">
    <option value="rev">Relevance</option>
    <option value="htl">High To Low</option>
    <option value="lth">Low To High</option>
    <option value="rate">Customer Ratings</option>
    <option value="new">New Arrival</option>
    <option value="brand">Brand Name</option>
</select>`
}

export default sorting;
