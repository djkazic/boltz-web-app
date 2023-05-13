const dict = {
    en: {
        history: "History",
        swap: "Swap",
        refund: "Refund",
        documentation: "Docs",
        onion: "Onion",
        channels: "Channels",
        ordinals: "Ordinals",
        blockexplorer: "Open with blockexplorer",
        help: "Help",
        network_fee: "Network Fee",
        fee: "Boltz Fee",
        denomination: "Denomination",
        min: "Mininum",
        max: "Maximum",
        assets: "Assets",
        socialmedia: "Follow us on Social Media",
        footer: "made with ❤️ by Team Boltz",
        create_swap: "Create Atomic Swap",
        create_swap_subline: "Payment includes network and boltz service fees",
        cancel_swap: "Cancel Swap",
        new_swap: "New Swap",
        success_swap: "Swap Success",
        create_and_paste:
            "Paste a bolt11 lightning invoice\n or a Lightning address\nor a LNURL Paylink\n\nAmount: {{ amount }} {{ denomination }}",
        congrats: "Congratulations!",
        successfully_swapped:
            "Your swap completed successfully",
        timeout_eta: "Timeout ETA",
        pay_invoice: "Swap: {{ id }}",
        pay_swap_404: "Swap not found!",
        pay_timeout_blockheight: "Timeout blockheight",
        pay_expected_amount: "Expected amount",
        pay_address: "Address",
        lockup_failed: "Lockup Failed!",
        lockup_failed_subline:
            "Your Onchain lockup failed, wait for the timeout to refund your bitcoin",
        failure_reason: "Failure reason",
        invoice_payment_failure: "Could not pay your lightning invoice",
        download_refund_json: "Download refund JSON",
        download_refund_qr: "Download refund QRCode",
        copy_invoice: "Copy lightning invoice",
        copy_onchain: "Copy onchain address",
        copy_amount: "Copy amount",
        copy_bip21: "Copy BIP21",
        copied: "Copied to clipboard!",
        refund_a_swap: "Refund a swap",
        refund_a_swap_subline:
            "Upload your refund.json file and reclaim you on-chain funds",
        refund_past_swaps: "Past swaps",
        refund_past_swaps_subline:
            "Swaps that got saved into your browsers storage",
        history_no_swaps: "Looks like you didn't do any swaps yet. Click \"Swap\" to get started.",
        refund_address_placeholder: "Refund onchain address",
        refund_clear: "Delete localstorage",
        delete_swap: "Delete swap from localstorage",
        refund_backup: "Backup localstorage",
        delete_localstorage:
            "Are you sure you want to clear your localstorage?\nYour swap information and you refund / claim privatekeys will be lost.",
        tx_in_mempool: "Transaction is in mempool",
        tx_in_mempool_subline: "waiting for confirmation to complete the swap",
        expired: "Swap expired!",
        invoice_expired: "Invoice expired, try again!",
        swap_expired: "You did not complete your payment in time.",
        create_invoice_webln: "create invoice via WebLN",
        pay_invoice_webln: "pay invoice via WebLN",
        select_asset: "Select Asset",
        tx_confirmed: "Transaction confirmed",
        tx_ready_to_claim: "claiming transaction now...",
        transaction_refunded: "Boltz has refunded the Transaction",
        refunded: "You have refunded this swap",
        api_offline: "API is offline",
        refund_explainer: "You will be able to refund after the timeout",
        swap_not_refundable_yet: "Your swap is not refundable yet",
    },
    de: {
        history: "Verlauf",
    },
};

export default dict;
