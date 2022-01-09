<! -- taken from https://github.com/mikhail-cct/ssp-practical/ and edited to be used with my xml file-->

<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">

    <table id="menuTable" border="1" class="indent">
        <thead>
            <tr>
                <th>Name</th>
                <th>Score 0/10</th>
            </tr>
        </thead>
        <tbody>
            <xsl:for-each select="//TYPE">
                <tr>
                <!-- only 2 columns-->
                    <td class="bold" colspan="2">
                        <xsl:value-of select="@name" />
                    </td>
                </tr>
                <xsl:for-each select="ENTRY">
                    <tr id="{position()}">
                        <td>
                            <xsl:value-of select="NAME" />
                        </td>
                        <!--giving a class to my values-->
                        <td class="value" align="right">
                            <xsl:value-of select="SCORE" />
                        </td>
                    </tr>
                </xsl:for-each>
            </xsl:for-each>
        </tbody>
    </table>
</xsl:template>
</xsl:stylesheet>