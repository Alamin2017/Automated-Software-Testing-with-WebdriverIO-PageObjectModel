module.exports=new class HomePage{

    // get search_box(){
    //     return $("//input[@id='twotabsearchtextbox']")
    // }

    async searchforGivenKeyword(search_item)
    {
        await $("//input[@id='twotabsearchtextbox']").setValue(search_item)
        //await this.search_box.setValue(search_item)
 
        await browser.pause(3000);
        await $("//input[@id='nav-search-submit-button']").click();
        await browser.pause(3000);
    }
}