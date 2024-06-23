# Login to Azure
Connect-AzAccount

# Create a resource group
$resourceGroupName = "MyResourceGroup"
$location = "East US"
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
$storageAccountName = "mystorageaccount" + (Get-Date).ToString("MMddyyyyhhmmss")
$skuName = "Standard_LRS"
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName $skuName -Kind "StorageV2" -AccessTier "Hot"