<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">

    <table id="menuTable" border="1" class="indent">
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <xsl:for-each select="//MENUITEM">
                <tr>
                    <td class="bold" colspan="2">
                        <xsl:value-of select="@name" />
                    </td>
                </tr>
                <xsl:for-each select="ENTRY">
                    <tr id="{position()}">
                        <xsl:attribute name="vegetarian">
                            <xsl:value-of select="boolean(@vegetarian)" />
                        </xsl:attribute>

                        <td>
                            <xsl:value-of select="ITEM" />
                        </td>
                        <td align="right">
                            <xsl:value-of select="PRICE" />
                        </td>
                    </tr>
                </xsl:for-each>
            </xsl:for-each>
        </tbody>
    </table>
</xsl:template>
</xsl:stylesheet>